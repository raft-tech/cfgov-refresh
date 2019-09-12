from django.contrib.postgres.search import SearchVector
from django.core.paginator import InvalidPage, Paginator
from django.db.models import Q
from django.shortcuts import get_object_or_404, render

from prepaid_agreements.models import PrepaidProduct


def validate_page_number(request, paginator):
    """
    A utility for parsing a pagination request,
    catching invalid page numbers and always returning
    a valid page number, defaulting to 1.
    TODO: can be replaced by Paginator.get_page
    when/if upgraded to Django 2.0+
    """
    raw_page = request.GET.get('page', 1)
    try:
        page_number = int(raw_page)
    except ValueError:
        page_number = 1
    try:
        paginator.page(page_number)
    except InvalidPage:
        page_number = 1
    return page_number


def get_available_filter_options(products, filter_name):
    filter_options = set()
    for product in products:
        filter_value = getattr(product, filter_name)
        filter_options.add(filter_value)
    return sorted(filter_options)


def get_available_filters(filtered_sets, products, valid_filters):
    available_filter_options = {}
    applied_filters = filtered_sets.keys()
    for filter_name in valid_filters:
        other_applied_filters = [f for f in applied_filters if f != filter_name]
        if len(other_applied_filters) > 0:
            product_set = filtered_sets[other_applied_filters.pop(0)]
            for additional_filter in other_applied_filters:
                product_set = product_set & filtered_sets[additional_filter]
            available_filter_options[filter_name] = \
                get_available_filter_options(product_set, filter_name)
        else:
            available_filter_options[filter_name] = \
                get_available_filter_options(products.all(), filter_name)

    return available_filter_options


def search_products(search_term, search_field, products):
    search_fields = [
        'issuer_name',
        'other_relevant_parties',
        'name',
        'program_manager',
        'prepaid_type',
    ]
    if search_field and search_field in search_fields:
        search_fields = [search_field]
    products = products.annotate(
        search=SearchVector(
            *search_fields
        ),
    ).filter(search=search_term)

    return products


def filter_products(filters, products):
    filtered_sets = {}
    if 'issuer_name' in filters:
        issuers = Q()
        for issuer in filters['issuer_name']:
            issuers |= Q(issuer_name__iexact=issuer.strip(' '))
        filtered_sets['issuer_name'] = products.filter(issuers)

    if 'prepaid_type' in filters:
        prepaid_types = Q()
        for prepaid_type in filters['prepaid_type']:
            prepaid_types |= Q(prepaid_type__iexact=prepaid_type.title())
        filtered_sets['prepaid_type'] = products.filter(prepaid_types)

    if 'status' in filters:
        filtered_sets['status'] = products.filter(status__iexact=filters['status'][0])

    return filtered_sets


def index(request):
    params = dict(request.GET.iterlists())
    valid_filters = ['prepaid_type', 'status', 'issuer_name']
    filters = {f: params[f] for f in valid_filters if f in params}
    search_term = None
    search_field = None
    products = PrepaidProduct.objects
    total_count = products.count()
    available_filter_options = {}

    if params:
        params.pop('page', None)
        search_term = params.pop('q', None)
        search_field = params.pop('search_field', None)
        if search_field:
            search_field = search_field[0]
        if search_term:
            search_term = search_term[0].strip()
            if search_term != '':
                products = search_products(
                    search_term, search_field, products
                )

        # use filtered sets to get available options for each of the valid
        # filter types
        filtered_sets = filter_products(filters, products)
        applied_filters = filtered_sets.keys()
        if len(applied_filters) > 0:
            available_filter_options = get_available_filters(
                                    filtered_sets, products, valid_filters)
            # get the intersection of the filtered sets of products
            products = filtered_sets[applied_filters.pop(0)]
            for additional_filter in applied_filters:
                products = products & filtered_sets[additional_filter]

    if not available_filter_options:
        all_products = products.all()
        for filter_name in valid_filters:
            available_filter_options[filter_name] = \
                get_available_filter_options(all_products, filter_name)

    current_count = products.count()
    paginator = Paginator(products.all(), 20)
    page_number = validate_page_number(request, paginator)
    page_results = paginator.page(page_number)

    return render(request, 'prepaid_agreements/index.html', {
        'applied_filters': filters,
        'available_filter_options': available_filter_options,
        'current_count': current_count,
        'current_page': page_number,
        'paginator': paginator,
        'query': search_term or '',
        'results': page_results,
        'search_field': search_field,
        'total_count': total_count,
    })


def detail(request, product_id):
    return render(request, 'prepaid_agreements/detail.html', {
        'product': get_object_or_404(PrepaidProduct, pk=product_id)
    })

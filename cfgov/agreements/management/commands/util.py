import os

from agreements.models import Issuer
import boto3

from slugify import slugify


def s3_safe_key(path, prefix=''):
    key = prefix + path.encode('utf-8')
    key = key.replace(' ', '_')
    key = key.replace('%', '')
    key = key.replace(';', '')
    return key

def upload_to_s3(pdf_obj, s3_key):
    AWS_STORAGE_BUCKET_NAME = os.environ.get('AWS_STORAGE_BUCKET_NAME')
    AWS_S3_ACCESS_KEY_ID = os.environ.get('AWS_S3_ACCESS_KEY_ID')
    AWS_S3_SECRET_ACCESS_KEY = os.environ.get('AWS_S3_SECRET_ACCESS_KEY')

    s3_client = boto3.client('s3',
                             aws_access_key_id=AWS_S3_ACCESS_KEY_ID,
                             aws_secret_access_key=AWS_S3_SECRET_ACCESS_KEY)

    s3_client.upload_fileobj(pdf_obj, AWS_STORAGE_BUCKET_NAME, s3_key)


def get_issuer(name):
    slug = slugify(name, to_lower=True)
    try:
        issuer = Issuer.objects.get(slug=slug)
    except Issuer.DoesNotExist:
        issuer = Issuer(slug=slug, name=name)
        issuer.save()
    return issuer


def save_agreement(agreements_zip, raw_path, filename_encoding,
                   outfile, upload=False):
    uri_hostname = 'http://files.consumerfinance.gov'
    s3_prefix = '/a/assets/credit-card-agreements/pdf/'

    zipinfo = agreements_zip.getinfo(raw_path)
    path = raw_path.decode(filename_encoding)

    try:
        issuer_name, filename = path.split('/')
    except ValueError:
        # too many slashes...
        outfile.write("%s Does not match issuer/file.pdf pattern" % path)
        return

    issuer = get_issuer(issuer_name)
    s3_key = s3_safe_key(path, prefix=s3_prefix)

    agreement = issuer.agreement_set.create(
        file_name=filename,
        size=int(zipinfo.file_size),
        uri=uri_hostname + s3_key,
        description=filename)
    agreement.save()

    if upload:
        pdf_file = agreements_zip.open(zipinfo)
        upload_to_s3(pdf_file, s3_key)
        if outfile:
            outfile.write(u'{} uploaded'.format(
                repr(s3_key),
            ))

    return agreement

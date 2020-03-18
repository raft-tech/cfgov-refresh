import clsx from 'clsx';
import { useEffect } from 'react';
import { observer } from 'mobx-react';
import { Link, NavLink, useParams, useHistory, withRouter } from 'react-router-dom';
import { useStore } from '../../../stores';
import { Categories } from '../../../stores/models/categories';
import { useLogger } from '../../../lib/logger';
import { useScrollToTop } from '../../../components/scroll-to-top';
import { BackButton } from '../../../components/button';
import dotProp from 'dot-prop';

import arrowLeft from '@cfpb/cfpb-icons/src/icons/arrow-left.svg';
import iconPlaceholder from '../../../../img/icon-placeholder.png';

const CategoryLink = ({ slug, label, icon = '' }) => <li key={slug}></li>;

function CategoryBrowser({ match }) {
  const { eventStore, uiStore } = useStore();
  const { categories = 'income' } = useParams();
  const history = useHistory();
  const categoryPath = categories.replace(/\//g, '.');
  const category = Categories.get(categoryPath);
  const pathSegments = categoryPath.split('.');
  const parentCategoryPath = pathSegments.slice(0, pathSegments.length - 1)
  const backPath = parentCategoryPath.join('/');

  useLogger(
    'categoryBrowser',
    (group) => {
      group.debug('Category browser category path: %O', categoryPath);
      group.debug('Category object: %O', category);
      group.debug('Category opts: %O', categoryOptions);
    },
    [categoryPath, category]
  );

  useScrollToTop();

  const categoryOptions = category ? (category.subcategories ? category.subcategories : category) : Categories.all;

  return (
    <section className="category-browser">
      <BackButton variant="secondary" onClick={() => history.goBack()}>Back</BackButton>

      <nav className="category-browser__tab-nav">
        <ul className="category-browser__tab-items">
          <li className="category-browser__tab-item">
            <NavLink className="category-browser__tab-link" to={`/calendar/add/income`}>Income</NavLink>
          </li>
          <li className="category-browser__tab-item">
            <NavLink className="category-browser__tab-link" to={`/calendar/add/expense`}>Expense</NavLink>
          </li>
        </ul>
      </nav>

      {category.name && <h2>{category.name}</h2>}

      <ul className="category-links">
        {Object.entries(categoryOptions).map(([key, {name, subcategories, restricted}]) => !restricted && (
          <li key={key} className="category-links__item">
            <Link className="category-links__link" to={`/calendar/add/${categories}/${key}${subcategories ? '' : '/new'}`}>
              <img src={iconPlaceholder} className="category-links__icon" alt={`Category: ${name}`} />
              <span className="category-links__label">{name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default observer(withRouter(CategoryBrowser));

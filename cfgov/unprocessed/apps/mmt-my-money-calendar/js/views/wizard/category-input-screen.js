import { observer } from 'mobx-react';
import { Link, useRouteMatch } from 'react-router-dom';
import { useStore } from '../../stores';
import { useEffect, useState, useCallback } from 'react';
import '../../../img/';

function CategoryInputScreen() {
  const store = useStore();
  const { uiStore, eventStore } = store;

  console.log('Category Input Screen loaded');

  return (
    <section className="starting-balance-step-25">
      <img src="/static/apps/mmt-my-money-calendar/img/pb_3.25.png" alt="" className="u-hide-on-print" />
      <div className="c-step-title">
        <h4>{uiStore.pageTitle}</h4>
      </div>

      <div className="c-row-container c-increment-title-container">
        <div className="c-increment-img">
          <img src={uiStore.pageImage} alt="" className="u-hide-on-print c-increment-icon" />
        </div>
        <div className="c-increment-img">
          <img src="../../..img/expense-img.png" alt="" className="u-hide-on-print c-increment-icon" />
        </div>
      </div>
      <br />

      <div>
        <h3 className="c-increment-subtitle">{uiStore.subtitle}</h3>
      </div>
      <div>{uiStore.description}</div>
      <h4>What is your housing payment due?</h4>
      <div className="c-input-img">
        <img src="/static/apps/mmt-my-money-calendar/img/input-rent-date.png" alt="" className="u-hide-on-print" />
      </div>
      <div>
        <h4>How much do you pay each month for housing (rent or mortgage)?</h4>
      </div>
      <div className="c-input-img">
        <img src="/static/apps/mmt-my-money-calendar/img/input-rent-amount.png" alt="" className="u-hide-on-print" />
      </div>
      <br />

      <div className="c-nav-buttons">
        <div>
          <Link to={`${uiStore.nextScreenPath}`} className="a-btn a-btn__full-on-xs">
            Next
          </Link>
        </div>
        <div>
          <Link to={`{uiStore.prevScreenPath}`} className="a-btn a-btn__full-on-xs">
            Back
          </Link>
        </div>
        <div>
          <Link to="/">Home</Link>
        </div>
      </div>

      <br />
      <br />
    </section>
  );
}

export default observer(CategoryInputScreen);

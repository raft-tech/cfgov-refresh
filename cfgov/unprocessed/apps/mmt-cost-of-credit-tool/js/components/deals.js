import { connect } from 'react-redux';

import { useState } from 'react';

import plus from '@cfpb/cfpb-icons/src/icons/add.svg';
import minus from '@cfpb/cfpb-icons/src/icons/minus.svg';

import { DealOrPromo } from '../components/deal-or-promo';
import { ActionLink } from './controls/action-link';

const Deals = () => {
  const [dealsVisible, setDealsVisible] = useState(false);

  const changeDeals = () => {
    setDealsVisible(!dealsVisible);
  };
  return (
    <div className="o-tool-card-group__gray">
      <div className="action-link__row">
        <div className="action__label">
          <h3>Deals or Promotions</h3>
        </div>
        <div className="action__item" onClick={changeDeals}>
          {dealsVisible ? <ActionLink text="Hide" icon={minus} /> : <ActionLink text="Show" icon={plus} />}
        </div>
      </div>

      <div className="m-tool-card__desc">
        Review your total income, expenses and the amount you set aside for savings.
      </div>
      <div>
        {dealsVisible ? (
          <div>
            <DealOrPromo
              num="1"
              title="Rebate or coupon"
              desc="Is the store offering an amount of money off the purchase price?"
            />
            <DealOrPromo
              num="2"
              title="Zero or reduced interest promotion"
              desc="Is there an interest rate promotional period?"
            />
            <DealOrPromo
              num="3"
              title="Deferred interest promotion"
              desc="IAre you being offered 0% interest if paid in full within a certain
                number of months?"
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    dealOrPromo: state.dealOrPromo,
  };
};

export default connect(mapStateToProps)(Deals);

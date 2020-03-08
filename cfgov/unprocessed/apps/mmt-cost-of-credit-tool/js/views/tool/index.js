import { useState } from 'react';
import { Link } from 'react-router-dom';

import DownPayment from '../../components/down-payment';
import TotalPurchaseAmount from '../../components/total-purchase-amount';
import CreditAprPct from '../../components/credit-apr-pct';
import MonthlyPayment from '../../components/monthly-payment';
import Deals from '../../components/deals';
import { TrueCostBreakdown } from '../../components/true-cost-breakdown';
import { AlternatePayoffScenarios } from '../../components/alternate-payoff-scenarios';
import { TipsAndResources } from '../../components/tips-and-resources';

export default function Tool() {
  const [dealsVisible, setDealsVisible] = useState(false);

  const changeDeals = () => {
    setDealsVisible(!dealsVisible);
  };
  return (
    <section id="tool">
      <Link to="/" className="a-btn a-btn__full-on-xs">
        Home
      </Link>
      <br />
      <div className="m-tool__tag">True Cost Tool</div>
      <h1>Enter the purchase details</h1>
      <div className="m-tool-card__desc">It's okay to estimate if you're not sure.</div>
      <div className="o-tool-card-group">
        <div className="m-tool-card">
          <TotalPurchaseAmount />
        </div>
        <div className="m-tool-card">
          <DownPayment />
        </div>
        <div className="m-tool-card">
          <CreditAprPct />
        </div>
        <div className="m-tool-card">
          <MonthlyPayment />
        </div>
      </div>
      <Deals />
      <div className="m-tool-card">
        <TrueCostBreakdown />
      </div>
      <div className="m-tool-card">
        <AlternatePayoffScenarios />
      </div>
      <div className="m-tool-card">
        <TipsAndResources />
      </div>
    </section>
  );
}

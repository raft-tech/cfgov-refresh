import { Link } from "react-router-dom";

import { TotalPurchaseAmount } from "../../components/total-purchase-amount";
import { DownPayment } from "../../components/down-payment";
import { CreditApr } from "../../components/credit-apr";
import { MonthlyPayment } from "../../components/monthly-payment";
// import { DealsAndPromotions } from "../../components/deals-and-promotions";
import { DealOrPromo } from "../../components/deal-or-promo";
import { TrueCostBreakdown } from "../../components/true-cost-breakdown";
import { AlternatePayoffScenarios } from "../../components/alternate-payoff-scenarios";
import { TipsAndResources } from "../../components/tips-and-resources";

// import { NonPaymentConsequences } from "../../components/non-payment-consequences";
// import { Habits } from "../../components/habits";
// import { Decision } from "../../components/decision";
// import { SectionTip } from "../../components/section-tip";
// import { RadioButtonQuestion } from "../../components/controls/radio-button-question";
// import { DollarSliderInput } from "../../components/controls/dollar-slider-input";
// import { PercentSliderInput } from "../../components/controls/percent-slider-input";
// import { MonthSliderInput } from "../../components/controls/month-slider-input";
// import { DollarInput } from "../../components/controls/dollar-input";
// import { PercentForMonthsInput } from "../../components/controls/percent-for-months-input";

export default function Tool() {
  return (
    <section id="tool">
      <Link
        to="/"
        // onClick={nextPage}
        // onClick="/tool"
        className="a-btn a-btn__full-on-xs"
      >
        Home
      </Link>
      <br />
      <div className="m-tool__tag">True Cost Tool</div>
      <h1>Enter the purchase details</h1>
      <div className="m-tool-card__desc">
        It's okay to estimate if you're not sure.
      </div>
      <div className="o-tool-card-group">
        <div className="m-tool-card">
          <TotalPurchaseAmount />
        </div>
        <div className="m-tool-card">
          <DownPayment />
        </div>
        <div className="m-tool-card">
          <CreditApr />
        </div>
        <div className="m-tool-card">
          <MonthlyPayment />
        </div>

        <div className="o-tool-card-group__gray">
          <h3>Deals and promotions</h3>
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
        <div className="m-tool-card">
          <TrueCostBreakdown />
        </div>
        <div className="m-tool-card">
          <AlternatePayoffScenarios />
        </div>
        <div className="m-tool-card">
          <TipsAndResources />
        </div>
      </div>
    </section>
  );
}

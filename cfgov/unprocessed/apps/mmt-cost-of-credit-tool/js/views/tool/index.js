import { Link } from "react-router-dom";

import { TotalPurchaseAmount } from "../input/total-purchase-amount";
import { DownPayment } from "../input/down-payment";
import { CreditApr } from "../input/credit-apr";
import { MonthlyPayment } from "../input/monthly-payment";
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
      <div className="m-tool__tag">True Cost Tool</div>
      <h1>Enter the purchase details</h1>
      <div className="m-tool-card__desc">
        It's okay to estimate if you're not sure.
      </div>
      <div className="o-tool-card-group">
        <div className="m-tool-card">
          {" "}
          <TotalPurchaseAmount />
        </div>
        <div className="m-tool-card">
          {" "}
          <DownPayment />
        </div>
        <div className="m-tool-card">
          {" "}
          <CreditApr />
        </div>
        <div className="m-tool-card">
          {" "}
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
      {/* <DollarSliderInput
        title="Total purchase amount"
        description="This is..."
      />
      <PercentSliderInput title="Credit APR" description="This is.." />
      <DollarSliderInput title="Credit APR" description="This is..." />
      <MonthSliderInput
        title="Total purchase amount"
        description="This is..."
      />
      <h2>Special financing</h2>
      <DollarInput title="Down payment" description="What amount..." />
      <PercentForMonthsInput
        title="Introductory.."
        description="If there's a special..."
      />
      
      <h2>Alternate payoff scenarios</h2>
      <p className="description">Here are some other...</p>
      <ScenarioTable
        totalPurchaseAmount="$1000"
        creditAprPct="6%"
        monthlyPayment="$42.00"
        monthsToPayOff="12"
        stepMonths={2}
      />
      <h2>Now that you've found...</h2>
      <RadioButtonQuestion
        title="Can you comfortably..."
        options={[
          { value: "yes", label: "Yes" },
          { value: "no", label: "No" },
          { value: "maybe", label: "I'm not sure" }
        ]}
      />
      <NonPaymentConsequences />
      <Habits />
      <Decision />
      <h2>How is this calculated?</h2>
      <p className="description">You are charged interest...</p>
      <SectionTip text="Your are charged interest..." />
      <SectionTip text="Your are charged interest..." />
      <SectionTip
        label="Resource"
        text={
          <>
            You are charged interest...
            <Link to="/resource_url">Here's a link to the resource</Link>
          </>
        }
      /> */}
    </section>
  );
}

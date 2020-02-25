import { Link } from "react-router-dom";

import { TotalPurchaseAmount } from "../../components/total-purchase-amount";
import { DownPayment } from "../../components/down-payment";
import { CreditApr } from "../../components/credit-apr";
import { MonthlyPayment } from "../../components/monthly-payment";
import { DealsAndPromotions } from "../../components/deals-and-promotions";
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
      <div className="m-hero_tag">True Cost Tools</div>
      <h2>Enter the purchase details</h2>
      <div>It's okay to estimate if you're not sure.</div>
      <TotalPurchaseAmount />
      <DownPayment />
      <CreditApr />
      <MonthlyPayment />
      <DealsAndPromotions />
      <TrueCostBreakdown />
      <AlternatePayoffScenarios />
      <TipsAndResources />
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

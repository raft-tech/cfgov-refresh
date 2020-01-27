import { Link } from "react-router-dom";

import { DollarSliderInput } from "../wizard/controls/dollar-slider-input";
import { PercentSliderInput } from "../wizard/controls/percent-slider-input";
import { MonthSliderInput } from "../wizard/controls/month-slider-input";
import { DollarInput } from "../wizard/controls/dollar-input";
import { PercentForMonthsInput } from "../wizard/controls/percent-for-months-input";
import { TrueCostChart } from "../wizard/true-cost-chart";
import { TrueCostDetail } from "../wizard/true-cost-detail";
import { ScenarioTable } from "../wizard/scenario-table";
import { RadioButtonQuestion } from "../wizard/controls/radio-button-question";
import { NonPaymentConsequences } from "../wizard/non-payment-consequences";
import { Habits } from "../wizard/habits";
import { Decision } from "../wizard/decision";
import { SectionTip } from "../wizard/section-tip";

export default function ToolView() {
  return (
    <section id="tool">
      <h1>Total Cost Tool</h1>
      <div>Purchase Details</div>
      <h2>enter the purchase details</h2>
      <DollarSliderInput
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
      <h2>True cost breakdown</h2>
      <TrueCostChart totalPurchaseAmount="$1000" totalFinanceCharge="$100" />
      <TrueCostDetail totalPurchaseAmount="$1000" totalFinanceCharge="$100" />
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
      />
    </section>
  );
}

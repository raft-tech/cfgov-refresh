import { ScenarioTable } from "./scenario-table";

export const AlternatePayoffScenarios = () => {
  return (
    <div className="m-step">
      <div className="m-step__tag true-cost">true cost breakdown</div>
      <div className="m-step__title">Alternate payoff scenarios</div>
      <div className="m-step__desc">
        Here are some other scenarios to compare to:
      </div>
      <ScenarioTable
        totalPurchaseAmount="$1000"
        creditAprPct="6%"
        monthlyPayment="$42.00"
        monthsToPayOff="12"
        stepMonths={2}
      />
      <ScenarioTable
        totalPurchaseAmount="$1000"
        creditAprPct="6%"
        monthlyPayment="$42.00"
        monthsToPayOff="12"
        stepMonths={2}
      />
      <ScenarioTable
        totalPurchaseAmount="$1000"
        creditAprPct="6%"
        monthlyPayment="$42.00"
        monthsToPayOff="12"
        stepMonths={2}
      />
      <ScenarioTable
        totalPurchaseAmount="$1000"
        creditAprPct="6%"
        monthlyPayment="$42.00"
        monthsToPayOff="12"
        stepMonths={2}
      />
    </div>
  );
};

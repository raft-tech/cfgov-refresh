import { Scenario } from "./scenario";

export const AlternatePayoffScenarios = () => {
  return (
    <div className="m-tool-card">
      <div className="m-tool-card__header">
        <h2>Alternate payoff scenarios</h2>
        <div className="m-tool-card__desc">
          Here are some other scenarios to compare to:
        </div>
        <div className="m-tool-card__desc">
          <div>Purchase Amount: $1000</div>
          <div>Interest Rate: 6% </div>
        </div>
      </div>

      <div className="m-tool-card__gray">
        <Scenario
          monthlyPayment="$32.00"
          monthsToPayOff="16"
          truePurchaseCost="$1,250"
        />
      </div>
      <div className="m-tool-card__gray">
        <Scenario
          monthlyPayment="$38"
          monthsToPayOff="14"
          truePurchaseCost="$1,200"
        />
      </div>
      <div className="m-tool-card__gray">
        <Scenario
          monthlyPayment="$46"
          monthsToPayOff="10"
          truePurchaseCost="$1,150"
        />
      </div>
      <div className="m-tool-card__gray">
        <Scenario
          monthlyPayment="$52.00"
          monthsToPayOff="10"
          truePurchaseCost="$1,100"
        />
      </div>
      <div className="m-tool-card__gray">
        <Scenario
          monthlyPayment="$56.00"
          monthsToPayOff="8"
          truePurchaseCost="$1,050"
        />
      </div>
    </div>
  );
};

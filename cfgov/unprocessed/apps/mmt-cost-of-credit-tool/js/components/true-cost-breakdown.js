import { TrueCostChart } from "./true-cost-chart";
import { TrueCostDetail } from "./true-cost-detail";

export const TrueCostBreakdown = () => {
  return (
    <div className="m-step">
      <div className="m-step__tag true-cost">true cost breakdown</div>
      <div className="m-step__title">The true cost of this purchase is:</div>
      <TrueCostChart totalPurchaseAmount="$1000" totalFinanceCharge="$100" />
      <TrueCostDetail totalPurchaseAmount="$1000" totalFinanceCharge="$100" />
    </div>
  );
};

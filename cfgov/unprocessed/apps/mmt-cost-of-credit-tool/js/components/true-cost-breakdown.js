import { TrueCostChart } from "./true-cost-chart";
import { TrueCostDetail } from "./true-cost-detail";
import { TrueCostSlider } from "./true-cost-slider";

export const TrueCostBreakdown = () => {
  return (
    <div>
      <div className="m-tool__tag-green">true cost breakdown</div>
      <div className="o-tool-card-group__green">
        <h2>The true cost of this purchase is:</h2>
        <div className="m-tool-card__wrapper">
          <TrueCostChart
            totalPurchaseAmount="$1000"
            totalFinanceCharge="$100"
          />
        </div>

        <div>
          <TrueCostDetail
            totalPurchaseAmount="$1000"
            totalFinanceCharge="$100"
          />
        </div>

        <div>
          <TrueCostSlider />
        </div>
      </div>
    </div>
  );
};

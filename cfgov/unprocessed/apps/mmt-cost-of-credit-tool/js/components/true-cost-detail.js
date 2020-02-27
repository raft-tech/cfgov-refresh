export const TrueCostDetail = props => (
  <div className="m-tool-card display-row">
    <div className="m-tool-card__sub-container">
      <h3>Total purchase amount</h3>
      <div className="m-tool-card__item-green">{props.totalPurchaseAmount}</div>
    </div>
    <div className="m-tool-card__sub-container">
      <h3>Total finance charge</h3>
      <div className="m-tool-card__item-red">{props.totalFinanceCharge}</div>
    </div>
  </div>
);

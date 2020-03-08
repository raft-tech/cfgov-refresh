import { connect } from 'react-redux';

import { formatCurrency } from '../services/currencyServices';

export const TrueCostDetail = (props) => (
  <div className="m-tool-card display-row">
    <div className="m-tool-card__sub-container">
      <h3>Total purchase amount</h3>
      <div className="m-tool-card__item-green">{formatCurrency(props.totalPurchaseAmount)}</div>
    </div>
    <div className="m-tool-card__sub-container">
      <h3>Total finance charge</h3>
      <div className="m-tool-card__item-red">{formatCurrency(props.totalFinanceCharge)}</div>
    </div>
  </div>
);

export const mapStateToProps = (state) => ({
  totalPurchaseAmount: state.totalPurchaseAmount,
});

export default connect(mapStateToProps)(TrueCostDetail);

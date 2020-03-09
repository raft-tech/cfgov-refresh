import { connect } from 'react-redux';
import { setTotalPurchaseAmount } from '../actions';
import { formatCurrency } from '../lib/currency-helpers';

const TotalPurchaseAmount = (props) => {
  return (
    <div className="m-tool-card__bottom-border">
      <form className="total-purchase-amount__form" onSubmit={(e) => e.preventDefault()}>
        <div className="m-tool__tag">step 1/4</div>
        <h2>Total purchase amount</h2>
        <div className="one-line-desc">Estimate the cost of the item including tax.</div>
        <div className="form-group">
          <input
            className="response-input__long"
            onChange={(e) => props.setTotalPurchaseAmount(e.target.value)}
            defaultValue={formatCurrency(props.totalPurchaseAmount)}
          />
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  totalPurchaseAmount: state.totalPurchaseAmount,
});

export default connect(mapStateToProps, { setTotalPurchaseAmount })(TotalPurchaseAmount);

import store from "../store";
import { connect } from "react-redux";
import { setTotalPurchaseAmount } from "../actions";
import { PropTypes } from "prop-types";

export const TotalPurchaseAmount = props => {
  console.log("the state is ", store.getState());
  console.log("the props is ", props);
  return (
    <div className="m-tool-card__bottom-border">
      <form
        className="total-purchase-amount__form"
        onSubmit={e => e.preventDefault()}
      >
        <div className=" m-tool__tag">step 1/4</div>
        <h2>Total purchase amount</h2>
        <div className="one-line-desc">
          Estimate the cost of the item including tax.
        </div>

        <div className="m-form-field-with-button">
          <div className="form-group">
            <input
              id="total-purchase-amount"
              type="number"
              value={props.totalPurchaseAmount}
              className="response-input__long"
              onChange={e =>
                // props.dispatch(setTotalPurchaseAmount(e.target.value))
                setTotalPurchaseAmount(e.target.value)
              }
            />
          </div>
          {/* <input className="a-btn a-btn__full-on-xs" type="" value="Add" /> */}
        </div>

        <div className="o-form-action"></div>
      </form>
      <div>{console.log("the state is ", store.getState())}</div>
    </div>
  );
};

// TotalPurchaseAmount.propTypes = {
//   setTotalPurchaseAmount: PropTypes.func.isRequired
// };

// TotalPurchaseAmount.defaultProps = {
//   totalPurchaseAmount: 0
// };

export const mapStateToProps = state => ({
  totalPurchaseAmount: state.totalPurchaseAmount
});

export default connect(mapStateToProps)(TotalPurchaseAmount);

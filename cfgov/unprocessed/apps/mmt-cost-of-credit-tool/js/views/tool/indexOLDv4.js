import react from 'react';
import { connect } from 'react-redux';

import store from '../../store';

import { SET_DOWN_PAYMENT } from '../../actions';
// import { Link } from 'react-router-dom';

export function Tool(props) {
  return (
    <div>
      <div className="div-style">totalPurchaseAmount: {props.totalPurchaseAmount}</div>
      <div>DownPaymentAmount: {props.downPaymentAmount}</div>
      <div>creditAprPct: {props.creditAprPct}</div>
      <div>monthsToPayOff: {props.monthsToPayOff}</div>
      <div>totalFinanceCharge: {props.totalFinanceCharge}</div>
      <div>addedCreditCostPct: {props.addedCreditCostPct}</div>
      <div>totalFinanceCharge: {props.totalFinanceCharge}</div>
      <div>addedCreditCostPct: {props.addedCreditCostPct}</div>
      <div>promoDealPct: {props.promoDealPct}</div>
      <div>promoDealMonths: {props.promoDealMonths}</div>

      <div className="div-style">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (!input.value.trim()) {
              return;
            }
            props.dispatch(SET_DOWN_PAYMENT(input.value));
            input.value = '';
          }}
        >
          <label>Down Payment</label>
          <input
            ref={(node) => (input = node)}
            // className="div-style"
            // type="number"
            // defaultValue={props.downPaymentAmount}
            // onChange={(e) => props.dispatch(SET_DOWN_PAYMENT(e.target.value))}
          />
          <button type="submit">Update Down Payment</button>
        </form>
      </div>

      <button
        onClick={() => {
          store.dispatch({
            type: 'SET_DOWN_PAYMENT',
            amount: 777,
          });
          input.value = '';
        }}
      >
        Update Down Payment
      </button>
      <div>SHould update down Payment{props.downPaymentAmount}</div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    totalPurchaseAmount: state.totalPurchaseAmount,
    downPaymentAmount: state.downPaymentAmount,
    creditAprPct: state.creditAprPct,
    monthlyPayment: state.monthlyPayment,
    monthsToPayOff: state.monthsToPayOff,
    trueCostAmount: state.trueCostAmount,
    totalFinanceCharge: state.totalFinanceCharge,
    addedCreditCostPct: state.addedCreditCostPct,
    promoDealPct: state.promoDealPct,
    promoDealMonths: state.promoDealMonths,
  };
};

// const mapDispatchToProps = (dispatch) => ({
//   // rotateAction: (payload) => dispatch(rotateAction(payload)),
//   setDownPayment: (amount) => dispatch(SET_DOWN_PAYMENT(amount)),
// });

// export default connect(mapStateToProps, mapDispatchToProps)(Tool);
export default connect(mapStateToProps)(Tool);

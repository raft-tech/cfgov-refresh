import { connect } from 'react-redux';
import { setMonthlyPayment } from '../actions';
import { setMonthsToPayOff } from '../actions';
import { formatCurrency } from '../lib/currency-helpers';

export const MonthlyPayment = (props) => {
  return (
    <div className="m-tool-card__bottom-border">
      <div className=" m-tool__tag">step 4/4</div>
      <form className="monthly-payment__form" onSubmit={(e) => e.preventDefault()}>
        <h2>Monthly payment</h2>
        <div className="one-line-desc">How much can you comfortably pay each month?</div>
        <div className="form-group">
          <input
            className="response-input__long"
            onChange={(e) => props.setMonthlyPayment(e.target.value)}
            defaultValue={formatCurrency(props.monthlyPayment)}
          />
        </div>
      </form>
      <div className="m-tool__tag"> - or - </div>
      <form className="months-to-payoff__form" onSubmit={(e) => e.preventDefault()}>
        <h2>Months to pay off</h2>
        <div className="m-tool-card__desc">How many months would you like to take to pay this expense off?</div>
        <div className="form-group">
          <input
            className="response-input__long"
            onChange={(e) => props.setMonthsToPayOff(e.target.value)}
            defaultValue={props.monthsToPayOff}
          />
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  monthlyPayment: state.monthlyPayment,
  monthsToPayOff: state.monthsToPayOff,
});

export default connect(mapStateToProps, { setMonthlyPayment, setMonthsToPayOff })(MonthlyPayment);

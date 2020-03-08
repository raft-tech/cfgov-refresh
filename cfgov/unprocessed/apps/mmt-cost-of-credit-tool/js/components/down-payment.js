import { connect } from 'react-redux';
import { setDownPayment } from '../actions';
import { formatCurrency } from '../services/currencyServices';

export const DownPayment = (props) => {
  return (
    <div className="m-tool-card__bottom-border">
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="m-tool__tag">step 2/4</div>
        <h2>
          Down Payment <em>?</em>
        </h2>
        <div className="one-line-desc">How much can you pay upfront in cash?</div>

        <div className="m-form-field-with-button">
          <div className="form-group">
            <input
              className="div-style"
              onChange={(e) => props.setDownPayment(e.target.value)}
              defaultValue={formatCurrency(props.downPaymentAmount)}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    downPaymentAmount: state.downPaymentAmount,
  };
};

export default connect(mapStateToProps, { setDownPayment })(DownPayment);

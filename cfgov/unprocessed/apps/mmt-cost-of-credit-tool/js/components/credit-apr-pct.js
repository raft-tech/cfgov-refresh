import { connect } from 'react-redux';
import { setCreditAprPct } from '../actions';

export const CreditAprPct = (props) => {
  return (
    <div className="m-tool-card__bottom-border">
      <form className="credit-apr-pct__form" onSubmit={(e) => e.preventDefault()}>
        <div className=" m-tool__tag">step 3/4</div>
        <h2>
          Credit APR <em>?</em>
        </h2>
        <div className="one-line-desc">Enter the annual interest rate for the credit card you're paying with.</div>

        <div className="m-form-field-with-button">
          <div className="form-group">
            <input
              className="div-style"
              onChange={(e) => props.setCreditAprPct(e.target.value)}
              defaultValue={props.creditAprPct}
            />
          </div>
        </div>

        <div className="o-form-action"></div>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  creditAprPct: state.creditAprPct,
});

export default connect(mapStateToProps, { setCreditAprPct })(CreditAprPct);

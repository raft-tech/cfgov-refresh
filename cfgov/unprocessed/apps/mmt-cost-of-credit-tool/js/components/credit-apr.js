export const CreditApr = () => {
  return (
    <div className="m-tool-card__bottom-border">
      <form>
        <div className=" m-tool__tag">step 3/4</div>
        <h2>
          Credit APR <em>?</em>
        </h2>
        <div className="one-line-desc">
          Enter the annual interest rate for the credit card you're paying with.
        </div>

        <div className="m-form-field-with-button">
          <div className="form-group">
            <input
              id="credit-apr"
              type=""
              name=""
              placeholder=""
              className="response-input__long"
            />
          </div>
          {/* <input className="a-btn a-btn__full-on-xs" type="" value="Add" /> */}
        </div>

        <div className="o-form-action"></div>
      </form>
    </div>
  );
};

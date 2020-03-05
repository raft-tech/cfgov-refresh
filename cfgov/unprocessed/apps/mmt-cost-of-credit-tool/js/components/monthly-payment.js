export const MonthlyPayment = () => {
  return (
    <div className="m-tool-card__bottom-border">
      <form>
        <div className=" m-tool__tag">step 4/4</div>
        <h2>Monthly payment</h2>

        <div className="m-form-field-with-button">
          <div className="one-line-desc">
            How much can you comfortably pay each month?
          </div>
          <div className="form-group">
            <input
              id="monthly-payment"
              type=""
              name=""
              placeholder=""
              className="response-input__long"
            />
            <div className="m-tool__tag"> - or - </div>
            <h2>Months to pay off</h2>
            <div className="m-tool-card__desc">
              How many months would you like to take to pay this expense off?
            </div>
            <input
              id="how-many-months"
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

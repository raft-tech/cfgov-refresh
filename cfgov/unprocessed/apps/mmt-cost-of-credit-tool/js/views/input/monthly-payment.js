export default function MonthlyPayment() {
  return (
    <div className="m-tool-card__bottom-border">
      <form>
        <div className=" m-tool__tag">step 4/4</div>
        <h2>Monthly payment</h2>

        <div class="m-form-field-with-button">
          <div className="one-line-desc">
            How much can you comfortably pay each month?
          </div>
          <div class="form-group">
            <input
              id=""
              type=""
              name=""
              placeholder=""
              className="response-input__long"
            />
            <div className="m-tool__tag"> - or - </div>
            <h2>Months to pay off</h2>
            <div className="m-tool-card__desc">
              How much can you comfortably pay each month?
            </div>
            <input
              id=""
              type=""
              name=""
              placeholder=""
              className="response-input__long"
            />
          </div>
          {/* <input className="a-btn a-btn__full-on-xs" type="" value="Add" /> */}
        </div>

        <div class="o-form-action"></div>
      </form>
    </div>
  );
}

export const DownPayment = () => {
  return (
    <div className="m-tool-card__bottom-border">
      <form>
        <div className=" m-tool__tag">step 2/4</div>
        <h2>
          Down Payment <em>?</em>
        </h2>
        <div className="one-line-desc">
          How much can you pay upfront in cash?
        </div>

        <div className="m-form-field-with-button">
          <div className="form-group">
            <input
              id="down-payment"
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

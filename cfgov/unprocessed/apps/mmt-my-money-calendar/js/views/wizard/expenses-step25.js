import { Link } from "react-router-dom";
export default function ExpensesStep25() {
  // add class for step-title; center justify for the rest

  return (
    <section className="starting-balance-step-25">
      <img
        src="/static/apps/mmt-my-money-calendar/img/pb_3.25.png"
        alt=""
        className="u-hide-on-print"
      />
      <div className="c-step-title">
        <h4>Expense Step</h4>
      </div>

      <div>
        {" "}
        <div className="c-row-container">
          <div>
            <img
              src="/static/apps/mmt-my-money-calendar/img/housingUtilities.png"
              alt=""
              className="u-hide-on-print c-increment-icon"
            />
          </div>
          <div>
            <h2 className="step-title">Housing</h2>
          </div>
        </div>
        <h3 className="step-title">
          Tell us about your <em>Housing Costs</em>
        </h3>
      </div>
      <br />
      <h4>How much do you pay each month for housing (rent or mortgage)?</h4>
      <img
        src="/static/apps/mmt-my-money-calendar/img/input-checking.png"
        alt=""
        className="u-hide-on-print"
      />
      <h4>What is the due date?</h4>
      <img
        src="/static/apps/mmt-my-money-calendar/img/input-checking.png"
        alt=""
        className="u-hide-on-print"
      />
      <br />
      <br />

      <div className="c-nav-buttons">
        <div>
          <Link to="/expenses-step50" className="a-btn a-btn__full-on-xs">
            Next
          </Link>
        </div>
        <div>
          <Link to="/expenses-step25" className="a-btn a-btn__full-on-xs">
            Back
          </Link>
        </div>
        <div>
          <Link to="/">Home</Link>
        </div>
      </div>

      <br />
      <br />
    </section>
  );
}

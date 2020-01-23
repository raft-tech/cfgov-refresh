import { Link } from "react-router-dom";
export default function ExpensesStep50() {
  // add class for step-title; center justify for the rest

  return (
    <section className="starting-balance-step-75">
      <img
        src="/static/apps/mmt-my-money-calendar/img/pb_3.75.png"
        alt=""
        className="u-hide-on-print"
      />
      <div className="c-step-title">
        <h4>Expense: Phone</h4>
      </div>

      <div className="c-row-container c-increment-title-container">
        <div className="c-increment-img">
          <img
            src="/static/apps/mmt-my-money-calendar/img/icon-phone.png"
            alt=""
            className="u-hide-on-print c-increment-icon"
          />
        </div>
      </div>
      <br />
      <div className="c-increment-subtitle">
        <h3>
          Let's look at your <em>Phone</em> costs
        </h3>
      </div>
      <br />
      <label>Due date</label>

      <div className="c-input-img">
        <img
          src="/static/apps/mmt-my-money-calendar/img/input-phone-date.png"
          alt=""
          className="u-hide-on-print"
        />
      </div>
      <p>How much is it?</p>

      <div className="c-input-img">
        <img
          src="/static/apps/mmt-my-money-calendar/img/input-phone-amount.png"
          alt=""
          className="u-hide-on-print"
        />
      </div>

      <div className="c-nav-buttons">
        <div>
          <Link to="/expenses-step-summary" className="a-btn a-btn__full-on-xs">
            You finished adding expenses! Take a look at a summary.
          </Link>
        </div>
        <div>
          <Link to="/expenses-step50" className="a-btn a-btn__full-on-xs">
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

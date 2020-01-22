import { Link } from "react-router-dom";
export default function ExpensesStep50() {
  // add class for step-title; center justify for the rest

  return (
    <section className="starting-balance-step-25">
      <img
        src="/static/apps/mmt-my-money-calendar/img/pb_3.75.png"
        alt=""
        className="u-hide-on-print"
      />
      <div className="c-step-title">
        <h4>Expense Step</h4>
      </div>
      <div className="c-row-container">
        <div>
          <img
            src="/static/apps/mmt-my-money-calendar/img/phone.png"
            alt=""
            className="u-hide-on-print c-increment-icon"
          />
        </div>
        <div>
          <h2 className="step-title">Phone</h2>
        </div>
      </div>

      <div>
        <h2 className="step-title">
          Let's look at your <em>Phone</em> costs
        </h2>
      </div>

      <br />
      <br />

      <label>Due date</label>
      <img
        src="/static/apps/mmt-my-money-calendar/img/input-checking.png"
        alt=""
        className="u-hide-on-print"
      />
      <p>How much is it?</p>
      <img
        src="/static/apps/mmt-my-money-calendar/img/input-empty.png"
        alt=""
        className="u-hide-on-print"
      />
      <br />
      <br />

      <div className="c-nav-buttons">
        <div>
          <Link to="/summary" className="a-btn a-btn__full-on-xs">
            Congratulations! You have completed your work. Let's look at the
            calendar.
          </Link>
        </div>
        <div>
          <Link to="/expenses-step75" className="a-btn a-btn__full-on-xs">
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

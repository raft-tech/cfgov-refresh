import { Link } from "react-router-dom";
export default function ExpensesStep50() {
  // add class for step-title; center justify for the rest

  return (
    <section className="starting-balance-step-25">
      <img
        src="/static/apps/mmt-my-money-calendar/img/pb_3.50.png"
        alt=""
        className="u-hide-on-print"
      />
      <div className="c-step-title">
        <h4>Expense Step</h4>
      </div>

      <div className="c-row-container c-increment-title-container">
        <div className="c-increment-img">
          <img
            src="/static/apps/mmt-my-money-calendar/img/icon-groceries.png"
            alt=""
            className="u-hide-on-print c-increment-icon"
          />
        </div>
        <div className="c-increment-title">
          <h3>Groceries</h3>
        </div>
      </div>

      <br />
      <div>
        <h3 className="c-increment-subtitle">
          Estimate what you spend on your <em>groceries.</em>
        </h3>
      </div>

      <img
        src="/static/apps/mmt-my-money-calendar/img/checked-radio.png"
        width="20"
        alt=""
        className="u-hide-on-print"
      />
      <label>Weekly amount</label>
      <br />
      <br />
      <img
        src="/static/apps/mmt-my-money-calendar/img/unchecked-radio.png"
        width="20"
        alt=""
        className="u-hide-on-print"
      />
      <label>Monthly amount</label>
      <br />
      <br />

      <h4>How much do you spend?</h4>
      <img
        src="/static/apps/mmt-my-money-calendar/img/input-grocery-week.png"
        alt=""
        className="u-hide-on-print"
      />

      <br />
      <br />

      <div className="c-nav-buttons">
        <div>
          <Link to="/expenses-step75" className="a-btn a-btn__full-on-xs">
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

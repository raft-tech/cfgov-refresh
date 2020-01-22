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
      <div>
        {" "}
        <img
          src="/static/apps/mmt-my-money-calendar/img/groceriesOther.png"
          alt=""
          width="75px"
          className="u-hide-on-print"
        />
        <h2 className="step-title">
          Let's consider your <em>Grocery</em> costs
        </h2>
      </div>
      <br />
      <h4>
        Take an estimate of your weekly or monthly grocery bill and add it
        below.
      </h4>

      <img
        src="/static/apps/mmt-my-money-calendar/img/unchecked-radio.png"
        width="20"
        alt=""
        className="u-hide-on-print"
      />
      <label>Weekly amount</label>
      <br />
      <br />
      <img
        src="/static/apps/mmt-my-money-calendar/img/checked-radio.png"
        width="20"
        alt=""
        className="u-hide-on-print"
      />
      <label>Monthly amount</label>
      <br />
      <br />

      <h4>How much do you spend?</h4>
      <img
        src="/static/apps/mmt-my-money-calendar/img/input-empty.png"
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

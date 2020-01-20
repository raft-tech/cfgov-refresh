import { Link } from "react-router-dom";
export default function ExpensesStep50() {
  // add class for step-title; center justify for the rest

  return (
    <section className="starting-balance-step-25">
      <Link to="/">Back Home</Link>
      <img
        src="/static/apps/mmt-my-money-calendar/img/pb_3.50.png"
        alt=""
        className="u-hide-on-print"
      />
      <div className="c-step-title">Expense Step</div>
      <div>
        {" "}
        <img
          src="/static/apps/mmt-my-money-calendar/img/debtPayment.png"
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
      <br />

      <Link to="/expenses-step75" className="a-btn a-btn__full-on-xs">
        Next
      </Link>
      <br />
      <br />
    </section>
  );
}

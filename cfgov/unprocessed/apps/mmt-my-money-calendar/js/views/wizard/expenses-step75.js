import { Link } from "react-router-dom";
export default function ExpensesStep50() {
  // add class for step-title; center justify for the rest

  return (
    <section className="starting-balance-step-25">
      <Link to="/">Back Home</Link>
      <img
        src="/static/apps/mmt-my-money-calendar/img/pb_3.75.png"
        alt=""
        className="u-hide-on-print"
      />
      <div className="c-step-title">Expense Step</div>

      <div>
        {" "}
        <img
          src="/static/apps/mmt-my-money-calendar/img/phone.png"
          alt=""
          width="75px"
          className="u-hide-on-print"
        />
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

      <Link to="/summary" className="a-btn a-btn__full-on-xs">
        Congratulations! You have completed your work. Let's look at the
        calendar.
      </Link>
      <br />
      <br />
    </section>
  );
}

import { Link } from "react-router-dom";
export default function StartingBalance50() {
  // add class for step-title; center justify for the rest

  return (
    <section className="starting-balance-step-25">
      <Link to="/">Back Home</Link>
      <img
        src="/static/apps/mmt-my-money-calendar/img/pb_1.75.png"
        alt=""
        className="u-hide-on-print"
      />
      <h3 className="step-title">Savings Account</h3>
      <img
        src="/static/apps/mmt-my-money-calendar/img/debtPayment.png"
        alt=""
        width="30"
        className="u-hide-on-print"
      />
      <br />
      <br />
      <h4>
        What is the balance in your <em>savings</em> right now?
      </h4>
      <br />
      <img src="/static/apps/mmt-my-money-calendar/cash.png" />
      <br />
      <br />
      <br />

      <Link to="/income-step" className="a-btn a-btn__full-on-xs">
        Great! Now, Add your Incomes
      </Link>
      <br />
      <br />
    </section>
  );
}

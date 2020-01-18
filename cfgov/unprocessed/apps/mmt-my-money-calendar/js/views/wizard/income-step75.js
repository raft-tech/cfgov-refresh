import { Link } from "react-router-dom";
export default function IncomeStep75() {
  // add class for step-title; center justify for the rest

  return (
    <section className="starting-balance-step-25">
      <Link to="/">Back Home</Link>
      <img
        src="/static/apps/mmt-my-money-calendar/img/pb_1.25.png"
        alt=""
        className="u-hide-on-print"
      />
      <h2 className="step-title">Starting Balance Step</h2>
      <br />
      <br />
      <div>
        {" "}
        <img
          src="/static/apps/mmt-my-money-calendar/img/debtPayment.png"
          alt=""
          width="30"
          className="u-hide-on-print"
        />
        <h3 className="step-title">Checking Account</h3>
      </div>

      <br />
      <br />
      <h4>
        What is the balance in your <em>checking account</em> right now?
      </h4>
      <br />
      <img
        src="/static/apps/mmt-my-money-calendar/img/input-checking.png"
        alt=""
        className="u-hide-on-print"
      />
      <br />
      <br />
      <br />

      <Link to="/starting-balance-step50" className="a-btn a-btn__full-on-xs">
        Next
      </Link>
      <br />
      <br />
    </section>
  );
}

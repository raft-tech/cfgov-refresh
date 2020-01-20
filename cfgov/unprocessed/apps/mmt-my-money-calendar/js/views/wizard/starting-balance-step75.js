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
      <div className="c-step-title">Starting Balance Step</div>
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
        <h2 className="step-title">Cash</h2>
      </div>

      <br />
      <br />
      <h4>
        Do you have any other forms of <em>cash</em> right now? This includes
        prepaid cards, cash in the house and any other sources
      </h4>
      <br />
      <img
        src="/static/apps/mmt-my-money-calendar/img/input-cash.png"
        alt=""
        className="u-hide-on-print"
      />
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

import { Link } from "react-router-dom";
export default function StartingBalance50() {
  // add class for step-title; center justify for the rest

  return (
    <section className="starting-balance-step-25">
      <img
        src="/static/apps/mmt-my-money-calendar/img/pb_1.75.png"
        alt=""
        className="u-hide-on-print"
      />
      <div className="c-step-title">
        <h4>Starting Balance Step</h4>
      </div>
      <br />
      <br />
      <div className="c-row-container">
        <div>
          <img
            src="/static/apps/mmt-my-money-calendar/img/debtPayment.png"
            alt=""
            className="u-hide-on-print c-increment-icon"
          />
        </div>
        <div>
          <h2 className="step-title">Cash</h2>
        </div>
      </div>
      <h4>
        Do you have any other forms of <em>cash</em> right now? This includes
        prepaid cards, cash in the house and any other sources
      </h4>
      <img
        src="/static/apps/mmt-my-money-calendar/img/input-cash.png"
        alt=""
        className="u-hide-on-print"
      />
      <br />

      <div className="c-nav-buttons">
        <div>
          <Link to="/income-step" className="a-btn a-btn__full-on-xs">
            Great! Now, Add your Incomes
          </Link>
        </div>
        <div>
          <Link
            to="/starting-balance-step75"
            className="a-btn a-btn__full-on-xs"
          >
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

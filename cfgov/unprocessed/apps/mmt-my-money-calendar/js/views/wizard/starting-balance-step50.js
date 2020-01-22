import { Link } from "react-router-dom";
export default function StartingBalance50() {
  // add class for step-title; center justify for the rest

  return (
    <section className="starting-balance-step-25">
      <img
        src="/static/apps/mmt-my-money-calendar/img/pb_1.50.png"
        alt=""
        className="u-hide-on-print"
      />
      <div className="c-step-title">
        <h4>Starting Balance Step</h4>
      </div>

      <div className="c-row-container c-increment-title-container">
        <div className="c-increment-img">
          <img
            src="/static/apps/mmt-my-money-calendar/img/icon-debt.png"
            alt=""
            className="u-hide-on-print c-increment-icon"
          />
        </div>
        <div className="c-increment-title">
          <h3>Savings Account</h3>
        </div>
      </div>

      <br />
      <h4>
        What is the balance in your <em>savings</em> right now?
      </h4>
      <img
        src="/static/apps/mmt-my-money-calendar/img/input-savings.png"
        alt=""
        className="u-hide-on-print"
      />
      <br />

      <div className="c-nav-buttons">
        <div>
          <Link
            to="/starting-balance-step75"
            className="a-btn a-btn__full-on-xs"
          >
            Next
          </Link>
        </div>
        <div>
          <Link
            to="/starting-balance-step25"
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

import { Link } from "react-router-dom";
export default function StartingBalance25() {
  // add class for step-title; center justify for the rest

  return (
    <section className="starting-balance-step-25">
      <img
        src="/static/apps/mmt-my-money-calendar/img/pb_1.25.png"
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
          <h3>Checking Account</h3>
        </div>
      </div>
      <br />
      <h4>
        What is the balance in your <em>checking account</em> right now?
      </h4>
      <img
        src="/static/apps/mmt-my-money-calendar/img/input-checking.png"
        alt=""
        className="u-hide-on-print"
      />
      <br />
      <div className="c-nav-buttons">
        <div>
          <Link
            to="/starting-balance-step50"
            className="a-btn a-btn__full-on-xs"
          >
            Next
          </Link>
        </div>
        <div>
          <Link to="/starting-balance-step" className="a-btn a-btn__full-on-xs">
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

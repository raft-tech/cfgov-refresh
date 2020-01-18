import { Link } from "react-router-dom";
export default function StartingBalance() {
  // add class for step-title; center justify for the rest

  return (
    <section className="starting-balance-step">
      <Link to="/">Back Home</Link>
      <img
        src="/static/apps/mmt-my-money-calendar/img/pb_1.png"
        alt=""
        className="u-hide-on-print"
      />
      <h3 className="step-title">Starting Balance Step</h3>
      <img
        src="/static/apps/mmt-my-money-calendar/img/starting_balance.png"
        alt=""
        className="u-hide-on-print"
      />
      <br />
      <br />
      <h2>
        Today is January 15, 2020. <br />
        Tell us what cash your have on hand as of today.
      </h2>
      <br />
      <img
        src="/static/apps/mmt-my-money-calendar/img/checked_box.png"
        alt=""
        width="20px"
        className="u-hide-on-print"
      />
      <label class="a-label">
        <span>Checking account</span>
      </label>
      <br />
      <img
        src="/static/apps/mmt-my-money-calendar/img/checked_box.png"
        alt=""
        width="20px"
        className="u-hide-on-print"
      />
      <label class="a-label">
        <span>Savings account</span>
      </label>
      <br />
      <img
        src="/static/apps/mmt-my-money-calendar/img/unchecked_box.png"
        alt=""
        width="20px"
        className="u-hide-on-print"
      />
      <label class="a-label">
        <span>Cash</span>
      </label>
      <br />
      <img
        src="/static/apps/mmt-my-money-calendar/img/unchecked_box.png"
        alt=""
        width="20px"
        className="u-hide-on-print"
      />
      <label class="a-label">
        <span>Prepaid</span>
      </label>
      <br />
      <img
        src="/static/apps/mmt-my-money-calendar/img/unchecked_box.png"
        alt=""
        width="20px"
        className="u-hide-on-print"
      />
      <label class="a-label">
        <span>Other</span>
      </label>
      <br />
      <br />
      <br />

      <Link to="/starting-balance-step25" className="a-btn a-btn__full-on-xs">
        Add the details
      </Link>
      <br />
      <br />
    </section>
  );
}

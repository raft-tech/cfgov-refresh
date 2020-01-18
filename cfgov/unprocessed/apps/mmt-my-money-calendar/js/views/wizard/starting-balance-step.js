import { Link } from "react-router-dom";
export default function StartingBalance() {
  // add class for step-title; center justify for the rest

  return (
    <section className="wizard">
      <img
        src="/static/apps/mmt-my-money-calendar/img/pb_1.png"
        alt=""
        class="u-hide-on-print"
      />
      <h3 className="step-title">Starting Balance</h3>
      <img
        src="/static/apps/mmt-my-money-calendar/img/starting_balance.png"
        alt=""
        class="u-hide-on-print"
      />
      <br />
      <br />
      <h4>Tell us about your Cash on Hand</h4>
      <br />
      <img
        src="/static/apps/mmt-my-money-calendar/img/checked_box.png"
        alt=""
        width="20px"
        class="u-hide-on-print"
      />
      <label class="a-label">
        <span>Checking account</span>
      </label>
      <br />
      <img
        src="/static/apps/mmt-my-money-calendar/img/checked_box.png"
        alt=""
        width="20px"
        class="u-hide-on-print"
      />
      <label class="a-label">
        <span>Savings account</span>
      </label>
      <br />
      <img
        src="/static/apps/mmt-my-money-calendar/img/unchecked_box.png"
        alt=""
        width="20px"
        class="u-hide-on-print"
      />
      <label class="a-label">
        <span>Cash</span>
      </label>
      <br />
      <img
        src="/static/apps/mmt-my-money-calendar/img/unchecked_box.png"
        alt=""
        width="20px"
        class="u-hide-on-print"
      />
      <label class="a-label">
        <span>Prepaid</span>
      </label>
      <br />
      <img
        src="/static/apps/mmt-my-money-calendar/img/unchecked_box.png"
        alt=""
        width="20px"
        class="u-hide-on-print"
      />
      <label class="a-label">
        <span>Other</span>
      </label>
      <br />
      <br />
      <br />

      <Link to="/wizard/income-step" className="a-btn a-btn__full-on-xs">
        Add your Cash on Hand
      </Link>
      <br />
      <br />
    </section>
  );
}

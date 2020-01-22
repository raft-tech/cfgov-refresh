import { Link } from "react-router-dom";
export default function StartingBalance() {
  // add class for step-title; center justify for the rest

  return (
    <section className="c-starting-balance-step c-step">
      <img
        src="/static/apps/mmt-my-money-calendar/img/pb_1.png"
        alt=""
        className="u-hide-on-print"
      />
      <div className="c-step-title">
        <h4>Starting Balance Step</h4>
      </div>
      <div className="c-step-container">
        <div className="c-step-img"></div>
        <img
          src="/static/apps/mmt-my-money-calendar/img/starting_balance.png"
          alt=""
          className="u-hide-on-print"
        />
        <div className="c-step-title">
          Let's look at the cash you have on hand.
        </div>
      </div>
      <div>
        This is cash as of today, <strong>January 15, 2020</strong>. Check off
        those that apply to you.
      </div>
      <div className="c-item-list">
        <div className="c-item">
          <div className="c-checkedbox-icon">
            <img
              src="/static/apps/mmt-my-money-calendar/img/checked_box.png"
              alt=""
              classNames="u-hide-on-print"
            />
          </div>

          <div>
            <span>Checking Account</span>
          </div>
        </div>
        <div className="c-item">
          <div className="c-checkedbox-icon">
            <img
              src="/static/apps/mmt-my-money-calendar/img/checked_box.png"
              alt=""
              className="u-hide-on-print c-checkedbox-icon"
            />
          </div>

          <div>
            <span>Savings Account</span>
          </div>
        </div>
        <div className="c-item">
          <div>
            <img
              src="/static/apps/mmt-my-money-calendar/img/unchecked_box.png"
              alt=""
              className="u-hide-on-print c-checkedbox-icon"
            />
          </div>

          <div>
            <span>Cash</span>
          </div>
        </div>
        <div className="c-item">
          <div>
            <img
              src="/static/apps/mmt-my-money-calendar/img/checked_box.png"
              alt=""
              className="u-hide-on-print c-checkedbox-icon"
            />
          </div>

          <div>
            <span>Prepaid</span>
          </div>
        </div>
        <div className="c-item">
          <div>
            <img
              src="/static/apps/mmt-my-money-calendar/img/unchecked_box.png"
              alt=""
              className="u-hide-on-print c-checkedbox-icon"
            />
          </div>

          <div>
            <span>Other</span>
          </div>
        </div>
      </div>

      <br />
      <br />
      <div className="c-nav-buttons">
        <div>
          <Link
            to="/starting-balance-step25"
            className="a-btn a-btn__full-on-xs"
          >
            Add the details
          </Link>
        </div>
        <div>
          <Link to="/" className="a-btn a-btn__full-on-xs">
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

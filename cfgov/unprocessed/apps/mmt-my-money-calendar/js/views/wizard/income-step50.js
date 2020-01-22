import { Link } from "react-router-dom";
export default function IncomeStep50() {
  // add class for step-title; center justify for the rest

  return (
    <section className="starting-balance-step-25">
      <img
        src="/static/apps/mmt-my-money-calendar/img/pb_2.25.png"
        alt=""
        className="u-hide-on-print"
      />
      <div className="c-step-title">
        <h4>Income Step</h4>
      </div>
      <div className="c-row-container c-increment-title-container">
        <div className="c-increment-img">
          <img
            src="/static/apps/mmt-my-money-calendar/img/icon-childsupport.png"
            alt=""
            className="u-hide-on-print c-increment-icon"
          />
        </div>
        <div className="c-increment-title">
          <h3>Child Support</h3>
        </div>
      </div>
      <br />
      <div>
        <h3 className="c-increment-subtitle">
          How often do you receive your <em>child support payments</em>?
        </h3>
      </div>

      <div className="c-item-list">
        <div className="c-item">
          <div className="c-checkedbox-icon">
            <img
              src="/static/apps/mmt-my-money-calendar/img/unchecked-radio.png"
              alt=""
              classNames="u-hide-on-print"
            />
          </div>

          <div>
            <span>Weekly</span>
          </div>
        </div>
        <div className="c-item">
          <div className="c-checkedbox-icon">
            <img
              src="/static/apps/mmt-my-money-calendar/img/checked-radio.png"
              alt=""
              classNames="u-hide-on-print"
            />
          </div>
          <div>
            <span>Monthly</span>
          </div>
        </div>
      </div>
      <div className="c-increment-subtitle">
        <h4>
          When do you expect to receive your next child support payment (get
          calendar image?
        </h4>
      </div>

      <img
        src="/static/apps/mmt-my-money-calendar/img/input-child-support-date.png"
        alt=""
        className="u-hide-on-print"
      />
      <br />
      <h4>How much do you expect your payment to be?</h4>
      <img
        src="/static/apps/mmt-my-money-calendar/img/input-child-support-amount.png"
        alt=""
        className="u-hide-on-print"
      />

      <div className="c-nav-buttons">
        <div>
          <Link to="/income-step75" className="a-btn a-btn__full-on-xs">
            Next
          </Link>
        </div>
        <div>
          <Link to="/income-step25" className="a-btn a-btn__full-on-xs">
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

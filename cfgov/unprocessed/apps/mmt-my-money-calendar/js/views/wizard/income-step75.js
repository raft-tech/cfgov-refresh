import { Link } from "react-router-dom";
export default function IncomeStep75() {
  // add class for step-title; center justify for the rest

  return (
    <section className="starting-balance-step-25">
      <img
        src="/static/apps/mmt-my-money-calendar/img/pb_2.75.png"
        alt=""
        className="u-hide-on-print"
      />
      <div className="c-step-title">
        <h4>Income Step</h4>
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
          <h3>SNAP</h3>
        </div>
      </div>
      <br />
      <div>
        <h3 className="c-increment-subtitle">
          When do you receive your <em>SNAP</em> payments?
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
      <br />
      <br />
      <h4>When do you expect to receive your next SNAP payment?</h4>
      <img
        src="/static/apps/mmt-my-money-calendar/img/input-snap-payment-date.png"
        alt=""
        className="u-hide-on-print"
      />
      <br />
      <h4>How much do you expect your payment to be?</h4>
      <img
        src="/static/apps/mmt-my-money-calendar/img/input-snap-payment-amount.png"
        alt=""
        className="u-hide-on-print"
      />

      <div className="c-nav-buttons">
        <div>
          <Link to="/expenses-step" className="a-btn a-btn__full-on-xs">
            Next
          </Link>
        </div>
        <div>
          <Link to="/income-step50" className="a-btn a-btn__full-on-xs">
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

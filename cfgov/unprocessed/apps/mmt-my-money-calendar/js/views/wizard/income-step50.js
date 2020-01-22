import { Link } from "react-router-dom";
export default function IncomeStep50() {
  // add class for step-title; center justify for the rest

  return (
    <section className="starting-balance-step-25">
      <img
        src="/static/apps/mmt-my-money-calendar/img/pb_1.25.png"
        alt=""
        className="u-hide-on-print"
      />
      <div className="c-step-title">
        <h4>Income Step</h4>
      </div>
      <div className="c-row-container">
        <div>
          <img
            src="/static/apps/mmt-my-money-calendar/img/childSupport.png"
            alt=""
            className="u-hide-on-print c-increment-icon"
          />
        </div>
        <div>
          <h2 className="step-title">Child Support</h2>
        </div>
      </div>

      <br />
      <br />

      <h4>
        How often do you receive your <em>child support payments</em>?
      </h4>
      <br />
      <img
        src="/static/apps/mmt-my-money-calendar/img/unchecked-radio.png"
        width="20"
        alt=""
        className="u-hide-on-print"
      />
      <label>Weekly</label>
      <br />
      <img
        src="/static/apps/mmt-my-money-calendar/img/checked-radio.png"
        width="20"
        alt=""
        className="u-hide-on-print"
      />
      <label>Every two weeks</label>
      <br />
      <img
        src="/static/apps/mmt-my-money-calendar/img/unchecked-radio.png"
        width="20"
        alt=""
        className="u-hide-on-print"
      />
      <label>Twice monthly</label>
      <br />
      <img
        src="/static/apps/mmt-my-money-calendar/img/unchecked-radio.png"
        width="20"
        alt=""
        className="u-hide-on-print"
      />
      <label>Once a month</label>
      <br />
      <br />
      <h4>
        When do you expect to receive your next child support payment (get
        calendar image?
      </h4>
      <img
        src="/static/apps/mmt-my-money-calendar/img/input-empty.png"
        alt=""
        className="u-hide-on-print"
      />
      <br />
      <h4>How much do you expect your payment to be?</h4>
      <img
        src="/static/apps/mmt-my-money-calendar/img/input-empty.png"
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

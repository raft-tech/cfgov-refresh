import { Link } from "react-router-dom";
export default function IncomeStep25() {
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
      <div className="c-row-container">
        <div>
          <img
            src="/static/apps/mmt-my-money-calendar/img/Job.png"
            alt=""
            className="u-hide-on-print c-increment-icon"
          />
        </div>
        <div>
          <h2 className="step-title">Job</h2>
        </div>
      </div>

      <div>
        Let's gather some details on your <em>Job</em>
      </div>

      <br />

      <h4>Name</h4>
      <img
        src="/static/apps/mmt-my-money-calendar/img/input-empty.png"
        alt=""
        className="u-hide-on-print"
      />

      <br />
      <h4>When do you get paid?</h4>
      <br />
      <img
        src="/static/apps/mmt-my-money-calendar/img/unchecked-radio.png"
        width="20"
        alt=""
        className="u-hide-on-print"
      />
      <label>Weekly</label>
      <br />
      <br />
      <img
        src="/static/apps/mmt-my-money-calendar/img/checked-radio.png"
        width="20"
        alt=""
        className="u-hide-on-print"
      />
      <label>Every two weeks</label>
      <br />
      <br />
      <img
        src="/static/apps/mmt-my-money-calendar/img/unchecked-radio.png"
        width="20"
        alt=""
        className="u-hide-on-print"
      />
      <label>Twice monthly</label>
      <br />
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
      <h4>When is your next paycheck (get calendar image)</h4>
      <img
        src="/static/apps/mmt-my-money-calendar/img/input-empty.png"
        alt=""
        className="u-hide-on-print"
      />
      <br />
      <h4>How much do you expect your check to be?</h4>
      <img
        src="/static/apps/mmt-my-money-calendar/img/input-empty.png"
        alt=""
        className="u-hide-on-print"
      />

      <h4>If you have another job with income, added it by clicking here.</h4>

      <div className="c-nav-buttons">
        <div>
          <Link to="/income-step50" className="a-btn a-btn__full-on-xs">
            Next
          </Link>
        </div>
        <div>
          <Link to="/income-step" className="a-btn a-btn__full-on-xs">
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

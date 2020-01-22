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

      <h4>Income Step: Job</h4>

      <div className="c-row-container c-increment-title-container">
        <div className="c-increment-img">
          <img
            src="/static/apps/mmt-my-money-calendar/img/icon-job.png"
            alt=""
            className="u-hide-on-print c-increment-icon"
          />
        </div>
      </div>
      <br />

      <div className="c-increment-subtitle">
        <h3>
          Let's gather some details on your <em>Job</em>
        </h3>
      </div>

      <h4>Name</h4>
      <div className="c-input-img">
        <img
          src="/static/apps/mmt-my-money-calendar/img/input-jobname.png"
          alt=""
          className="u-hide-on-print"
        />
      </div>
      <br />
      <h4>When do you get paid?</h4>

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
            <span>Every two weeks</span>
          </div>
        </div>
        <div className="c-item">
          <div className="c-checkedbox-icon">
            <img
              src="/static/apps/mmt-my-money-calendar/img/unchecked-radio.png"
              alt=""
              classNames="u-hide-on-print"
            />
          </div>
          <div>
            <span>Twice monthly</span>
          </div>
        </div>
        <div className="c-item">
          <div className="c-checkedbox-icon">
            <img
              src="/static/apps/mmt-my-money-calendar/img/unchecked-radio.png"
              alt=""
              classNames="u-hide-on-print"
            />
          </div>
          <div>
            <span>Once a month</span>
          </div>
        </div>
      </div>
      <br />
      <h4>When is your next paycheck</h4>
      <div className="c-input-img">
        <img
          src="/static/apps/mmt-my-money-calendar/img/input-next-paycheck-date.png"
          alt=""
          className="u-hide-on-print"
        />
      </div>

      <br />
      <h4>How much do you expect your check to be?</h4>
      <div className="c-input-img">
        <img
          src="/static/apps/mmt-my-money-calendar/img/input-next-paycheck-amount.png"
          alt=""
          className="u-hide-on-print"
        />
      </div>

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

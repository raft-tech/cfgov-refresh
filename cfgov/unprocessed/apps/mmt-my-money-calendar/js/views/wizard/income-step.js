import { Link } from "react-router-dom";
export default function IncomeStep() {
  // add class for step-title

  return (
    <section className="income-step">
      <img
        src="/static/apps/mmt-my-money-calendar/img/pb_2.png"
        alt=""
        className="u-hide-on-print"
      />

      <div className="c-step-title">
        <h4>Income Step</h4>
      </div>
      <div className="c-step-container">
        <div className="c-step-img">
          <img
            src="/static/apps/mmt-my-money-calendar/img/income-img.png"
            alt=""
            classNames="u-hide-on-print"
          />
        </div>
        <div className="c-step-title">
          <h3>Tell us about your Income</h3>
        </div>
      </div>

      <h4>Check off those that apply to you.</h4>
      <div className="c-item-list">
        <div className="c-item">
          <div className="c-checkedbox-icon">
            <img
              src="/static/apps/mmt-my-money-calendar/img/checked_box.png"
              alt=""
              classNames="u-hide-on-print"
            />
          </div>
          <div className="c-increment-icon">
            <img
              src="/static/apps/mmt-my-money-calendar/img/icon-job.png"
              alt=""
              className="u-hide-on-print"
            />
          </div>
          <div>
            <span>Job</span>
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
          <div className="c-increment-icon">
            {" "}
            <img
              src="/static/apps/mmt-my-money-calendar/img/icon-childsupport.png"
              alt=""
              className="u-hide-on-print c-increment-icon"
            />
          </div>
          <div>
            <span>Child support</span>
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
            <img
              src="/static/apps/mmt-my-money-calendar/img/icon-disability.png"
              alt=""
              className="u-hide-on-print c-increment-icon"
            />
          </div>
          <div>
            <span>Disability Benefits</span>
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
            <img
              src="/static/apps/mmt-my-money-calendar/img/icon-snap.png"
              alt=""
              className="u-hide-on-print c-increment-icon"
            />
          </div>
          <div>
            <span>SNAP</span>
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
            <img
              src="/static/apps/mmt-my-money-calendar/img/icon-tanf.png"
              alt=""
              className="u-hide-on-print c-increment-icon"
            />
          </div>
          <div>
            <span>TANF</span>
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
            <img
              src="/static/apps/mmt-my-money-calendar/img/icon-.png"
              alt=""
              className="u-hide-on-print c-increment-icon"
            />
          </div>
          <div>
            <span>Other</span>
          </div>
        </div>
      </div>

      <br />

      <div className="c-nav-buttons">
        <div>
          <Link to="/income-step25" className="a-btn a-btn__full-on-xs">
            Next
          </Link>
        </div>
        <div>
          <Link
            to="/starting-balance-step75"
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

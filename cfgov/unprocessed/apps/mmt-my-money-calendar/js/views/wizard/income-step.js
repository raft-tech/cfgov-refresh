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
      <h4>Income Step</h4>

      <div className="c-step-container">
        <div className="c-step-img">
          <img
            src="/static/apps/mmt-my-money-calendar/img/income-img.png"
            alt=""
            classNames="u-hide-on-print"
          />
        </div>
        <div className="c-step-title">
          <h4>Tell us about your income</h4>
        </div>
      </div>

      <div>Check off those that apply to you.</div>
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

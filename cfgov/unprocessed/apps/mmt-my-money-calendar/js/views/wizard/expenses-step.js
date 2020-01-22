import { Link } from "react-router-dom";
export default function ExpensesStep() {
  // add class for step-title

  return (
    <section className="expenses-step">
      <img
        src="/static/apps/mmt-my-money-calendar/img/pb_3.png"
        alt=""
        className="u-hide-on-print"
      />

      <div className="c-step-title">
        <h4>Expense Step</h4>
      </div>

      <div className="c-step-container">
        <div className="c-step-img">
          <img
            src="/static/apps/mmt-my-money-calendar/img/expense-img.png"
            alt=""
            classNames="u-hide-on-print"
          />
        </div>
        <div className="c-step-title">
          <h3>Tell us about your expenses</h3>
        </div>
      </div>

      <h4>Check off those that you currently have</h4>

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
              src="/static/apps/mmt-my-money-calendar/img/housingUtilities.png"
              alt=""
              className="u-hide-on-print"
            />
          </div>
          <div>
            <span>Housing</span>
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
              src="/static/apps/mmt-my-money-calendar/img/groceriesOther.png"
              alt=""
              className="u-hide-on-print c-increment-icon"
            />
          </div>
          <div>
            <span>Groceries</span>
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
              src="/static/apps/mmt-my-money-calendar/img/eatingOut.png"
              alt=""
              className="u-hide-on-print c-increment-icon"
            />
          </div>
          <div>
            <span>Entertainment</span>
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
              src="/static/apps/mmt-my-money-calendar/img/phone.png"
              alt=""
              className="u-hide-on-print c-increment-icon"
            />
          </div>
          <div>
            <span>Phone</span>
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
              src="/static/apps/mmt-my-money-calendar/img/educationChildcare.png"
              alt=""
              className="u-hide-on-print c-increment-icon"
            />
          </div>
          <div>
            <span>Childcare</span>
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
              src="/static/apps/mmt-my-money-calendar/img/otherGovtPrograms.png"
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
      <br />

      <div className="c-nav-buttons">
        <div>
          <Link to="/expenses-step25" className="a-btn a-btn__full-on-xs">
            Next
          </Link>
        </div>
        <div>
          <Link to="/income-step75" className="a-btn a-btn__full-on-xs">
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

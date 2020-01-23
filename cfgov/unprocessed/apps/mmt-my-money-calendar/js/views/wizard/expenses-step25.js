import { Link } from "react-router-dom";
export default function ExpensesStep25() {
  // add class for step-title; center justify for the rest

  return (
    <section className="starting-balance-step-25">
      <img
        src="/static/apps/mmt-my-money-calendar/img/pb_3.25.png"
        alt=""
        className="u-hide-on-print"
      />
      <div className="c-step-title">
        <h4>Expense: Housing</h4>
      </div>

      <div className="c-row-container c-increment-title-container">
        <div className="c-increment-img">
          <img
            src="/static/apps/mmt-my-money-calendar/img/icon-housing.png"
            alt=""
            className="u-hide-on-print c-increment-icon"
          />
        </div>
      </div>
      <br />

      <div>
        <h3 className="c-increment-subtitle">
          Tell us about your <em>Housing Costs</em>
        </h3>
      </div>
      <h4>What is your housing payment due?</h4>
      <div className="c-input-img">
        <img
          src="/static/apps/mmt-my-money-calendar/img/input-rent-date.png"
          alt=""
          className="u-hide-on-print"
        />
      </div>
      <div>
        <h4>How much do you pay each month for housing (rent or mortgage)?</h4>
      </div>
      <div className="c-input-img">
        <img
          src="/static/apps/mmt-my-money-calendar/img/input-rent-amount.png"
          alt=""
          className="u-hide-on-print"
        />
      </div>
      <br />

      <div className="c-nav-buttons">
        <div>
          <Link to="/expenses-step50" className="a-btn a-btn__full-on-xs">
            Next
          </Link>
        </div>
        <div>
          <Link to="/expenses-step" className="a-btn a-btn__full-on-xs">
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

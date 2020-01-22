import { Link } from "react-router-dom";
export default function IncomeStepSummary() {
  // add class for step-title

  return (
    <section className="income-step-summary">
      <img
        src="/static/apps/mmt-my-money-calendar/img/pb_3.png"
        alt=""
        className="u-hide-on-print"
      />

      <div className="c-step-title">
        <h4>Income Summary Step</h4>
      </div>

      <div className="c-step-container">
        <div className="c-step-title">
          <h3>
            Yeah! You added some details on your <em>Income.</em>
          </h3>
        </div>
      </div>
      <div className="c-increment-subtitle">
        <h4>You have added</h4>
        <ul>
          <li>
            <div>Job</div>
            <div>every two weeks, beginning 1/17</div>
            <div>$487</div>
          </li>
          <li>
            <div>Child Support</div>
            <div>every month, beginning 2/01</div>
            <div>$350</div>
          </li>
          <li>
            <div>SNAP</div>
            <div>every month, beginning 2/01</div>
            <div>$196</div>
          </li>
        </ul>
      </div>

      <img
        src="/static/apps/mmt-my-money-calendar/img/jan-month-incomes.png"
        alt=""
        classNames="u-hide-on-print"
      />
      <br />
      <br />

      <div className="c-nav-buttons">
        <div>
          <Link to="/expenses-step" className="a-btn a-btn__full-on-xs">
            Now, let's take a look at your expenses.
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

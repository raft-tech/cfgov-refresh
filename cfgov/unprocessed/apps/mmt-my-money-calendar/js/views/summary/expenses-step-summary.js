import { Link } from "react-router-dom";
export default function ExpensesStepSummary() {
  // add class for step-title

  return (
    <section className="expenses-summary-step">
      <img
        src="/static/apps/mmt-my-money-calendar/img/pb_3.png"
        alt=""
        className="u-hide-on-print"
      />

      <div className="c-step-title">
        <h4>Expenses Summary Step</h4>
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
            <div>Housing</div>
            <div>once a month, beginning 02/01</div>
            <div>$487</div>
          </li>
          <li>
            <div>Groceries</div>
            <div>every week</div>
            <div>$200</div>
          </li>
          <li>
            <div>Phone</div>
            <div>every month, beginning 01/26</div>
            <div>$272</div>
          </li>
        </ul>
      </div>

      <img
        src="/static/apps/mmt-my-money-calendar/img/jan-month-expenses.png"
        alt=""
        classNames="u-hide-on-print"
      />

      <br />
      <br />
      <div>
        Let's go to the final calendar. You can add, delete, and edit your work
        there. You can also look at each week, each month of the quarter, the
        whole quarter and see totals to help you make decisions on where to
        spend your money.
      </div>
      <div className="c-nav-buttons">
        <div>
          <Link to="/summary" className="a-btn a-btn__full-on-xs">
            Let's go!
          </Link>
        </div>
        <div>
          <Link to="/expense-step75" className="a-btn a-btn__full-on-xs">
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

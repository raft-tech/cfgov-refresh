import { Link } from "react-router-dom";
export default function StartingBalanceStepSummary() {
  // add class for step-title

  return (
    <section className="expenses-step">
      <img
        src="/static/apps/mmt-my-money-calendar/img/pb_3.png"
        alt=""
        className="u-hide-on-print"
      />

      <div className="c-step-title">
        <h4>Starting Balance Summary Step</h4>
      </div>

      <div className="c-step-container">
        <div className="c-step-title">
          <h3>
            Yeah! You added some details on your <em>Starting Balance</em>
          </h3>
        </div>
      </div>
      <div className="c-increment-subtitle">
        <h4>You have added</h4>
        <ul className="c-item-list">
          <li>
            <div>Checking Account</div>
            <div>$400</div>
          </li>
          <li>
            <div>Savings Account</div>
            <div>$325</div>
          </li>
          <li>
            <div>Cash</div>
            <div>$100</div>
          </li>
        </ul>
        <h4>for a total of $825</h4>
      </div>
      <div className="c-calendar-img">
        <img
          src="/static/apps/mmt-my-money-calendar/img/jan-month-beg-balance.png"
          alt=""
          classNames="u-hide-on-print"
        />
      </div>

      <br />
      <br />

      <div className="c-nav-buttons">
        <div>
          <Link to="/income-step" className="a-btn a-btn__full-on-xs">
            Great! Now, Add your Incomes
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

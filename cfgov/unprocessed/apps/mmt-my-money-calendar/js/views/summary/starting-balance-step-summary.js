import { Link } from "react-router-dom";
export default function StartingBalanceStepSummary() {
  return (
    <section className="expenses-step">
      <img
        src="/static/apps/mmt-my-money-calendar/img/pb_2.png"
        alt=""
        className="u-hide-on-print"
      />

      <div className="c-step-title">
        <h4>Starting Balance Summary</h4>
      </div>

      <div className="c-step-container">
        <div>
          Yeah! You added some details on your <em>starting balance.</em>
        </div>
      </div>
      <div className="c-increment-subtitle">
        You have added the following:
        <ul className="c-item-list-two">
          <li>
            <div>Checking</div>
            <div>$400</div>
          </li>
          <li>
            <div>Savings</div>
            <div>$325</div>
          </li>
          <li>
            <div>Cash</div>
            <div>$100</div>
          </li>
        </ul>
        <div className="c-step-title">Total: $825</div>
      </div>
      <div className="c-calendar-img">
        <img
          src="/static/apps/mmt-my-money-calendar/img/jan-month-beg-balance.png"
          alt=""
          classNames="u-hide-on-print"
        />
      </div>

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

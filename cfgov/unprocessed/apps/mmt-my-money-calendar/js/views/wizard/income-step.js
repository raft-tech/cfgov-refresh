import { Link } from "react-router-dom";
export default function IncomeStep() {
  // add class for step-title

  return (
    <section className="income-step">
      <img
        src="/static/apps/mmt-my-money-calendar/img/pb_2.png"
        alt=""
        class="u-hide-on-print"
      />

      <h3 className="step-title">Income Step</h3>

      <img
        src="/static/apps/mmt-my-money-calendar/img/income-img.png"
        alt=""
        class="u-hide-on-print"
      />
      <br />
      <br />
      <h4>Tell us about your Income</h4>
      <p>Check off those that you currently have</p>
      <img
        src="/static/apps/mmt-my-money-calendar/img/checked_box.png"
        alt=""
        width="20px"
        class="u-hide-on-print"
      />

      <label class="a-label">
        <span>Job</span>
      </label>
      <br />
      <img
        src="/static/apps/mmt-my-money-calendar/img/checked_box.png"
        alt=""
        width="20px"
        class="u-hide-on-print"
      />
      <label class="a-label">
        <span>Transportation</span>
      </label>
      <br />
      <img
        src="/static/apps/mmt-my-money-calendar/img/unchecked_box.png"
        alt=""
        width="20px"
        class="u-hide-on-print"
      />
      <label class="a-label">
        <span>Food</span>
      </label>
      <br />
      <img
        src="/static/apps/mmt-my-money-calendar/img/unchecked_box.png"
        alt=""
        width="20px"
        class="u-hide-on-print"
      />
      <label class="a-label">
        <span>Utilities</span>
      </label>
      <br />
      <img
        src="/static/apps/mmt-my-money-calendar/img/unchecked_box.png"
        alt=""
        width="20px"
        class="u-hide-on-print"
      />
      <label class="a-label" for="other">
        <span>Other</span>
      </label>
      <br />
      <br />
      <br />

      <Link to="/wizard/expenses-step" className="a-btn a-btn__full-on-xs">
        Let's add the details for your expenses
      </Link>
      <br />
      <br />
    </section>
  );
}

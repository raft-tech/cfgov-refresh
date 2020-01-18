import { Link } from "react-router-dom";
export default function ExpensesStep() {
  // add class for step-title

  return (
    <section className="expenses-step">
      <img
        src="/static/apps/mmt-my-money-calendar/img/pb_3.png"
        alt=""
        class="u-hide-on-print"
      />

      <h3 className="step-title">Expenses Step</h3>

      <img
        src="/static/apps/mmt-my-money-calendar/img/expense-img.png"
        alt=""
        class="u-hide-on-print"
      />
      <br />
      <br />
      <h4>Tell us about your Expenses</h4>
      <p>Check off those that you currently have</p>
      <img
        src="/static/apps/mmt-my-money-calendar/img/checked_box.png"
        alt=""
        width="20px"
        class="u-hide-on-print"
      />

      <label class="a-label">
        <span>Housing</span>
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

      <Link to="/summary" className="a-btn a-btn__full-on-xs">
        Great! Let's look at your Summary
      </Link>
      <br />
      <br />
    </section>
  );
}

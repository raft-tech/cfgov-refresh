import { Link } from "react-router-dom";
export default function ExpensesStep25() {
  // add class for step-title; center justify for the rest

  return (
    <section className="starting-balance-step-25">
      <Link to="/">Back Home</Link>
      <img
        src="/static/apps/mmt-my-money-calendar/img/pb_3.25.png"
        alt=""
        className="u-hide-on-print"
      />
      <h3 className="step-title">Expenses Step</h3>
      <br />
      <br />
      <div>
        {" "}
        <img
          src="/static/apps/mmt-my-money-calendar/img/housingUtilities.png"
          alt=""
          width="75px"
          className="u-hide-on-print"
        />
        <h2 className="step-title">
          Tell us about your <em>Housing Costs</em>
        </h2>
      </div>
      <br />
      <h4>How much do you pay each month for housing (rent or mortgage)?</h4>
      <img
        src="/static/apps/mmt-my-money-calendar/img/input-checking.png"
        alt=""
        className="u-hide-on-print"
      />
      <h4>What is the due date?</h4>
      <img
        src="/static/apps/mmt-my-money-calendar/img/input-checking.png"
        alt=""
        className="u-hide-on-print"
      />
      <br />
      <br />
      <br />

      <Link to="/expenses-step50" className="a-btn a-btn__full-on-xs">
        Next
      </Link>
      <br />
      <br />
    </section>
  );
}

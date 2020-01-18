import { Link } from "react-router-dom";
export default function IncomeStep25() {
  // add class for step-title; center justify for the rest

  return (
    <section className="starting-balance-step-25">
      <Link to="/">Back Home</Link>
      <img
        src="/static/apps/mmt-my-money-calendar/img/pb_2.25.png"
        alt=""
        className="u-hide-on-print"
      />
      <h2 className="step-title">Income Step</h2>
      <br />
      <br />
      <div>
        {" "}
        <img
          src="/static/apps/mmt-my-money-calendar/img/Job.png"
          alt=""
          width="30"
          className="u-hide-on-print"
        />
        <h3 className="step-title">Job</h3>
      </div>

      <br />
      <br />
      <h3>
        Give us some details on your <em>job</em>
      </h3>
      <h4>Job Name</h4>
      <img
        src="/static/apps/mmt-my-money-calendar/img/input-empty.png"
        alt=""
        className="u-hide-on-print"
      />

      <br />
      <h4>When do you get paid?</h4>
      <br />
      <img
        src="/static/apps/mmt-my-money-calendar/img/unchecked-radio.png"
        width="20"
        alt=""
        className="u-hide-on-print"
      />
      <label>Weekly</label>
      <br />
      <br />
      <img
        src="/static/apps/mmt-my-money-calendar/img/checked-radio.png"
        width="20"
        alt=""
        className="u-hide-on-print"
      />
      <label>Every two weeks</label>
      <br />
      <br />
      <img
        src="/static/apps/mmt-my-money-calendar/img/unchecked-radio.png"
        width="20"
        alt=""
        className="u-hide-on-print"
      />
      <label>Twice monthly</label>
      <br />
      <br />
      <img
        src="/static/apps/mmt-my-money-calendar/img/unchecked-radio.png"
        width="20"
        alt=""
        className="u-hide-on-print"
      />
      <label>Once a month</label>
      <br />
      <br />
      <h4>When is your next paycheck (get calendar image)</h4>
      <img
        src="/static/apps/mmt-my-money-calendar/img/input-empty.png"
        alt=""
        className="u-hide-on-print"
      />
      <br />
      <h4>How much do you expect your check to be?</h4>
      <img
        src="/static/apps/mmt-my-money-calendar/img/input-empty.png"
        alt=""
        className="u-hide-on-print"
      />

      <h4>If you have another job with income, added it by clicking here.</h4>

      <Link to="/starting-balance-step50" className="a-btn a-btn__full-on-xs">
        Next
      </Link>
      <br />
      <br />
    </section>
  );
}

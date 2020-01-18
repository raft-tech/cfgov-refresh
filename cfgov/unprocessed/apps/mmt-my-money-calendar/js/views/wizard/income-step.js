import { Link } from "react-router-dom";
export default function IncomeStep() {
  // add class for step-title

  return (
    <section className="income-step">
      <Link to="/">Back Home</Link>
      <img
        src="/static/apps/mmt-my-money-calendar/img/pb_2.png"
        alt=""
        className="u-hide-on-print"
      />

      <h3 className="step-title">Income Step</h3>

      <img
        src="/static/apps/mmt-my-money-calendar/img/income-img.png"
        alt=""
        classNames="u-hide-on-print"
      />
      <br />
      <br />
      <h2>Tell us about your Income</h2>
      <h4>Check off those that you currently have</h4>
      <img
        src="/static/apps/mmt-my-money-calendar/img/checked_box.png"
        alt=""
        width="20px"
        classNames="u-hide-on-print"
      />

      <img
        src="/static/apps/mmt-my-money-calendar/img/job.png"
        alt=""
        width="25px"
        className="u-hide-on-print"
      />

      <label class="a-label">
        <span>Job</span>
      </label>
      <br />
      <br />
      <img
        src="/static/apps/mmt-my-money-calendar/img/checked_box.png"
        alt=""
        width="20px"
        className="u-hide-on-print"
      />
      <img
        src="/static/apps/mmt-my-money-calendar/img/childSupport.png"
        alt=""
        width="25px"
        className="u-hide-on-print"
      />
      <label class="a-label">
        <span>Child support</span>
      </label>
      <br />
      <br />
      <img
        src="/static/apps/mmt-my-money-calendar/img/unchecked_box.png"
        alt=""
        width="25px"
        className="u-hide-on-print"
      />
      <img
        src="/static/apps/mmt-my-money-calendar/img/disabilityBenefits.png"
        alt=""
        width="25px"
        className="u-hide-on-print"
      />
      <label class="a-label">
        <span>Disability benefits</span>
      </label>
      <br />
      <br />
      <img
        src="/static/apps/mmt-my-money-calendar/img/checked_box.png"
        alt=""
        width="25px"
        className="u-hide-on-print"
      />
      <img
        src="/static/apps/mmt-my-money-calendar/img/SNAP.png"
        alt=""
        width="25px"
        className="u-hide-on-print"
      />
      <label class="a-label">
        <span>SNAP</span>
      </label>
      <br />
      <br />
      <img
        src="/static/apps/mmt-my-money-calendar/img/unchecked_box.png"
        alt=""
        width="25px"
        classNames="u-hide-on-print"
      />
      <img
        src="/static/apps/mmt-my-money-calendar/img/TANF.png"
        alt=""
        width="25px"
        className="u-hide-on-print"
      />
      <label class="a-label">
        <span>TANF</span>
      </label>
      <br />
      <br />
      <img
        src="/static/apps/mmt-my-money-calendar/img/unchecked_box.png"
        alt=""
        width="25px"
        className="u-hide-on-print"
      />
      <img
        src="/static/apps/mmt-my-money-calendar/img/otherGovtPrograms.png"
        alt=""
        width="25px"
        className="u-hide-on-print"
      />
      <label class="a-label">
        <span>Other Government Programs</span>
      </label>
      <br />
      <br />
      <br />

      <Link to="/income-step25" className="a-btn a-btn__full-on-xs">
        Let's add the details for your income
      </Link>
      <br />
      <br />
    </section>
  );
}

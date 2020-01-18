import { Link } from "react-router-dom";

export default function Summary() {
  return (
    <section id="summary-view">
      <Link to="/">Back Home</Link>
      <img
        src="/static/apps/mmt-my-money-calendar/img/done.png"
        alt=""
        className="u-hide-on-print"
      />
      <h3 className="step-title">Here is your summary</h3>
      <img
        src="/static/apps/mmt-my-money-calendar/img/monthlyCalGrRed.png"
        alt=""
        className="u-hide-on-print"
      />
      <br />
      <br />
    </section>
  );
}

import { Link } from "react-router-dom";
// this is a testlkdjf;slkdgf

export default function Summary() {
  return (
    <section id="summary-view">
      <Link to="/">Back Home</Link>
      <img
        src="/static/apps/mmt-my-money-calendar/img/pb_done.png"
        alt=""
        className="u-hide-on-print"
      />
      <div className="c-step-title">
        <h4>Summary</h4>
      </div>
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

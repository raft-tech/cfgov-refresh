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
      <p>
        Take a look at your calendar. If your day is green, you have cash
        available. If your day is red, you do not have cash available.
      </p>
      <div className="c-increment-subtitle">
        <h4>Here is a summary of your inputs</h4>
        <ul>
          <li>
            <div>Starting Balance on January 15, 2020</div>
            <div>$825</div>
          </li>
          <li>
            <div>Total incomes for January</div>
            <div>$974</div>
          </li>
          <li>
            <div>Total expenses for January</div>
            <div>every month, beginning 2/01</div>
            <div>$672</div>
          </li>
        </ul>
      </div>
      <div className="c-calendar-img">
        <img
          src="/static/apps/mmt-my-money-calendar/img/calendar-month.png"
          alt=""
          className="u-hide-on-print"
        />
      </div>

      <br />
      <br />
    </section>
  );
}

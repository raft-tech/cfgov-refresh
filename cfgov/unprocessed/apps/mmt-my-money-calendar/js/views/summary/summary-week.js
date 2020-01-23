import { Link } from "react-router-dom";
// this is a testlkdjf;slkdgf

export default function SummaryWeek() {
  return (
    <section id="summary-week">
      <img
        src="/static/apps/mmt-my-money-calendar/img/pb_done.png"
        alt=""
        className="u-hide-on-print"
      />
      <div className="c-step-title">
        <h4>Summary: Week View</h4>
      </div>
      <p>
        Take a look at your calendar.
        <ul>
          <li>green = you have cash!</li>
          <li>red = no cash!</li>
          <li>elipses = you have transactions.</li>
        </ul>
      </p>
      <div className="c-nav-buttons">
        <Link to="/summary-month">Click to view month.</Link>
      </div>
      <div className="c-step-title">January, 2020 Weeks</div>
      <div className="c-calendar-img">
        <img
          src="/static/apps/mmt-my-money-calendar/img/jan-week1.png"
          alt=""
          className="u-hide-on-print"
        />
        <div>Friday, 01/03/2020 balance</div>
        <div>N/A</div>
      </div>
      <div className="c-calendar-img">
        <img
          src="/static/apps/mmt-my-money-calendar/img/jan-week2.png"
          alt=""
          className="u-hide-on-print"
        />
        <div>Friday, 01/10/2020 balance</div>
        <div>N/A</div>
      </div>
      <div className="c-calendar-img">
        <img
          src="/static/apps/mmt-my-money-calendar/img/jan-week3.png"
          alt=""
          className="u-hide-on-print"
        />
        <div>Friday, 01/17/2020 balance</div>
        <div>$1,112</div>
      </div>
      <div className="c-calendar-img">
        <img
          src="/static/apps/mmt-my-money-calendar/img/jan-week4.png"
          alt=""
          className="u-hide-on-print"
        />
        <div>Friday, 01/24/2020 balance</div>
        <div>$912</div>
      </div>
      <div className="c-calendar-img">
        <img
          src="/static/apps/mmt-my-money-calendar/img/jan-week5.png"
          alt=""
          className="u-hide-on-print"
        />
        <div>Friday, 01/31/2020 balance</div>
        <div>$927</div>
      </div>

      <br />
      <br />
      <Link to="/">Back Home</Link>
    </section>
  );
}

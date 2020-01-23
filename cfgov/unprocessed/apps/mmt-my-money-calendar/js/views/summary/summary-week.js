import { Link } from "react-router-dom";
import StrategiesBannerNegativeMar from "../strategies/strategies-banner-negative-mar";

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

      <div className="c-nav-buttons">
        <Link to="/summary-month-jan">Click to view month.</Link>
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
        <div>$1,062</div>
      </div>
      <div className="c-calendar-img">
        <img
          src="/static/apps/mmt-my-money-calendar/img/jan-week4.png"
          alt=""
          className="u-hide-on-print"
        />
        <div>Friday, 01/24/2020 balance</div>
        <div>$812</div>
      </div>
      <div className="c-calendar-img">
        <img
          src="/static/apps/mmt-my-money-calendar/img/jan-week5.png"
          alt=""
          className="u-hide-on-print"
        />
        <div>Friday, 01/31/2020 balance</div>
        <div>$797</div>
      </div>
      <div className="c-calendar-img">
        <img
          src="/static/apps/mmt-my-money-calendar/img/feb-week1.png"
          alt=""
          className="u-hide-on-print"
        />
        <div>Friday, 02/07/2020 balance</div>
        <div>$225</div>
      </div>
      <div className="c-calendar-img">
        <img
          src="/static/apps/mmt-my-money-calendar/img/feb-week2.png"
          alt=""
          className="u-hide-on-print"
        />
        <div>Friday, 02/14/2020 balance</div>
        <div>$462</div>
      </div>
      <div className="c-calendar-img">
        <img
          src="/static/apps/mmt-my-money-calendar/img/feb-week3.png"
          alt=""
          className="u-hide-on-print"
        />
        <div>Friday, 02/21/2020 balance</div>
        <div>$212</div>
      </div>
      <div className="c-calendar-img">
        <img
          src="/static/apps/mmt-my-money-calendar/img/feb-week4.png"
          alt=""
          className="u-hide-on-print"
        />
        <div>Friday, 02/28/2020 balance</div>
        <div>$177</div>
      </div>
      <div className="c-calendar-img">
        <img
          src="/static/apps/mmt-my-money-calendar/img/feb-week5.png"
          alt=""
          className="u-hide-on-print"
        />
        <div>Friday, 03/06/2020 balance</div>
        <div>-$627</div>
      </div>
      <div className="c-calendar-img">
        <img
          src="/static/apps/mmt-my-money-calendar/img/mar-week1.png"
          alt=""
          className="u-hide-on-print"
        />
        <div>Friday, 03/13/2020 balance</div>
        <div>-$390</div>
      </div>
      <div className="c-calendar-img">
        <img
          src="/static/apps/mmt-my-money-calendar/img/mar-week2.png"
          alt=""
          className="u-hide-on-print"
        />
        <div>Friday, 03/20/2020 balance</div>
        <div>-$640</div>
      </div>
      <div className="c-calendar-img">
        <img
          src="/static/apps/mmt-my-money-calendar/img/mar-week3.png"
          alt=""
          className="u-hide-on-print"
        />
        <div>Friday, 03/27/2020 balance</div>
        <div>-$625</div>
      </div>
      <div className="c-calendar-img">
        <img
          src="/static/apps/mmt-my-money-calendar/img/mar-week4.png"
          alt=""
          className="u-hide-on-print"
        />
        <div>Friday, 04/03/2020 balance</div>
        <div>-$925</div>
      </div>
      <div className="c-calendar-img">
        <img
          src="/static/apps/mmt-my-money-calendar/img/mar-week5.png"
          alt=""
          className="u-hide-on-print"
        />
      </div>
      <p>
        Take a look at your calendar.
        <ul>
          <li>green = you have cash!</li>
          <li>red = no cash!</li>
          <li>elipses = you have transactions.</li>
        </ul>
      </p>

      <br />
      <br />
      <Link to="/">Back Home</Link>
    </section>
  );
}

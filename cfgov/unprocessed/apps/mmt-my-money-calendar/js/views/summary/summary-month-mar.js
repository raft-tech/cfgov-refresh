import { Link } from "react-router-dom";
import StrategiesBannerNegativeMar from "../strategies/strategies-banner-negative-mar";

export default function SummaryMonthMar() {
  return (
    <section id="summary-month-mar">
      <img
        src="/static/apps/mmt-my-money-calendar/img/pb_done.png"
        alt=""
        className="u-hide-on-print"
      />
      <div className="c-step-title">
        <h4>Summary: Month View</h4>
        <div>March, 2020</div>
      </div>

      <div className="c-click-to-view-link">
        <Link to="/summary-week">Click to view weeks</Link>
      </div>
      <div className="c-input-summary">
        <h4>Your March, 2020 inputs</h4>
        <ul>
          <li>income: $974</li>
          <li>expenses: $672</li>
        </ul>
      </div>
      <StrategiesBannerNegativeMar />
      <div className="c-month-nav-links">
        <div>
          <Link to="/summary-month-jan">January</Link>
        </div>
        <div>
          <Link to="/summary-month-feb">February</Link>
        </div>
      </div>
      <div className="c-calendar-img">
        <img
          src="/static/apps/mmt-my-money-calendar/img/calendar-month-mar.png"
          alt=""
          className="u-hide-on-print"
        />
      </div>
      <ul>
        <li>green = you have cash!</li>
        <li>red = no cash!</li>
        <li>elipses = you have transactions.</li>
      </ul>
      <br />
      <div className="c-nav-buttons">
        <Link to="/">Home</Link>
      </div>
      <br />
      <br />
    </section>
  );
}

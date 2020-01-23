import { Link } from "react-router-dom";
export default function StrategiesBannerNegativeFeb() {
  // add class for step-title

  return (
    <section className="c-strategies-banner">
      <div className="c-strategies-banner-container">
        <img
          src="/static/apps/mmt-my-money-calendar/img/star.png"
          alt=""
          className="u-hide-on-print c-star-icon"
        />
        <div>
          Expenses on the 26th resulted in no available cash. Try moving
          expenses around to plan payments for when you have more income. For
          more ideas,
          <div>
            <Link to="/strategies-list">Review some cash flow strategies</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";
export default function StrategiesBannerPositive() {
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
          You are totally in the green! Psych!
          <div>
            <Link to="/strategies-list">Review some cash flow strategies</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

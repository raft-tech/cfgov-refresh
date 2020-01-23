import { Link } from "react-router-dom";
export default function StrategiesBannerNegativeMar() {
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
          Multiple expenses beginning the previous month resulted in no
          available cash for the whole month. Look at the previous month and see
          what you can do to reduce expenses, boost income or move expenses
          around. For more ideas,
          <div>
            <Link to="/strategies-list">Review some cash flow strategies</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";
import Hero from "../../components/shared/hero";

export default function HomeReturningUser() {
  return (
    <main className="mmc-view home-returning-user">
      <div className="m-hero_wrapper wrapper">
        <div className="m-hero_text">
          <h2 className="m-hero_heading">Welcome back to My Money Calendar</h2>
          <div className="m-hero_subhead">
            We see that you have already started using My Money Calendar and
            have entered some data. You can visualize your calendar with that
            data right here. If you would like to start over, click here. This
            will clear your data and you will be guided to start the process of
            entering data again.
          </div>
          <div className="c-nav-buttons">
            <Link
              to="/starting-balance-step"
              className="a-btn a-btn__full-on-xs"
            >
              Delete my data and start fresh.
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

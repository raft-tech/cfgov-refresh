import { Link } from "react-router-dom";
import Hero from "../../components/shared/hero";

export default function Home() {
  // This is the Home Page of the app
  return (
    <main className="m-hero">
      <div className="m-hero_wrapper wrapper">
        <div className="m-hero_text">
          <h2 className="m-hero_heading">My Money Calendar</h2>
          <div className="m-hero_subhead">
            With My Money Calendar, you can visualize your spending and learn
            strategies to manage your weekly and monthly budget.
          </div>
        </div>
        <div className="c-nav-buttons">
          <div>
            <Link to="/home-new-user" className="a-btn a-btn__full-on-xs">
              If you are a New User, click here to begin.
            </Link>
          </div>
          <div>
            <Link to="/home-returning-user" className="a-btn a-btn__full-on-xs">
              If you are a Returning User, click here to begin.
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

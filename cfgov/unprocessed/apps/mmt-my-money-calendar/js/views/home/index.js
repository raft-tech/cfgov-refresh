import { Link } from "react-router-dom";

export default function Home() {
  // This is the Home Page of the app
  return (
    <main className="m-hero">
      <div className="m-hero_wrapper wrapper">
        <div className="m-hero_text">
          <h3>Hello!</h3>
          <h2 className="m-hero_heading">My Money Calendar</h2>
          <div className="m-hero_subhead">
            With My Money Calendar, you can visualize your spending and learn
            strategies to manage your weekly and monthly budget.
          </div>
        </div>
        <br />
        <br />
        <br />
        <div className="c-nav-buttons">
          <div>
            <Link to="/home-new-user" className="a-btn a-btn__full-on-xs">
              New User
            </Link>
          </div>
          <div>
            <Link to="/home-returning-user" className="a-btn a-btn__full-on-xs">
              Returning User
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

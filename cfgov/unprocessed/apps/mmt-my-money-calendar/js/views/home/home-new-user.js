import { Link } from "react-router-dom";
import HeroNew from "../../components/shared/hero-new";

export default function HomeNewUser() {
  // This is the Home Page of the app
  return (
    <main className="mmt-view home">
      <HeroNew />
      <div className="c-subhead">
        Input your income, expenses and cash-on-hand to build your calendar.
        Estimates are acceptable
      </div>
      <Link to="/starting-balance-step" className="a-btn a-btn__full-on-xs">
        Let's Begin
      </Link>
    </main>
  );
}

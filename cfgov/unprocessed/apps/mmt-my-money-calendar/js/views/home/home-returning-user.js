import { Link } from "react-router-dom";
import HeroReturning from "../../components/shared/hero-returning";

export default function HomeReturningUser() {
  return (
    <main className="mmt-view home">
      <HeroReturning />
      <div className="c-nav-buttons">
        <div>
          <Link to="/starting-balance-step" className="a-btn a-btn__full-on-xs">
            Delete my data and start fresh
          </Link>
        </div>
        <div>
          <Link to="/summary-month-jan" className="a-btn a-btn__full-on-xs">
            View my data
          </Link>
        </div>
      </div>
    </main>
  );
}

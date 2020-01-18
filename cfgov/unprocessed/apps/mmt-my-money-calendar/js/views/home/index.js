import { Link } from "react-router-dom";
import Hero from "../../components/shared/hero";

export default function Home() {
  // This is the Home Page of the app
  return (
    <main className="mmt-view home">
      <Hero />
      <br />
      <br />
      <h3>
        Input your income, expenses and cash-on-hand to build your calendar.
        Estimates are acceptable
      </h3>
      <br />
      <Link to="/starting-balance-step" className="a-btn a-btn__full-on-xs">
        Let's Begin
      </Link>
    </main>
  );
}

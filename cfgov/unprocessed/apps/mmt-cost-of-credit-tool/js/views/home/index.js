import { Link } from "react-router-dom";
import Hero from "../../shared/hero";

export default function Home() {
  return (
    <main className="mmt-view home">
      <Hero />
      <div className="c-subhead">Calculate the true cost</div>
      <Link to="/tool" className="a-btn a-btn__full-on-xs">
        Let's begin
      </Link>
    </main>
  );
}

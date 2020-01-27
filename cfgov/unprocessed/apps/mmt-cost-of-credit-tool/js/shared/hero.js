import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="m-hero">
      <div className="m-hero_wrapper wrapper">
        <div className="m-hero_text">
          <h2 className="m-hero_heading">True Cost Tool</h2>
          <h2 className="m-hero_heading">Should I use credit to buy this?</h2>
          <div className="m-hero_subhead">
            Are you considering making a purchase using credit to borrow money?
            This tool will help you understand the true cost of this purchase.
            True cost is the cost of the purchase plus the additional cost
            because you're purchasing with credit.
          </div>
        </div>
      </div>
    </section>
  );
}

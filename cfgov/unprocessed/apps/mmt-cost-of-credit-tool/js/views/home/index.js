import { useCallback } from "react";
import { useHistory, Link } from "react-router-dom";
import Hero from "../../components/hero";
import Button from "../../components/button";

import { useScrollToTop } from "../../components/scroll-to-top";

import heroImg from "img/Hero_2.png";
import arrowRight from "@cfpb/cfpb-icons/src/icons/arrow-right.svg";

export default function Home() {
  useScrollToTop();

  const history = useHistory();

  const nextPage = useCallback(
    evt => {
      evt.preventDefault();
      history.push("/total-purchase-amount");
    },
    [history]
  );

  // This is the Home Page of the app
  return (
    <main className="coc-view home">
      <Hero
        tag="True Cost Tool"
        title="Should I use credit to buy this?"
        subtitle="Are you considering making a purchase using credit to borrow money?  This tool will help
        you understand the true cost of this purchase.  True cost is the cost of the purchase plus the additional cost
        because you're purchasing with credit."
        image={heroImg}
        alt="True Cost of Credit Tool"
      />

      <br />
      <Button icon={arrowRight} iconSide="right" onClick={nextPage}>
        What is the price of your item?
      </Button>

      <br />
      <br />

      <br />
      <br />
    </main>
  );
}

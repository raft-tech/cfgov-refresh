import { Link } from "react-router-dom";
import Hero from "../../components/hero";
import Button from "../../components/button";
import { useScrollToTop } from "../../components/scroll-to-top";

import heroImg from "img/Hero_2.png";
import arrowRight from "@cfpb/cfpb-icons/src/icons/arrow-right.svg";
import { PropTypes } from "mobx-react";

export default function Home() {
  useScrollToTop();



  // This is the Home Page of the app
  return (
    <main className="coc-view home">
      <Hero
        tag="True Cost Tool"
        title="Should I use credit to buy this?"
        subtitle={props.children}
        image={heroImg}
        alt="True Cost of Credit Tool"
      />
      <br />

      <br />
      <Link
        to="/tool"
        className="a-btn a-btn__full-on-xs"
      >
        Calculate the true cost
      </Link>

      <br />
      <br />
    </main>
  );
}

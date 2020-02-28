import { useCallback } from "react";
import { useHistory, Link } from "react-router-dom";
import Button from "../../components/button";
import { DealOrPromo } from "../../components/deal-or-promo";

import { useScrollToTop } from "../../components/scroll-to-top";

import arrowRight from "@cfpb/cfpb-icons/src/icons/arrow-right.svg";
import arrowLeft from "@cfpb/cfpb-icons/src/icons/arrow-left.svg";

export default function DealsAndPromotions() {
  useScrollToTop();

  const history = useHistory();

  const prevPage = useCallback(
    evt => {
      evt.preventDefault();
      history.push("/monthly-payment");
    },
    [history]
  );

  const nextPage = useCallback(
    evt => {
      evt.preventDefault();
      history.push("/tool");
    },
    [history]
  );

  return (
    <div>
      <h2>Deals and promotions</h2>
      <DealOrPromo
        num="1"
        title="Rebate or coupon"
        desc="Is the store offering an amount of money off the purchase price?"
      />
      <DealOrPromo
        num="2"
        title="Zero or reduced interest promotion"
        desc="Is there an interest rate promotional period?"
      />
      <DealOrPromo
        num="3"
        title="Deferred interest promotion"
        desc="Are you being offered 0% interest if paid in full within a certain
        number of months?"
      />

      <Button type="submit" className="button-center margin-top-bottom">
        Add promotion
      </Button>
      <div className="display-row margin-top-bottom">
        <div>
          <Button icon={arrowLeft} iconSide="left" onClick={prevPage}>
            Payment
          </Button>
        </div>
        <div className="margin-left">
          <Button icon={arrowRight} iconSide="right" onClick={nextPage}>
            Other options
          </Button>
        </div>
      </div>

      <br />
      <br />
    </div>
  );
}

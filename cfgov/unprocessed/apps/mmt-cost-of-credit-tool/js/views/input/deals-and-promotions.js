import { DealOrPromo } from "../../components/deal-or-promo";

export default function DealsAndPromotions() {
  return (
    <div>
      <h3>Deals and promotions</h3>
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
    </div>
  );
}

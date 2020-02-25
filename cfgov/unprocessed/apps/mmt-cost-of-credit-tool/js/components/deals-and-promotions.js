export const DealsAndPromotions = () => {
  return (
    <div className="m-step">
      <div className="m-step__aside">Deals and promotions</div>
      <div className="m-step__tag">deal/promotion 1</div>
      <div className="m-step__title">
        Rebate or coupon <em>?</em>
      </div>
      <div className="m-step__desc">
        Is the store offering an amount of money off the purchase price
      </div>
      <input type="input" className="m-step__input"></input>
      <div className="m-step__tag">deal/promotion 2</div>
      <div className="m-step__title">Zero or reduced interest promotion</div>
      <div className="m-step__desc">
        Is there an interest rate promotional period?
      </div>
      <input type="input" className="m-step__input"></input>
      <p>for</p>
      <input type="input" className="m-step__input"></input>
      <div className="m-step__tag"> - or - </div>
      <div className="m-step__title">Deferred interest promotion</div>
      <div className="m-step__desc">
        Are you being offered 0% interest if paid in full within a certain
        number of months?
      </div>
      <input type="input" className="m-step__input"></input>
    </div>
  );
};

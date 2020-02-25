export const MonthlyPayment = () => {
  return (
    <div className="m-step">
      <div className="m-step__tag">step 4/4</div>
      <div className="m-step__title">Monthly Payment</div>
      <div className="m-step__desc">
        How much can you comfortably pay each month?
      </div>
      <input type="input" className="m-step__input"></input>
      <div className="m-step__tag"> - or - </div>
      <div className="m-step__title">Months to pay off</div>
      <div className="m-step__desc">
        How long do you want to keep paying for this purchase?
      </div>
      <input type="input" className="m-step__input"></input>
    </div>
  );
};

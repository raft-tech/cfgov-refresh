export const Scenario = props => {
  return (
    <div className="m-tool-card display-row">
      <div className="m-tool-card__sub-container75">
        <div className="m-scenario__item">
          Pay {props.monthlyPayment} a month
        </div>
        <div className="m-scenario__item">
          for {props.monthstoPayOff} months
        </div>
        <div className="m-scenario__true-cost">
          True Cost is {props.truePurchaseCost}
        </div>
      </div>
      <div className="m-tool-card__sub-container25">
        <div className="m-scenario__link">Try this scenario</div>
      </div>
    </div>
  );
};

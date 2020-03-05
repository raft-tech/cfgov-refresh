export const DealOrPromo = props => {
  return (
    <div className="m-tool-card">
      <div className="m-tool__tag">deal/promotion {props.num}</div>
      <h3>
        {props.title} <em>?</em>
      </h3>
      <div className="m-tool-card__desc">{props.desc}</div>
      <input id="deal" type="input" className="response-input__long"></input>
    </div>
  );
};

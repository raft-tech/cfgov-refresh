export const TipsAndResources = () => {
  return (
    <div className="m-tool-card">
      <div className="m-tool-card__header">
        <h2>Tips and resources</h2>
        <div className="m-tool-card__desc">
          Can you comfortably make this payment on time each month?
        </div>
      </div>

      <div>
        <div className="m-tool-card__gray-gap display-row">
          <div className="m-tool-card__sub-container75">Yes</div>
          <div className="m-tool-card__sub-container25 color-blue">Show</div>
        </div>
        <div className="m-tool-card__gray-gap display-row">
          <div className="m-tool-card__sub-container75">No</div>
          <div className="m-tool-card__sub-container25 color-blue">Show</div>
        </div>
        <div className="m-tool-card__gray-gap display-row">
          <div className="m-tool-card__sub-container75">I'm not sure</div>
          <div className="m-tool-card__sub-container25 color-blue">Show</div>
        </div>
      </div>
    </div>
  );
};

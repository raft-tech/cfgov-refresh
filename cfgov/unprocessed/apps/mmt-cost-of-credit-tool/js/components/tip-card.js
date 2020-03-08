export const TipCard = ({ tip, resource }) => {
  return (
    <div className="m-tool-card">
      <div>
        <div>{tip}</div>
      </div>
      <div>
        <div>{resource}</div>
      </div>
    </div>
  );
};

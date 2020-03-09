export const TipCard = ({ tipicon, tip, resourceicon, resource }) => {
  console.log('tip from props', tip);
  return (
    <div className="m-tool-card">
      <div>
        <div>
          <div className="action__link-icon tip-card-icon" dangerouslySetInnerHTML={{ __html: tipicon }} />
          <strong>Tip:</strong>
          {tip}
        </div>
      </div>
      <br />
      <div>
        <div>
          <div className="action__link-icon tip-card-icon" dangerouslySetInnerHTML={{ __html: resourceicon }} />
          <strong>Resource:</strong>
          {resource}
        </div>
      </div>
    </div>
  );
};

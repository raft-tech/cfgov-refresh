import { StrategyItemAction } from "./strategy-item-action";

export default function StrategyItem({ heading, title, description, action }) {
  return (
    <div className="strategy-card">
      <div className="heading">{heading}</div>
      {title && <div className="title">{title}</div>}
      {description && <div className="description">{description}</div>}
      {action && <StrategyItemAction {...action} />}
    </div>
  );
}

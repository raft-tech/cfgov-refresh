import React from "react";

export const StrategyItemAction = ({ text, questions, finalThought }) => (
  <div className="strategy-card-action">
    {text && <StrategyItemTip text={text} />}
    {questions && <StrategyItemQuestionList questions={questions} />}
    {finalThought && <div className="final-thought">{finalThought}</div>}
  </div>
);

export const StrategyItemTip = ({ text }) => (
  <div className="tip">
    <img
      className="star-icon"
      src="/static/apps/mmt-my-money-calendar/img/star.png"
      alt="gold star"
    />
    {text}
  </div>
);

export const StrategyItemQuestionList = ({ questions }) => (
  <ul className="question-list">
    {questions.map((question, idx) => (
      <li className="item" key={idx}>
        {question}
      </li>
    ))}
  </ul>
);

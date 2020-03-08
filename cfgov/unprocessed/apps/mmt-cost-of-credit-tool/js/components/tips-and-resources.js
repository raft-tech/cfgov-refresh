// import { connect } from 'react-redux';

import { useState } from 'react';

import { TipCard } from '../components/tip-card';
import { ActionLink } from './controls/action-link';

export const TipsAndResources = () => {
  const [yesVisible, setYesVisible] = useState(false);
  const [noVisible, setNoVisible] = useState(false);
  const [notSureVisible, setNotSureVisible] = useState(false);

  const changeYes = () => {
    setYesVisible(!yesVisible);
  };
  const changeNo = () => {
    setNoVisible(!noVisible);
  };
  const changeNotSure = () => {
    setNotSureVisible(!notSureVisible);
  };
  return (
    <div className="m-tool-card">
      <div className="m-tool-card__header">
        <h2>Tips and resources</h2>
        <div className="m-tool-card__desc">Can you comfortably make this payment on time each month?</div>
      </div>

      <div className="o-tool-card-group__gray">
        <div className="action-link__row">
          <h3>Yes</h3>
          <div className="show-link" onClick={changeYes}>
            {yesVisible ? <ActionLink text="Hide" icon="close-icon" /> : <ActionLink text="Show" icon="open-icon" />}
          </div>
        </div>
        <div>
          {yesVisible ? (
            <div>
              <TipCard tip="here is a tip" resource="here is a resource" />
            </div>
          ) : null}
        </div>
      </div>
      <div className="o-tool-card-group__gray">
        <div className="action-link__row">
          <h3>No</h3>
          <div className="show-link" onClick={changeNo}>
            {noVisible ? <ActionLink text="Hide" icon="close-icon" /> : <ActionLink text="Show" icon="open-icon" />}
          </div>
          <div>
            {noVisible ? (
              <div>
                <TipCard tip="here is a tip" resource="here is a resource" />
              </div>
            ) : null}
          </div>
        </div>
      </div>
      <div className="o-tool-card-group__gray">
        <div className="action-link__row">
          <h3>Not Sure</h3>
          <div className="show-link" onClick={changeNotSure}>
            {notSureVisible ? (
              <ActionLink text="Hide" icon="close-icon" />
            ) : (
              <ActionLink text="Show" icon="open-icon" />
            )}
          </div>
          <div>
            {notSureVisible ? (
              <div>
                <TipCard tip="here is a tip" resource="here is a resource" />
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

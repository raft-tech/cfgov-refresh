import { connect } from 'react-redux';

import { useState } from 'react';
import plus from '@cfpb/cfpb-icons/src/icons/add-round.svg';
import minus from '@cfpb/cfpb-icons/src/icons/minus-round.svg';
import lightbulb from '@cfpb/cfpb-icons/src/icons/lightbulb-round.svg';
import appendix from '@cfpb/cfpb-icons/src/icons/appendix-round.svg';

// import { Tips } from '../lib/raw-data';
import { TipCard } from '../components/tip-card';
import { ActionLink } from './controls/action-link';

const TipsAndResources = (props) => {
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
          <div className="action__label">
            <h3>Yes</h3>
          </div>
          <div className="action__item" onClick={changeYes}>
            {yesVisible ? <ActionLink text="Hide" icon={minus} /> : <ActionLink text="Show" icon={plus} />}
          </div>
        </div>
        <div>
          {yesVisible ? (
            <div>
              <ul>
                {props.tips
                  .filter((tip) => {
                    return tip.type === 'Yes';
                  })
                  .map((tip) => {
                    return (
                      <div key="key1">
                        <TipCard tipicon={lightbulb} tip={tip.tip} resourceicon={appendix} resource={tip.resource} />
                      </div>
                    );
                  })}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
      <div className="o-tool-card-group__gray">
        <div className="action-link__row">
          <div className="action__label">
            <h3>No</h3>
          </div>
          <div className="action__item" onClick={changeNo}>
            {noVisible ? <ActionLink text="Hide" icon={minus} /> : <ActionLink text="Show" icon={plus} />}
          </div>
        </div>
        <div>
          {noVisible ? (
            <div>
              <ul>
                {props.tips
                  .filter((tip) => {
                    return tip.type === 'No';
                  })
                  .map((tip) => {
                    return (
                      <div key="key1">
                        <TipCard tipicon={lightbulb} tip={tip.tip} resourceicon={appendix} resource={tip.resource} />
                      </div>
                    );
                  })}
              </ul>
            </div>
          ) : null}
        </div>
      </div>

      <div className="o-tool-card-group__gray">
        <div className="action-link__row">
          <div className="action__label">
            <h3>Not Sure</h3>
          </div>
          <div className="action__item" onClick={changeNotSure}>
            {notSureVisible ? <ActionLink text="Hide" icon={minus} /> : <ActionLink text="Show" icon={plus} />}
          </div>
        </div>
        <div>
          {notSureVisible ? (
            <div>
              <ul>
                {props.tips
                  .filter((tip) => {
                    return tip.type === 'No';
                  })
                  .map((tip) => {
                    return (
                      <div key="key1">
                        <TipCard tipicon={lightbulb} tip={tip.tip} resourceicon={appendix} resource={tip.resource} />
                      </div>
                    );
                  })}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    tips: state.tips,
  };
};

export default connect(mapStateToProps)(TipsAndResources);

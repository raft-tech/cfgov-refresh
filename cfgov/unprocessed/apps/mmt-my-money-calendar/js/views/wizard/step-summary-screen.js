import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { useCallback } from 'react';
import { useStore } from '../../stores';

function StepSummaryScreen() {
  const { InputWizardStore, CashFlowStore } = useStore();

  // const cfEventList = CashFlowStore.cashFlowEvents.map((cfEvent) => {
  // const cfEventList= {
  //   return (
  //     <li key={cfEvent.category}>
  //       <div className="c-cfevent-list">
  //          <div>{cfEvent.startDate}</div>
  //         <div>05/20/2020</div>
  //          <div>{cfEvent.category}</div>
  //         <div>Housing</div>
  //          <div>{cfEvent.amount}</div>
  //         <div>$750</div>
  //       </div>
  //       </li>
  //       <li>
  //       <div className="c-cfevent-list">
  //          <div>{cfEvent.startDate}</div>
  //         <div>05/22/2020</div>
  //          <div>{cfEvent.category}</div>
  //         <div>Transportation</div>
  //          <div>{cfEvent.amount}</div>
  //         <div>$89</div>
  //       </div>
  //     </li>
  //   );
  // });
  const selScreens = InputWizardStore.selectedInputScreens.map((screen) => {
    return (
      <li key={screen.screenNumber}>
        <div className="c-cfevent-category">
          <div>{screen.category}</div>
        </div>
      </li>
    );
  });

  return (
    <section className="expenses-summary-step">
      <img src="/static/apps/mmt-my-money-calendar/img/pb_3.png" alt="" className="u-hide-on-print" />

      <div className="c-step-title">
        <h4>{InputWizardStore.currentStepCategory} Step: Summary</h4>
      </div>

      <div className="c-step-container">
        <div>
          Yeah! You added some details on your <em>{InputWizardStore.currentStepCategory}.</em>
        </div>
      </div>
      <br />
      <br />
      <h4>You have added the following:</h4>
      <div className="c-cfevent-list-container">
        <ul>{selScreens}</ul>
      </div>

      <div className="c-calendar-img">
        <img src="/static/apps/mmt-my-money-calendar/img/jan-month-expenses.png" alt="" className="u-hide-on-print" />
      </div>

      <div className="c-nav-buttons">
        <div>
          <Link
            to={InputWizardStore.currentScreen[0].nextRoute}
            onClick={InputWizardStore.setCurrentScreen}
            className="a-btn a-btn__full-on-xs"
          >
            <div className="c-button-wrapper">
              <div className="c-button-words">{InputWizardStore.currentScreen[0].nextButtonText}</div>
              <div className="c-button-icon">
                <img
                  src="/static/apps/mmt-my-money-calendar/img/right-arrow.png"
                  alt=""
                  className="u-hide-on-print c-arrow-icon"
                />
              </div>
            </div>
          </Link>
        </div>
        <div>
          <Link
            to={InputWizardStore.currentScreen[0].nextRoute}
            onClick={prevScreenNumber}
            className="a-btn a-btn__full-on-xs"
          >
            <div className="c-button-wrapper">
              <div className="c-button-icon">
                <img
                  src="/static/apps/mmt-my-money-calendar/img/left-arrow.png"
                  alt=""
                  className="u-hide-on-print c-arrow-icon"
                />
              </div>
              <div className="c-button-words">{InputWizardStore.currentScreen[0].prevButtonText}</div>
            </div>
          </Link>
        </div>
      </div>
      <br />
      <br />
    </section>
  );
}

export default observer(StepSummaryScreen);

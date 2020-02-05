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
  //         {/* <div>{cfEvent.startDate}</div> */}
  //         <div>05/20/2020</div>
  //         {/* <div>{cfEvent.category}</div> */}
  //         <div>Housing</div>
  //         {/* <div>{cfEvent.amount}</div> */}
  //         <div>$750</div>
  //       </div>
  //       </li>
  //       <li>
  //       <div className="c-cfevent-list">
  //         {/* <div>{cfEvent.startDate}</div> */}
  //         <div>05/22/2020</div>
  //         {/* <div>{cfEvent.category}</div> */}
  //         <div>Transportation</div>
  //         {/* <div>{cfEvent.amount}</div> */}
  //         <div>$89</div>
  //       </div>
  //     </li>
  //   );
  // });

  return (
    <section className="expenses-summary-step">
      <img src="/static/apps/mmt-my-money-calendar/img/pb_3.png" alt="" className="u-hide-on-print" />

      <div className="c-step-title">
        <h4>Expenses Step: Summary</h4>
      </div>

      {/* <div className="c-step-container">
        <div>
          Yeah! You added some details on your <em>expenses.</em>
        </div>
      </div>
      <h4>You have added the following:</h4>
      <div className="c-cfevent-list-container">
        {/* <ul>{cfEventList}</ul> */}
        <ul>
          <li>
            <div className="c-cfevent-list">
              {/* <div>{cfEvent.startDate}</div> */}
              <div>05/20/2020</div>
              {/* <div>{cfEvent.category}</div> */}
              <div>Housing</div>
              {/* <div>{cfEvent.amount}</div> */}
              <div>$750</div>
            </div>
          </li>
          <li>
            <div className="c-cfevent-list">
              {/* <div>{cfEvent.startDate}</div> */}
              <div>05/22/2020</div>
              {/* <div>{cfEvent.category}</div> */}
              <div>Transportation</div>
              {/* <div>{cfEvent.amount}</div> */}
              <div>$89</div>
            </div>
          </li>
        </ul>
      </div>

      <div className="c-calendar-img">
        <img src="/static/apps/mmt-my-money-calendar/img/jan-month-expenses.png" alt="" className="u-hide-on-print" />
      </div>

      <div className="c-nav-buttons">
        <div>
          <Link to="/" className="a-btn a-btn__full-on-xs">
            Home
          </Link> */}
        </div>
      </div>
      <br />
      <br />
    </section>
  );
}

export default observer(StepSummaryScreen);

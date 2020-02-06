import { observer, toJS } from 'mobx-react';

import { Link } from 'react-router-dom';
import { useCallback, useState } from 'react';
import { useStore } from '../../stores';
import { categoryDetails } from '../../lib/category-details';
import { CategorySelectionScreenDetails } from '../../lib/step-details';
import BeginningBalanceOptions from './beginning-balance-options';
import IncomeOptions from './income-options';
import ExpenseOptions from './expense-options';

function CategorySelectionScreen() {
  const store = useStore();
  const { InputWizardStore } = store;
  const [currStep, setCurrStep] = useState(0);

  const handleCheckbox = useCallback((event) => {
    if (event.target.checked) {
      let inputScreenDetails = categoryDetails.find((screen) => screen.category === event.target.name);
      InputWizardStore.addSelectedInputScreen(inputScreenDetails);
    } else {
      InputWizardStore.deleteSelectedInputScreen(event.target.name);
    }
  });

  const setCurrentScreen = () => {
    InputWizardStore.setCurrentScreen();
  };

  console.log('currStep', currStep);

  return (
    <section className="expenses-step">
      <img src="/static/apps/mmt-my-money-calendar/img/pb_3.png" alt="" className="u-hide-on-print" />
      <div className="c-step-title">
        <h4>{CategorySelectionScreenDetails[currStep].step}</h4>
      </div>

      <div className="c-step-container">
        <div className="c-step-img">
          <img src={CategorySelectionScreenDetails[currStep].pageImage} alt="" />
        </div>
        <div className="c-step-title">{CategorySelectionScreenDetails[currStep].stepTitle}</div>
      </div>
      <div>{CategorySelectionScreenDetails[currStep].description}</div>
      <br />

      {(() => {
        switch (CategorySelectionScreenDetails[currStep].step) {
          case 'Beginning Balance':
            return <BeginningBalanceOptions handleCheckbox={handleCheckbox} />;
          case 'Income':
            return <IncomeOptions handleCheckbox={handleCheckbox} />;
          case 'Expenses':
            return <ExpenseOptions handleCheckbox={handleCheckbox} />;
        }
      })()}

      <div className="c-nav-buttons">
        <div>
          {/* <Link to="/wizard/category-input-screen" onClick={setCurrentScreen} className="a-btn a-btn__full-on-xs"> */}
          <Link to="/wizard/category-input-screen" onClick={setCurrentScreen} className="a-btn a-btn__full-on-xs">
            {`Input your ${InputWizardStore.currentStepCategory}`}
          </Link>
        </div>
        <div>
          <Link to="/home" className="a-btn a-btn__full-on-xs">
            Back
          </Link>
        </div>
        <div>
          <Link to="/">Home</Link>
        </div>
      </div>
      <br />
      <br />
      <br />
      <br />
    </section>
  );
}

export default observer(CategorySelectionScreen);

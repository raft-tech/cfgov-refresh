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

  const handleCheckbox = useCallback((event) => {
    console.log('made it to handleCheckbox');
    if (event.target.checked) {
      let screenName = event.target.name;
      let inputScreenDetails = categoryDetails.find((screen) => screen.category === event.target.name);
      InputWizardStore.addSelectedInputScreen(inputScreenDetails);
    } else {
      InputWizardStore.deleteSelectedInputScreen(event.target.name);
      console.log(`${event.target.name} category has been deleted`);
    }
  });

  const setCurrentScreen = () => {
    InputWizardStore.setCurrentScreen();
  };
  // console.log(options);
  console.log('step', CategorySelectionScreenDetails[2].step);

  return (
    <section className="expenses-step">
      <img src="/static/apps/mmt-my-money-calendar/img/pb_3.png" alt="" className="u-hide-on-print" />
      <div className="c-step-title">
        <h4>{CategorySelectionScreenDetails[2].step}</h4>
      </div>

      <div className="c-step-container">
        <div className="c-step-img">
          <img src={CategorySelectionScreenDetails[2].pageImage} alt="" />
        </div>
        <div className="c-step-title">{CategorySelectionScreenDetails[2].stepTitle}</div>
      </div>
      <div>{CategorySelectionScreenDetails[2].description}</div>
      <br />

      {(() => {
        switch (CategorySelectionScreenDetails[2].step) {
          case 'Beginning Balance':
            return <BeginningBalanceOptions handleCheckbox={handleCheckbox} />;
          case 'Income':
            return <IncomeOptions handleCheckbox={handleCheckbox} />;
          case 'Expenses':
            console.log('exp');
            return <ExpenseOptions handleCheckbox={handleCheckbox} />;
        }
      })()}

      <div className="c-nav-buttons">
        <div>
          <Link to="/wizard/category-input-screen" onClick={setCurrentScreen} className="a-btn a-btn__full-on-xs">
            Input your Expenses
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

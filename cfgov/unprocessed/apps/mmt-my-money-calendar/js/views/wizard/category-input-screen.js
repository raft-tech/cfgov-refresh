import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { useState, useCallback, useEffect } from 'react';
import { useStore } from '../../stores';
import FrequencyInputs from '../../components/frequency-inputs';

function CategoryInputScreen() {
  const { InputWizardStore, CashFlowStore } = useStore();

  const [step, setStep] = useState('Expenses');
  const [category, setCategory] = useState('Housing');
  const [frequency, setFrequency] = useState('monthly');
  const [startDate, setStartDate] = useState('');
  const [amount, setAmount] = useState(0);

  const addNewCFEvent = useCallback((event) => {
    event.preventDefault();
    console.log('made it to addNewCFEvent');
    var userInputDetails = {
      step: step,
      category: category,
      frequency: frequency,
      startDate: startDate,
      amount: amount,
    };

    CashFlowStore.addNewCashFlowEvent(userInputDetails);
  });

  const nextScreenNumber = () => {
    InputWizardStore.nextScreenNumber();
  };
  const prevScreenNumber = () => {
    InputWizardStore.prevScreenNumber();
  };

  console.log('next button text', InputWizardStore.currentScreen[0].nextButtonText);
  return (
    <section className="category-input-screen">
      <img src="/static/apps/mmt-my-money-calendar/img/pb_3.25.png" alt="" className="u-hide-on-print" />
      <div className="c-step-title">
        <h4>
          {InputWizardStore.currentScreen[0].step}: {InputWizardStore.currentScreen[0].category}
        </h4>
      </div>

      <div className="c-row-container c-increment-title-container">
        <div className="c-increment-img">
          <img src={InputWizardStore.currentScreen[0].pageImage} alt="" className="u-hide-on-print c-increment-icon" />
        </div>
      </div>
      <br />

      <div>
        <h3 className="c-increment-subtitle">{InputWizardStore.currentScreen[0].subtitle}</h3>
      </div>
      <div>{InputWizardStore.currentScreen[0].description}</div>
      <form onSubmit={addNewCFEvent}>
        <div className="c-category-frequency-container">
          <label className="a-label a-label__heading" htmlFor="payment-frequency">
            How often do you pay your {InputWizardStore.currentScreen[0].category} bill?
          </label>
          <FrequencyInputs category={InputWizardStore.currentScreen[0].category} onChange={setFrequency} />
        </div>
        <div className="c-category-input-container">
          <label className="a-label a-label__heading" htmlFor="payment-due-date">
            {InputWizardStore.currentScreen[0].nextPaymentDueDateLabel}
          </label>
          <div className="form-l_col c-input">
            <input
              id="next-payment-due-date"
              className="c-category-input"
              name="dueDate"
              placeholder="02/01/2020"
              onChange={(event) => setStartDate(event.target.value)}
            />
          </div>
        </div>
        <div className="c-category-input-container">
          <label className="a-label a-label__heading" htmlFor="payment-amount">
            {InputWizardStore.currentScreen[0].nextPaymentAmountLabel}
          </label>
          <div className="form-l_col c-input">
            <input
              id="next-payment-amount"
              className="c-category-input"
              name="amount"
              placeholder="$850.00"
              onChange={(event) => setAmount(event.target.value)}
            />
          </div>
        </div>
        <input type="submit" value="Submit" />
      </form>

      <br />

      <div className="c-nav-buttons">
        <div>
          <Link
            to={InputWizardStore.currentScreen[0].nextRoute}
            onClick={nextScreenNumber}
            className="a-btn a-btn__full-on-xs"
          >
            <div className="c-button-wrapper">
              <div className="c-button-words">Next, add {InputWizardStore.currentScreen[0].nextButtonText}</div>
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

export default observer(CategoryInputScreen);

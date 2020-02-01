import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { useStore } from '../../stores';

function CategoryInputScreen() {
  const store = useStore();
  const { InputWizardStore } = store;

  return (
    <section className="category-input-screen">
      <img src="/static/apps/mmt-my-money-calendar/img/pb_3.25.png" alt="" className="u-hide-on-print" />
      <div className="c-step-title">
        <h4>
          {InputWizardStore.selectedInputScreens[0].step}: {InputWizardStore.selectedInputScreens[0].category}
        </h4>
      </div>

      <div className="c-row-container c-increment-title-container">
        <div className="c-increment-img">
          <img
            src={InputWizardStore.selectedInputScreens[0].pageImage}
            alt=""
            className="u-hide-on-print c-increment-icon"
          />
        </div>
      </div>
      <br />

      <div>
        <h3 className="c-increment-subtitle">{InputWizardStore.selectedInputScreens[0].subtitle}</h3>
      </div>
      <div>{InputWizardStore.selectedInputScreens[0].description}</div>
      <div className="c-category-frequency-container">
        <label className="a-label a-label__heading" htmlFor="payment-frequency">
          How often do you pay your {InputWizardStore.selectedInputScreens[0].category} bill?
        </label>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: `${InputWizardStore.selectedInputScreens[0].frequencyInputs}` }}
        ></div>
      </div>
      <div className="c-category-input-container">
        <label className="a-label a-label__heading" for="payment-due-date">
          {InputWizardStore.selectedInputScreens[0].nextPaymentDueDateLabel}
        </label>
        <div className="form-l_col c-input">
          <input
            id="next-payment-due-date"
            className="c-category-input"
            name="name"
            type="type"
            placeholder="02/01/2020"
          />
        </div>
      </div>
      <div className="c-category-input-container">
        <label className="a-label a-label__heading" for="payment-amount">
          {InputWizardStore.selectedInputScreens[0].nextPaymentAmountLabel}
        </label>
        <div className="form-l_col c-input">
          <input id="next-payment-amount" className="c-category-input" name="name" type="type" placeholder="$850.00" />
        </div>
      </div>

      <br />

      <div className="c-nav-buttons">
        <div>
          <Link to="/" className="a-btn a-btn__full-on-xs">
            Input your Groceries
          </Link>
        </div>
        <div>
          <Link to={`{InputWizardStore.prevScreenPath}`} className="a-btn a-btn__full-on-xs">
            Back to Transportation
          </Link>
        </div>
      </div>

      <br />
      <br />
    </section>
  );
}

export default observer(CategoryInputScreen);

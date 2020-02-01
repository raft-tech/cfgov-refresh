import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { useState, useCallback, useEffect } from 'react';
import { useStore } from '../../stores';

function CategorySelectionScreen() {
  const store = useStore();
  const { wizardStepStore } = store;

  const [selectedCategoriesArray, setSelectedCategoriesArray] = useState([]);

  const handleCheckbox = useCallback((event) => {
    if (event.target.checked) {
      switch (event.target.name) {
        case 'Housing':
          var stepDetails = {
            category: 'Housing',
            pageTitle: 'Expense: Housing',
            pageImage: '../../../img/icon-housing.png',
            subtitle: 'Tell us about your Housing Costs',
            description: 'This is where any additional description will go.',
          };
          break;
        case 'Transportation':
          var stepDetails = {
            category: 'Transportation',
            pageTitle: 'Expense: Transportation',
            pageImage: '../../../img/icon-transportation.png',
            subtitle: 'Tell us about your Transportation Costs',
            description: 'This is where any additional description will go.',
          };

          break;
        case 'Groceries':
          var stepDetails = {
            category: 'Groceries',
            pageTitle: 'Expense: Groceries',
            pageImage: '../../../img/icon-transportation.png',
            subtitle: 'Tell us about your Groceris Costs',
            description: 'This is where any additional description will go.',
          };

          break;
        case 'Entertainment':
          var stepDetails = {
            category: 'Entertainment',
            pageTitle: 'Expense: Entertainment',
            pageImage: '../../../img/icon-transportation.png',
            subtitle: 'Tell us about your Entertainment Costs',
            description: 'This is where any additional description will go.',
          };

          break;
        case 'Phone':
          var stepDetails = {
            category: 'Phone',
            pageTitle: 'Expense: Phone',
            pageImage: '../../../img/icon-transportation.png',
            subtitle: 'Tell us about your Phone Costs',
            description: 'This is where any additional description will go.',
          };

          break;
        case 'Childcare':
          var stepDetails = {
            category: 'Childcare',
            pageTitle: 'Expense: Childcare',
            pageImage: '../../../img/icon-transportation.png',
            subtitle: 'Tell us about your Childcare Costs',
            description: 'This is where any additional description will go.',
          };

          break;
        default:
          console.log('inside switch default', event.target.name);
      }

      wizardStepStore.addWizardStep(stepDetails);
    } else {
      wizardStepStore.deleteWizardStep(event.target.name);
      console.log(`${event.target.name} category has been deleted`);
    }
  });

  const categoryList = wizardStepStore.wizardSteps.map((selectedCategory) => {
    return <li key={selectedCategory.category}>{selectedCategory.category}</li>;
  });

  return (
    <section className="expenses-step">
      <img src="/static/apps/mmt-my-money-calendar/img/pb_3.png" alt="" className="u-hide-on-print" />

      <div className="c-step-title">
        <h4>Expenses</h4>
      </div>
      <div>On clicking 'Next' following step input screens will come up in order</div>
      <ul>{categoryList}</ul>

      <div className="c-step-container">
        <div className="c-step-img">
          <img src="/static/apps/mmt-my-money-calendar/img/expense-img.png" alt="" className="u-hide-on-print" />
        </div>
        <div className="c-step-title">Tell us about your expenses</div>
      </div>
      <div>Check off those that you currently have</div>
      <br />

      <form className="wizard-form">
        <fieldset className="o-form_fieldset ">
          <div className="m-form-field m-form-field__lg-target m-form-field__checkbox ">
            <input
              className="a-checkbox"
              type="checkbox"
              id="Housing"
              name="Housing"
              onChange={handleCheckbox}
              checked={Boolean(wizardStepStore.wizardSteps.find((step) => step.category === 'Housing'))}
            />
            <label className="a-label" htmlFor="Housing">
              <span>Housing</span>
            </label>
          </div>
          <div className="m-form-field m-form-field__lg-target m-form-field__checkbox ">
            <input
              className="a-checkbox"
              type="checkbox"
              id="Transportation"
              name="Transportation"
              onChange={handleCheckbox}
              checked={!!wizardStepStore.wizardSteps.find((step) => step.category === 'Transportation')}
            />
            <label className="a-label" htmlFor="Transportation">
              <span>Transportation</span>
            </label>
          </div>

          <div className="m-form-field m-form-field__lg-target m-form-field__checkbox ">
            <input
              className="a-checkbox"
              type="checkbox"
              id="Groceries"
              name="Groceries"
              onChange={handleCheckbox}
              checked={!!wizardStepStore.wizardSteps.find((step) => step.category === 'Groceries')}
            />
            <label className="a-label" htmlFor="Groceries">
              <span>Groceries</span>
            </label>
          </div>

          <div className="m-form-field m-form-field__lg-target m-form-field__checkbox ">
            <input
              className="a-checkbox"
              type="checkbox"
              value="Entertainment"
              id="Entertainment"
              name="Entertainment"
              onChange={handleCheckbox}
              checked={Boolean(wizardStepStore.wizardSteps.find((step) => step.category === 'Entertainment'))}
            />
            <label className="a-label" htmlFor="Entertainment">
              <span>Entertainment</span>
            </label>
          </div>

          <div className="m-form-field m-form-field__lg-target m-form-field__checkbox ">
            <input
              className="a-checkbox"
              type="checkbox"
              value="Phone"
              id="Phone"
              name="Phone"
              onChange={handleCheckbox}
              checked={Boolean(wizardStepStore.wizardSteps.find((step) => step.category === 'Phone'))}
            />
            <label className="a-label" htmlFor="Phone">
              <span>Phone</span>
            </label>
          </div>

          <div className="m-form-field m-form-field__lg-target m-form-field__checkbox ">
            <input
              className="a-checkbox"
              type="checkbox"
              value="Childcare"
              id="Childcare"
              name="Childcare"
              onChange={handleCheckbox}
              checked={Boolean(wizardStepStore.wizardSteps.find((step) => step.category === 'Childcare'))}
            />
            <label className="a-label" htmlFor="Childcare">
              <span>Childcare</span>
            </label>
          </div>
        </fieldset>
      </form>
      <div className="c-nav-buttons">
        <div>
          <Link to="/wizard/category-input-screen" className="a-btn a-btn__full-on-xs">
            {wizardStepStore.wizardSteps.length ? `Input your ${wizardStepStore.wizardSteps[0].category}` : `mistake`}
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

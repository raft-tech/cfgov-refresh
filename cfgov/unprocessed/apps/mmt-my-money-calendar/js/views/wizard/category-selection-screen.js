import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { useState, useCallback, useEffect } from 'react';
import { useStore } from '../../stores';

function CategorySelectionScreen() {
  const store = useStore();
  const { wizardStepStore } = store;

  const [selectedCategoriesArray, setSelectedCategoriesArray] = useState([]);

  const handleCheckbox = useCallback((event) => {
    if (!event.target.checked) {
      return;
    }

    switch (event.target.name) {
      case 'Housing':
        var stepDetails = {
          category: 'housing',
          pageTitle: 'Expense: Housing',
          pageImage: '../../../img/icon-housing.png',
          subtitle: 'Tell us about your Housing Costs',
          description: 'This is where any additional description will go.',
        };
        break;
      case 'Transportation':
        var stepDetails = {
          category: 'transportation',
          pageTitle: 'Expense: Transportation',
          pageImage: '../../../img/icon-transportation.png',
          subtitle: 'Tell us about your Transportation Costs',
          description: 'This is where any additional description will go.',
        };

        break;
      case 'Groceries':
        var stepDetails = {
          category: 'groceries',
          pageTitle: 'Expense: Groceries',
          pageImage: '../../../img/icon-transportation.png',
          subtitle: 'Tell us about your Groceris Costs',
          description: 'This is where any additional description will go.',
        };

        break;
      case 'Entertainment':
        var stepDetails = {
          category: 'transportation',
          pageTitle: 'Expense: Transportation',
          pageImage: '../../../img/icon-transportation.png',
          subtitle: 'Tell us about your Entertainment Costs',
          description: 'This is where any additional description will go.',
        };

        break;
      case 'Phone':
        var stepDetails = {
          category: 'phone',
          pageTitle: 'Expense: Phone',
          pageImage: '../../../img/icon-transportation.png',
          subtitle: 'Tell us about your Phone Costs',
          description: 'This is where any additional description will go.',
        };

        break;
      case 'Childcare':
        var stepDetails = {
          category: 'childcare',
          pageTitle: 'Expense: Childcare',
          pageImage: '../../../img/icon-transportation.png',
          subtitle: 'Tell us about your Childcare Costs',
          description: 'This is where any additional description will go.',
        };

        break;
      default:
        console.log('inside switch default', event.target.name);
    }
    console.log('wizardStep', stepDetails);
    wizardStepStore.addWizardStep(event.target.name);
    // wizardStepStore.addWizardStep(stepDetails);
  });

  const categoryList = wizardStepStore.wizardSteps.map((selectedCategory) => {
    return <li key={selectedCategory}>{selectedCategory}</li>;
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
              id="housing"
              name="Housing"
              onChange={handleCheckbox}
              checked={wizardStepStore.wizardSteps.includes('Housing')}
            />
            <label className="a-label" htmlFor="transportation">
              <span>Housing</span>
            </label>
          </div>
          <div className="m-form-field m-form-field__lg-target m-form-field__checkbox ">
            <input
              className="a-checkbox"
              type="checkbox"
              id="transportation"
              name="Transportation"
              onChange={handleCheckbox}
              checked={wizardStepStore.wizardSteps.includes('Transportation')}
            />
            <label className="a-label" htmlFor="transportation">
              <span>Transportation</span>
            </label>
          </div>

          <div className="m-form-field m-form-field__lg-target m-form-field__checkbox ">
            <input
              className="a-checkbox"
              type="checkbox"
              id="groceries"
              name="Groceries"
              onChange={handleCheckbox}
              checked={wizardStepStore.wizardSteps.includes('Groceries')}
            />
            <label className="a-label" htmlFor="groceries">
              <span>Groceries</span>
            </label>
          </div>

          <div className="m-form-field m-form-field__lg-target m-form-field__checkbox ">
            <input
              className="a-checkbox"
              type="checkbox"
              value="entertainment"
              id="entertainment"
              name="Entertainment"
              onChange={handleCheckbox}
              checked={wizardStepStore.wizardSteps.includes('Entertainment')}
            />
            <label className="a-label" htmlFor="entertainment">
              <span>Entertainment</span>
            </label>
          </div>

          <div className="m-form-field m-form-field__lg-target m-form-field__checkbox ">
            <input
              className="a-checkbox"
              type="checkbox"
              value="phone"
              id="phone"
              name="Phone"
              onChange={handleCheckbox}
              checked={wizardStepStore.wizardSteps.includes('Phone')}
            />
            <label className="a-label" htmlFor="phone">
              <span>Phone</span>
            </label>
          </div>

          <div className="m-form-field m-form-field__lg-target m-form-field__checkbox ">
            <input
              className="a-checkbox"
              type="checkbox"
              value="childcare"
              id="childcare"
              name="Childcare"
              onChange={handleCheckbox}
              checked={wizardStepStore.wizardSteps.includes('Childcare')}
            />
            <label className="a-label" htmlFor="childcare">
              <span>Childcare</span>
            </label>
          </div>
        </fieldset>
        {/* <input type="submit" value="Submit" /> */}
      </form>
      <div className="c-nav-buttons">
        <div>
          <Link to="/wizard/category-input-screen" className="a-btn a-btn__full-on-xs">
            Input your {wizardStepStore.wizardSteps[0]}
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

import { observer, toJS } from 'mobx-react';
import { Link } from 'react-router-dom';
import { useCallback } from 'react';
import { useStore } from '../../stores';
import { categoryDetails } from '../../lib/category-details';
import { CategorySelectionScreenDetails } from '../../lib/step-details';

function CategorySelectionScreen() {
  const store = useStore();
  const { InputWizardStore } = store;

  const handleCheckbox = useCallback((event) => {
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

  // const handleNextScreen = useCallback((event) => {
  //   InputWizardStore.setCurrentScreen();
  // });

  return (
    <section className="expenses-step">
      <img src="/static/apps/mmt-my-money-calendar/img/pb_3.png" alt="" className="u-hide-on-print" />
      <div className="c-step-title">
        <h4>{CategorySelectionScreenDetails[2].step}</h4>
      </div>
      {/* <div>On clicking 'Next' following step input screens will come up in order</div>
      <ul>{categoryList}</ul> */}
      <div className="c-step-container">
        <div className="c-step-img">
          <img src={CategorySelectionScreenDetails[2].pageImage} alt="" />
        </div>
        <div className="c-step-title">{CategorySelectionScreenDetails[2].stepTitle}</div>
      </div>
      <div>{CategorySelectionScreenDetails[2].description}</div>
      <br />
      {/* <div
        className="content"
        dangerouslySetInnerHTML={{ __html: `${CategorySelectionScreenDetails[2].categoryOptions}` }}
      ></div> */}

      <form className="wizard-form">
        <fieldset className="o-form_fieldset ">
          <div className="m-form-field m-form-field__lg-target m-form-field__checkbox ">
            <input
              className="a-checkbox"
              type="checkbox"
              id="Housing"
              name="Housing"
              onChange={handleCheckbox}
              checked={Boolean(InputWizardStore.selectedInputScreens.find((screen) => screen.category === 'Housing'))}
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
              checked={!!InputWizardStore.selectedInputScreens.find((screen) => screen.category === 'Transportation')}
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
              checked={!!InputWizardStore.selectedInputScreens.find((screen) => screen.category === 'Groceries')}
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
              checked={Boolean(
                InputWizardStore.selectedInputScreens.find((screen) => screen.category === 'Entertainment')
              )}
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
              checked={Boolean(InputWizardStore.selectedInputScreens.find((screen) => screen.category === 'Phone'))}
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
              checked={Boolean(InputWizardStore.selectedInputScreens.find((screen) => screen.category === 'Childcare'))}
            />
            <label className="a-label" htmlFor="Childcare">
              <span>Childcare</span>
            </label>
          </div>
        </fieldset>
      </form>
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

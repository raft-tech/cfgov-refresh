import { observer } from 'mobx-react';
import { useStore } from '../../stores';

function BeginningBalanceOptions(props) {
  const { InputWizardStore } = useStore();
  console.log('props', props);

  return (
    <div className="expenses-options">
      <form className="wizard-form">
        <fieldset className="o-form_fieldset ">
          <div className="m-form-field m-form-field__lg-target m-form-field__checkbox">
            <input
              className="a-checkbox"
              type="checkbox"
              id="Checking Account"
              name="Checking Account"
              onChange={props.handleCheckbox}
              checked={Boolean(
                InputWizardStore.selectedInputScreens.find((screen) => screen.category === 'Checking Account')
              )}
            />
            <label className="a-label" htmlFor="Checking Account">
              <span>Checking Account</span>
            </label>
          </div>
          <div className="m-form-field m-form-field__lg-target m-form-field__checkbox">
            <input
              className="a-checkbox"
              type="checkbox"
              id="Savings Account"
              name="Savings Account"
              onChange={props.handleCheckbox}
              checked={Boolean(
                InputWizardStore.selectedInputScreens.find((screen) => screen.category === 'Savings Account')
              )}
            />
            <label className="a-label" htmlFor="Savings Account">
              <span>Savings Account</span>
            </label>
          </div>
          <div className="m-form-field m-form-field__lg-target m-form-field__checkbox">
            <input
              className="a-checkbox"
              type="checkbox"
              id="Cash"
              name="Cash"
              onChange={props.handleCheckbox}
              checked={Boolean(InputWizardStore.selectedInputScreens.find((screen) => screen.category === 'Cash'))}
            />
            <label className="a-label" htmlFor="Cash">
              <span>Cash</span>
            </label>
          </div>
          <div className="m-form-field m-form-field__lg-target m-form-field__checkbox">
            <input
              className="a-checkbox"
              type="checkbox"
              id="Prepaid Cards"
              name="Prepaid Cards"
              onChange={props.handleCheckbox}
              checked={Boolean(
                InputWizardStore.selectedInputScreens.find((screen) => screen.category === 'Prepaid Cards')
              )}
            />
            <label className="a-label" htmlFor="Prepaid Cards">
              <span>Prepaid Cards</span>
            </label>
          </div>
          <div className="m-form-field m-form-field__lg-target m-form-field__checkbox">
            <input
              className="a-checkbox"
              type="checkbox"
              id="Other"
              name="Other"
              onChange={props.handleCheckbox}
              checked={Boolean(InputWizardStore.selectedInputScreens.find((screen) => screen.category === 'Other'))}
            />
            <label className="a-label" htmlFor="Other">
              <span>Other</span>
            </label>
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default observer(BeginningBalanceOptions);

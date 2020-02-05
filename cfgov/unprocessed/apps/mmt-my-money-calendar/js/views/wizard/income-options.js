import { observer } from 'mobx-react';
import { useStore } from '../../stores';

function IncomeOptions(props) {
  const { InputWizardStore } = useStore();

  return (
    <div className="income-options">
      <fieldset className="o-form_fieldset ">
        <div className="m-form-field m-form-field__lg-target m-form-field__checkbox ">
          <input
            className="a-checkbox"
            type="checkbox"
            id="Paycheck"
            name="Paycheck"
            onChange={props.handleCheckbox}
            checked={Boolean(InputWizardStore.selectedInputScreens.find((screen) => screen.category === 'Paycheck'))}
          />
          <label className="a-label" htmlFor="Paycheck">
            <span>Paycheck</span>
          </label>
        </div>
        <div className="m-form-field m-form-field__lg-target m-form-field__checkbox ">
          <input
            className="a-checkbox"
            type="checkbox"
            id="Child Support"
            name="Child Support"
            onChange={props.handleCheckbox}
            checked={!!InputWizardStore.selectedInputScreens.find((screen) => screen.category === 'Child Support')}
          />
          <label className="a-label" htmlFor="Child Supportn">
            <span>Child Support</span>
          </label>
        </div>

        <div className="m-form-field m-form-field__lg-target m-form-field__checkbox ">
          <input
            className="a-checkbox"
            type="checkbox"
            id="Disability Benefits"
            name="Disability Benefits"
            onChange={props.handleCheckbox}
            checked={
              !!InputWizardStore.selectedInputScreens.find((screen) => screen.category === 'Disability Benefits')
            }
          />
          <label className="a-label" htmlFor="Disability Benefits">
            <span>Disability Benefits</span>
          </label>
        </div>

        <div className="m-form-field m-form-field__lg-target m-form-field__checkbox ">
          <input
            className="a-checkbox"
            type="checkbox"
            value="SNAP"
            id="SNAP"
            name="SNAP"
            onChange={props.handleCheckbox}
            checked={Boolean(InputWizardStore.selectedInputScreens.find((screen) => screen.category === 'SNAP'))}
          />
          <label className="a-label" htmlFor="SNAP">
            <span>SNAP</span>
          </label>
        </div>

        <div className="m-form-field m-form-field__lg-target m-form-field__checkbox ">
          <input
            className="a-checkbox"
            type="checkbox"
            value="TANF"
            id="TANF"
            name="TANF"
            onChange={props.handleCheckbox}
            checked={Boolean(InputWizardStore.selectedInputScreens.find((screen) => screen.category === 'TANF'))}
          />
          <label className="a-label" htmlFor="TANF">
            <span>TANF</span>
          </label>
        </div>

        <div className="m-form-field m-form-field__lg-target m-form-field__checkbox ">
          <input
            className="a-checkbox"
            type="checkbox"
            value="Other"
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
    </div>
  );
}

export default observer(IncomeOptions);

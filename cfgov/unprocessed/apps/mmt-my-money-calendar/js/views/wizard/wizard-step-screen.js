import { observer } from 'mobx-react';
import { useCallback, useEffect } from 'react';
import WizardSteps from '../../config/wizard-steps';

import { useStore } from '../../stores';

function WizardStepScreen() {
  const store = useStore();
  const { wizardStepStore } = store;

  // const [housing, setHousing] = useState(false);

  const renderWizardSteps = () => {
    return wizardStepStore.allWizardSteps.map((value, key) => {
      return <li key={value.category}>{value.category}</li>;
    });
  };

  const addWizardStep = useCallback((event) => {
    event.preventDefault();

    WizardSteps.forEach((step) => {
      wizardStepStore.addWizardStep(step);
    });
  });
  useEffect(() => console.log(wizardStepStore.wizardSteps), [wizardStepStore.wizardSteps]);

  return (
    <section>
      <h2>all step screens </h2>
      <ul>{renderWizardSteps()}</ul>
      <button onClick={addWizardStep}>Add Wizard Step</button>
    </section>
  );
}

export default observer(WizardStepScreen);

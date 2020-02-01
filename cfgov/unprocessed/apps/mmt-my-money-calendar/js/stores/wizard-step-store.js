import { observable, action, computed } from 'mobx';

import logger from '../lib/logger';

export default class WizardStepStore {
  @observable wizardSteps = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.logger = logger.addGroup('wizardStepStore');

    this.logger.debug('Initialize wizardStepStore: %O', this);
  }

  @action addWizardStep(wizardStep) {
    this.wizardSteps.push(wizardStep);
  }

  @action deleteWizardStep(category) {
    console.log('category to be deleted', category);

    var filteredSteps = this.wizardSteps.filter((step) => step.category !== category);
    console.log('filteredSteps', filteredSteps);
    this.wizardSteps.replace(filteredSteps);
    // // this.wizardSteps.delete(category);
    console.log('wizardStep after delete', this.wizardSteps);
  }

  @computed get allWizardSteps() {
    return [...this.wizardSteps.values()];
  }

  toJS() {
    return this.wizardSteps.map((wizardStep) => wizardStep.toJS());
  }

  static fromJS(array) {
    const wizardStepStore = new WizardStepStore();
    wizardStepStore.wizardSteps = array.map((item) => WizardStepModel.fromJS(wizardStepStore, item));
    return wizardStepStore;
  }
}

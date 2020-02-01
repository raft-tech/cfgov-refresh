import { observable, action, computed } from 'mobx';

import logger from '../lib/logger';

export default class InputWizardStore {
  @observable selectedInputScreens = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.logger = logger.addGroup('InputWizardStore');

    this.logger.debug('Initialize InputWizardStore: %O', this);
  }

  @action addSelectedInputScreen(selectedScreen) {
    this.selectedInputScreens.push(selectedScreen);
  }

  @action deleteSelectedInputScreen(category) {
    console.log('category to be deleted', category);

    var filteredScreens = this.selectedInputScreens.filter((step) => step.category !== category);
    console.log('filteredScreens', filteredScreens);
    this.selectedInputScreens.replace(filteredScreens);
    // // this.selectedInputScreens.delete(category);
    console.log('wizardStep after delete', this.selectedInputScreens);
  }

  @computed get allWizardSteps() {
    return [...this.selectedInputScreens.values()];
  }

  toJS() {
    return this.selectedInputScreens.map((wizardStep) => wizardStep.toJS());
  }

  static fromJS(array) {
    const InputWizardStore = new InputWizardStore();
    InputWizardStore.selectedInputScreens = array.map((item) => WizardStepModel.fromJS(InputWizardStore, item));
    return InputWizardStore;
  }
}

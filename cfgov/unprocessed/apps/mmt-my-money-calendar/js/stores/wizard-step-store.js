import { observable, action, computed } from 'mobx';
import WizardStepModel from './models/wizard-step-model';
import logger from '../lib/logger';

export default class WizardStepStore {
  @observable wizardSteps = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.logger = logger.addGroup('wizardStepStore');

    this.logger.debug('Initialize wizardStepStore: %O', this);
  }

  @action addWizardStep(wizardStep) {
    this.logger.log('wizardStep', wizardStep);
    this.wizardSteps.push(wizardStep);
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

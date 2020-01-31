import { observable, action, computed } from 'mobx';

import WizardStepStore from './wizard-step-store';
import CashFlowStore from './cash-flow-store';

export default class RootStore {
  @observable networkStatus = 'idle';

  constructor() {
    this.eventStore = new CashFlowStore(this);
    this.wizardStepStore = new WizardStepStore(this);
  }

  @computed get isLoading() {
    return this.networkStatus === 'loading';
  }

  @computed get hasNetworkError() {
    return this.networkStatus === 'error';
  }

  @action setNetworkStatus(val) {
    this.networkStatus = val;
  }
}

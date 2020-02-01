import { observable, action, computed } from 'mobx';

import InputWizardStore from './input-wizard-store';
// import CashFlowStore from './cash-flow-store';

export default class RootStore {
  @observable networkStatus = 'idle';

  constructor() {
    // this.eventStore = new CashFlowStore(this);
    this.InputWizardStore = new InputWizardStore(this);
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

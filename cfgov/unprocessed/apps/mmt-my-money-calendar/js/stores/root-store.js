import { observable, action, computed } from 'mobx';
// import CashFlowStore from './cash-flow-store';
import InputWizardStore from './input-wizard-store';

export default class RootStore {
  @observable networkStatus = 'idle';

  constructor() {
    this.logger = logger.addGroup('rootStore');
    this.InputWizardStore = new InputWizardStore(this);
    // this.CashFlowStore = new CashFlowStore(this);
    this.logger.debug('Initialize RootStore: %O', this);
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

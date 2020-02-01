import { observable, computed, action } from 'mobx';
import logger from '../lib/logger';

export default class CashFlowStore {
  @observable cashFlowEvents = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.logger = logger.addGroup('cashFlowStore');
    this.logger.debug('Initialize CashFlowStore: %O', this);
  }

  @action addNewCashFlowEvent(cashFlowEvent) {
    console.log('made it to addNew', cashFlowEvent);
    this.cashFlowEvents.push(cashFlowEvent);
  }

  @computed get allCashFlowEvents() {
    return [...this.cashFlowEvents.values()];
  }
}

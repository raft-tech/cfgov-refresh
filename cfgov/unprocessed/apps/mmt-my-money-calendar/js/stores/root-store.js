import { observable, action, computed } from 'mobx';
import logger from '../lib/logger';
import UIStore from './ui-store';
import CashFlowStore from './cash-flow-store';
import StrategiesStore from './strategies-store';
import WizardStore from './wizard-store';

export default class RootStore {
  @observable loading = true;

  constructor() {
    this.logger = logger.addGroup('rootStore');
    this.uiStore = new UIStore(this);
    this.eventStore = new CashFlowStore(this);
    this.strategiesStore = new StrategiesStore(this);
    this.wizardStore = new WizardStore(this);

    this.logger.debug('Initialize RootStore: %O', this);
  }

  @action setLoading() {
    this.loading = true;
  }

  @action setIdle() {
    this.loading = false;
  }
}

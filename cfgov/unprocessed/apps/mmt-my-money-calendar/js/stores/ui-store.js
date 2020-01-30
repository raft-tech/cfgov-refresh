import { observable, computed, action } from 'mobx';

import logger from '../lib/logger';
import UiEvent from './models/ui-event';

export default class UiStore {
  @observable uieventsById = new Map();

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.logger = logger.addGroup('uiStore');

    this.logger.debug('Initialize CashFlowStore: %0', this);
  }

  /**
   * Whenever uieventsById is updates, this will regenerate the Map of uievents by order that they are entered automatically
   */

  @computed get allEvents() {
    return [...this.uieventsById.values()];
  }

  @action addEvent(event) {
    console.log('made it to addEvent', event);
    // this.uieventsById.set(event.id, new UiEvent(this.event));
    this.uieventsById.set(event.id, new UiEvent(event));
  }

  @action deleteEvent(id) {
    this.uieventsById.delete(id);
  }
}

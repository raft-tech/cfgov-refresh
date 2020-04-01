import { computed, action, observable } from 'mobx';
import logger from '../lib/logger';

class StrategiesStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    this.logger = logger.addGroup('strategiesStore');
    this.uiStore = this.rootStore.uiStore;
    this.eventStore = this.rootStore.eventStore;
  }

  @computed get eventsForWeek() {
    return this.eventStore.getEventsForWeek(this.uiStore.currentWeek);
  }

  @computed get weekAnalysis() {
    return this.analyzeEvents(this.eventsForWeek);
  }

  analyzeEvents(events) {
    return events.reduce();
  }
}

export default StrategiesStore;

import { flow, observable, computed, action } from 'mobx';
import { computedFn } from 'mobx-utils';
import logger from '../lib/logger';
import { toDateTime, dayOfYear } from '../lib/calendar-helpers';
import { toMap } from '../lib/array-helpers';
import CashFlowEvent from './models/cash-flow-event';
import { DateTime } from 'luxon';
import { transform } from '@babel/core';

export default class CashFlowStore {
  @observable events = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.logger = logger.addGroup('cashFlowStore');

    this.loadEvents();

    CashFlowEvent.on('recurrencesSaved', (events, originalEvent) => {
      this.logger.debug('event (%O) just created recurrences of itself: %O', originalEvent, events);
      this.addEvents(events);
    });

    this.logger.debug('Initialize CashFlowStore: %O', this);
  }

  /**
   * All events in the store as a map, keyed by date
   *
   * @type {Map}
   */
  @computed get eventsByDate() {
    return this.events.reduce((output, event) => {
      const key = event.dateTime.startOf('day').valueOf();
      const list = output.get(key) || [];
      output.set(key, [...list, event]);
      return output;
    }, new Map());
  }

  /**
   * All events in the store as a map, keyed by the timestamp of the beginning of the month in which they occur, in milliseconds
   *
   * @type {Map}
   */
  @computed get eventsByMonth() {
    return this.events.reduce((output, event) => {
      const key = event.dateTime.startOf('month').valueOf();
      const list = output.get(key) || [];
      output.set(key, [...list, event]);
      return output;
    }, new Map());
  }

  /**
   * All events in the store as a map, keyed by ID
   *
   * @type {Map}
   */
  @computed get eventsById() {
    return toMap(this.events, 'id');
  }

  /**
   * Get the user's available balance for the specified date
   *
   * @param {Date|DateTime} stopDate - The date to check the balance for
   * @returns {Number} the balance in dollars
   */
  getBalanceForDate = computedFn(function getBalanceForDate(stopDate) {
    stopDate = toDateTime(stopDate).endOf('day');
    const stopTimestamp = stopDate.valueOf();

    if (!this.events.length) return totalInCents;

    const totalInCents = this.events.reduce((total, event) => {
      const eventTimestamp = event.dateTime.endOf('day').valueOf();

      if (eventTimestamp > stopTimestamp) return total;

      return total + event.totalCents;
    }, 0);

    return totalInCents / 100;
  });

  /**
   * Get the total amount of money received or spent for a particular day
   *
   * @param {Date|DateTime} date - The date
   * @returns {Number} The amount of money for that day received or spent
   */
  getTotalForDate = computedFn(function getTotalForDate(date) {
    const events = this.getEventsForDate(date);
    const totalInCents = events.reduce((total, event) => total + event.totalCents, 0);
    return totalInCents / 100;
  });

  /**
   * Determines whether or not the given date has any income events
   *
   * @param {Date|DateTime} date - The date to check
   * @returns {Boolean}
   */
  dateHasIncome(date) {
    const events = this.getEventsForDate(date);

    if (!events) return false;

    return Boolean(events.find(({ totalCents }) => totalCents > 0));
  }

  /**
   * Determines whether or not the given date has any expense events
   *
   * @param {Date|DateTime} date - The date to check
   * @returns {Boolean}
   */
  dateHasExpenses(date) {
    const events = this.getEventsForDate(date);

    if (!events) return false;

    return Boolean(events.find(({ totalCents }) => totalCents < 0));
  }

  /**
   * Returns all cash flow events for the given date
   *
   * @param {Date|DateTime} date - The date to check
   * @returns {CashFlowEvent[]|undefined}
   */
  getEventsForDate(date) {
    date = toDateTime(date);
    return this.eventsByDate.get(date.startOf('day').valueOf());
  }

  /**
   * Load all events from IndexedDB, sorted ascending by date, into the events array
   *
   * @returns {undefined}
   */
  loadEvents = flow(function*() {
    // Flows are asynchronous actions, structured as generator functions
    const events = yield CashFlowEvent.getAllBy('date');
    this.events = events;
    this.logger.debug('Load all events from IDB store: %O', events);
  });

  /**
   * Adds a new event to the database and syncs it with the store
   *
   * @param {Object} params - Event properties
   * @param {String} params.name - The event name
   * @param {Date|DateTime} params.date - The event date
   * @param {String} params.category - The category name
   * @param {String} [params.subcategory] - The subcategory name
   * @param {Number} totalCents - The transaction amount, in cents
   * @param {Boolean} [recurs=false] - Whether or not the event recurs
   * @param {String} [recurrence] - The recurrence rule in iCalendar format
   * @returns {undefined}
   */
  createEvent = flow(function*(params) {
    const event = new CashFlowEvent(params);

    try {
      yield event.save();
      this.events.push(event);
    } catch (err) {
      this.rootStore.uiStore.setError(err);
    }
  });

  @action addEvent(event) {
    if (CashFlowEvent.isCashFlowEvent(event))
      return this.events.push(event);

    this.events.push(new CashFlowEvent(event));
  }

  @action addEvents(events) {
    this.events = [...this.events, ...events];
  }

  /**
   * Deletes an event from the store and the database
   *
   * @param {Number} id - The event's ID property
   * @returns {undefined}
   */
  deleteEvent = flow(function*(id) {
    const event = this.eventsById.get(id);
    yield event.destroy();
    this.events = this.events.filter((e) => e.id !== id);
  });
}

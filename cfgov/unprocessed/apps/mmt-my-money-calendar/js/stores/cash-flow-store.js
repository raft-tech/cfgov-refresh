import { flow, observable, computed, action } from 'mobx';
import { asyncComputed } from 'computed-async-mobx';
import { computedFn } from 'mobx-utils';
import logger from '../lib/logger';
import { toDayJS, dayjs } from '../lib/calendar-helpers';
import { toMap } from '../lib/array-helpers';
import CashFlowEvent from './models/cash-flow-event';


export default class CashFlowStore {
  @observable eventsLoaded = false;
  @observable events = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.logger = logger.addGroup('cashFlowStore');

    this.loadEvents();

    CashFlowEvent.on('afterSave', (event) => {
      this.logger.info('Detected event save %O', event);

      if (event.recurs && event.recurrenceRule && !event.isRecurrence) this.createRecurrences(event);
    });

    this.logger.debug('Initialize CashFlowStore: %O', this);
  }

  /**
   * All events in the store as a map, keyed by date. Keys are unix timestamp integers, in milliseconds,
   * of the beginning of each day.
   *
   * @type {Map<number,CashFlowEvent[]>}
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
   * The date of the first event in the database, as a DayJS object
   *
   * @type {dayjs}
   */
  @computed get earliestEventDate() {
    if (!this.eventsByDate) return undefined;

    const [firstTimestamp] = this.eventsByDate.keys();

    if (!firstTimestamp) return undefined;

    return dayjs(firstTimestamp);
  }

  /**
   * All events in the store as a map, keyed by the timestamp of the beginning of the month in which they occur, in milliseconds
   *
   * @type {Map<number,CashFlowEvent[]>}
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
   * All events in the store as a map, keyed by the epoch timestamp of the beginning of the week in which the event occurs, in milliseconds.
   *
   * @type {Map<number, CashFlowEvent>}
   */
  @computed get eventsByWeek() {
    return this.events.reduce((output, event) => {
      const key = event.dateTime.startOf('week').valueOf();
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
   * A Set of event identifiers computed using their name, date, and originalEventID. Used for preventing duplicate event recurrences.
   *
   * @type {Set<String>}
   */
  @computed get eventSignatures() {
    const signatures = this.events.filter(({ originalEventID }) => originalEventID).map(({ signature }) => signature);
    return new Set(signatures);
  }

  @computed get eventCategories() {
    return Object.keys(
      this.events.reduce((result, { category }) => {
        result[category] = true;
        return result;
      }, {})
    );
  }

  @computed get hasStartingBalance() {
    return this.eventsLoaded && this.eventCategories.includes('income.startingBalance');
  }

  /**
   * Get the user's available balance for the specified date
   *
   * @param {Date|dayjs} stopDate - The date to check the balance for
   * @returns {Number} the balance in dollars
   */
  getBalanceForDate = computedFn(function getBalanceForDate(stopDate) {
    stopDate = toDayJS(stopDate).endOf('day');
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
   * @param {Date|dayjs} date - The date
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
   * @param {Date|dayjs} date - The date to check
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
   * @param {Date|dayjs} date - The date to check
   * @returns {Boolean}
   */
  dateHasExpenses(date) {
    const events = this.getEventsForDate(date);

    if (!events) return false;

    return Boolean(events.find(({ totalCents }) => totalCents < 0));
  }

  /**
   * Determines whether or not a given date has any events
   *
   * @param {Date|dayjs} date A JS date or dayjs object
   * @returns {boolean}
   */
  dateHasEvents(date) {
    return Boolean(this.getEventsForDate(date));
  }

  /**
   * Returns all cash flow events for the given date
   *
   * @param {Date|dayjs} date - The date to check
   * @returns {CashFlowEvent[]|undefined}
   */
  getEventsForDate(date) {
    date = toDayJS(date);
    return this.eventsByDate.get(date.startOf('day').valueOf());
  }

  /**
   * Gets all events occurring in the same week as the specified date
   *
   * @param {Date|dayjs} date - A date in the week to check
   * @returns {CashFlowEvent[]|undefined}
   */
  getEventsForWeek(date) {
    date = toDayJS(date).startOf('week');
    return this.eventsByWeek.get(date.valueOf());
  }

  /**
   * Load all events from IndexedDB, sorted ascending by date, into the events array
   *
   * @returns {undefined}
   */
  loadEvents = flow(function* () {
    //console.profile('loadEvents');
    // Flows are asynchronous actions, structured as generator functions
    this.rootStore.setLoading();
    const events = yield CashFlowEvent.getAllBy('date');
    this.events = events;
    this.eventsLoaded = true;
    this.rootStore.setIdle();
    //console.profileEnd('loadEvents');
  });

  /**
   * Get a single event from the store, by ID
   *
   * @param {number} id The event ID from the database
   * @returns {CashFlowEvent|undefined}
   */
  getEvent(id) {
    return this.eventsById.get(Number(id));
  }

  /**
   * Directly sets the events array
   *
   * @param {CashFlowEvent[]} events An array of CashFlowEvent instances
   * @returns {undefined}
   */
  @action setEvents(events) {
    this.events = events;
  }

  /**
   * Adds or updates an event in the database and syncs it with the store
   *
   * @param {Object} params - Event properties
   * @param {String} params.name - The event name
   * @param {Date|dayjs} params.date - The event date
   * @param {String} params.category - The category name
   * @param {String} [params.subcategory] - The subcategory name
   * @param {Number} totalCents - The transaction amount, in cents
   * @param {Boolean} [recurs=false] - Whether or not the event recurs
   * @param {String} [recurrence] - The recurrence rule in iCalendar format
   * @param {boolean} [updateRecurrences=false] - If event has recurrences, update their totals to match
   * @returns {undefined}
   */
  saveEvent = flow(function* (params, updateRecurrences = false) {
    let event;

    if (params.id) {
      this.logger.debug('updating existing event %O', params);
      event = this.getEvent(params.id);
      event.update(params);
    } else {
      this.logger.debug('creating new event %O', params);
      event = new CashFlowEvent(params);
    }

    try {
      yield event.save();

      if (!params.id) this.events.push(event);

      if (updateRecurrences) {
        const recurrences = yield event.getAllRecurrences();

        for (const recurrence of recurrences) {
          if (recurrence.dateTime.isBefore(event.dateTime)) continue;

          const stateEvent = this.getEvent(recurrence.id);
          stateEvent.update({ totalCents: event.totalCents });
          yield stateEvent.save();
          this.logger.debug('Update recurrence total (id: %d, total: %d)', recurrence.id, recurrence.total);
        }
      }
    } catch (err) {
      this.logger.error('Event save error: %O', err);
      throw err;
    }
  });

  /**
   * Adds a single event to the store, but does not persist it to the DB.
   *
   * @param {CashFlowEvent|Object} event The event to add
   */
  @action addEvent(event) {
    if (CashFlowEvent.isCashFlowEvent(event)) return this.events.push(event);

    this.events.push(new CashFlowEvent(event));
  }

  /**
   * Adds multiple events to the store at once. Does not persist them to the DB.
   *
   * @param {CashFlowEvent[]} events An array of CashFlowEvents
   */
  @action addEvents(events) {
    this.events = [...this.events, ...events];
  }

  /**
   * Deletes an event from the store and the database
   *
   * @param {Number} id - The event's ID property
   * @returns {undefined}
   */
  deleteEvent = flow(function* (id, andRecurrences) {
    const event = this.eventsById.get(id);
    const recurrences = yield event.getAllRecurrences();
    const deletedIDs = [event.id];

    yield event.destroy();
    this.logger.debug('Destroy event with ID %d', event.id);

    if (andRecurrences && recurrences && recurrences.length) {
      for (const recurrence of recurrences) {
        // only delete future recurrences:
        if (recurrence.dateTime.isBefore(event.dateTime)) continue;

        yield recurrence.destroy();
        deletedIDs.push(recurrence.id);
        this.logger.debug('Destroy event recurrence with ID %d', recurrence.id);
      }
    }

    this.events = this.events.filter((e) => !deletedIDs.includes(e.id));
  });

  /**
   * Automatically creates recurrences for events based on their recurrence rules, adding them to the store and persisting them to the DB.
   * This is currently not called explicitly - it runs as a callback when events are saved.
   *
   * @param {CashFlowEvent} event The event to create recurrences for
   */
  createRecurrences = flow(function* (event) {
    const copies = event.recurrenceDates.map(
      (dateTime) =>
        new CashFlowEvent({
          ...event.toJS(),
          dateTime,
          id: null,
          originalEventID: event.id,
          persisted: false,
        })
    );
    const savedEvents = [];

    for (const copy of copies) {
      if (this.eventSignatures.has(copy.signature)) {
        this.logger.debug('Skip saving duplicate recurrence: %O', copy);
        continue;
      }

      try {
        yield copy.save();
        savedEvents.push(copy);
      } catch (err) {
        this.logger.warn('Error saving event recurrence: %O', err);
        continue;
      }
    }

    this.addEvents(savedEvents);
  });

  /**
   * Delete all data from the DB and clear the store's events array
   */
  clearAllData = flow(function* () {
    yield CashFlowEvent.destroyAll();
    this.setEvents([]);
  });
}

import { observable, computed, action } from 'mobx';
import { RRule, rrulestr } from 'rrule';
import * as yup from 'yup';
import { DateTime } from 'luxon';
import EventEmitter from 'eventemitter3';
import { asyncComputed } from 'computed-async-mobx';
import logger from '../../lib/logger';
import dbPromise from '../../lib/database';
import { transform } from '../../lib/object-helpers';

export default class CashFlowEvent {
  @observable originalEventID;
  @observable id;
  @observable name;
  @observable date;
  @observable category;
  @observable subcategory;
  @observable totalCents = 0;
  @observable recurs = false;
  @observable recurrence;
  @observable errors;
  @observable persisted = false;
  @observable updatedAt;
  @observable createdAt;

  static eventEmitter = new EventEmitter();

  static emit(...args) {
    return this.eventEmitter.emit(...args);
  }

  static on(...args) {
    return this.eventEmitter.on(...args);
  }

  static once(...args) {
    return this.eventEmitter.once(...args);
  }

  static removeListener(...args) {
    return this.eventEmitter.removeListener(...args);
  }

  static recurrenceMonths = 3;

  static directions = {
    DESC: 'prev',
    ASC: 'next',
  };

  static store = 'events';

  static schema = {
    id: yup.number().integer(),
    name: yup.string().required(),
    date: yup.date().required(),
    category: yup.string().required(),
    subcategory: yup.string(),
    totalCents: yup.number().integer().default(0),
    recurs: yup.boolean().default(false),
    recurrence: yup.string(),
    createdAt: yup.date().default(() => new Date()),
    updatedAt: yup.date().default(() => new Date()),
  };

  /**
   * Indicates whether or not the object is an instance of CashFlowEvent
   *
   * @param {Object} obj - The object to check
   */
  static isCashFlowEvent(obj) {
    return obj instanceof CashFlowEvent;
  }

  /**
   * Fetch all cash flow events from the IndexedDB store
   *
   * @returns {Promise<CashFlowEvent[]>} An array of cash flow events
   */
  static async getAll() {
    const { store } = await this.transaction();
    const records = await store.getAll();
    return records.map((rec) => new CashFlowEvent({ ...rec, persisted: true }));
  }

  /**
   * Gets all entries in the IDB object store, sorted by the given index
   *
   * @param {String} indexName - The index to use for sorting
   * @param {String} direction - The direction in which to sort results ('next', 'nextunique', 'prev', or 'prevunique')
   * @returns {Promise<CashFlowEvent[]>} A promise resolving to an array of CashFlowEvent instances
   */
  static async getAllBy(indexName, direction = 'next') {
    const { store } = await this.transaction();
    const index = store.index(indexName);
    let cursor = await index.openCursor(null, direction);
    const results = [];

    while (cursor) {
      results.push(new CashFlowEvent({ ...cursor.value, persisted: true }));
      cursor = await cursor.continue();
    }

    return results;
  }

  /**
   * Retrieves a single cash flow event from the IDB store by its ID key
   *
   * @param {Number} id - The ID of the event to retrieve
   */
  static async get(id) {
    const { store } = await this.transaction();
    const record = await store.get(id);
    return new CashFlowEvent({ ...record, persisted: true });
  }

  /**
   * Retrieves cash flow events from the specified date range from the IDB store
   *
   * @param {Date} start - The beginning date to query from
   * @param {Date} end - The end date
   * @returns {Promise<CashFlowEvent[]>} An array of cash flow events
   */
  static async getByDateRange(start, end = new Date()) {
    const fromDate = new Date(start);
    const range = IDBKeyRange.lowerBound(fromDate);
    const { store } = await this.transaction();
    const index = store.index('date');
    let cursor = await index.openCursor(range);
    const results = [];

    while (cursor) {
      results.push(new CashFlowEvent({ ...cursor.value, persisted: true }));
      cursor = await cursor.continue();
    }

    return results;
  }

  /**
   * Get the number of stored cash flow events in the IDB store
   *
   * @returns {Promise<Number>} The number of stored cash flow events
   */
  static async count() {
    const { store } = await this.transaction();
    return store.count();
  }

  /**
   * Begin an IDB transaction
   *
   * @param {String} [perms="readonly"] - The permissions the transaction is requesting
   * @param {String|String[]} [stores=this.store] - The stores the transaction will be interacting with
   * @returns {Promise<Object>} An object with tx and store properties
   */
  static async transaction(perms = 'readonly', stores = this.store) {
    const db = await dbPromise;
    const tx = db.transaction(stores, perms);

    return {
      tx,
      store: tx.objectStore(this.store),
    };
  }

  constructor(props) {
    this.logger = logger.addGroup('cashFlowEvent');

    this.update(props);
  }

  get yupSchema() {
    return yup.object().shape(this.constructor.schema);
  }

  originalEvent = asyncComputed(undefined, 50, async () => await this.constructor.get(this.originalEventID));

  recurrences = asyncComputed([], async () => await this.constructor.getAllBy('originalEventID_date'));

  @computed get isRecurrence() {
    return this.recurs && this.originalEventID;
  }

  @computed get recurrenceRule() {
    if (!this.recurrence || typeof this.recurrence !== 'string') return null;
    return rrulestr(this.recurrence);
  }

  set recurrenceRule(rule) {
    this.recurrence = rule.toString();
  }

  @computed get recurrenceDates() {
    const now = DateTime.local();

    return this.recurrenceRule.between(
      this.dateTime.startOf('day').toJSDate(),
      now.plus({ months: this.constructor.recurrenceMonths }).endOf('day').toJSDate()
    ).map(DateTime.fromJSDate);
  }

  @computed get dateTime() {
    return DateTime.fromJSDate(this.date).startOf('day');
  }

  set dateTime(dateTime) {
    this.date = dateTime.startOf('day').toJSDate();
  }

  @computed get createdAtDateTime() {
    return DateTime.fromJSDate(this.createdAt);
  }

  set createdAtDateTime(value) {
    this.createdAt = value.toJSDate();
  }

  @computed get updatedAtDateTime() {
    return DateTime.fromJSDate(this.updatedAt);
  }

  set updatedAtDateTime(value) {
    this.updatedAt = value.toJSDate();
  }

  @computed get total() {
    return this.totalCents / 100;
  }

  set total(amount) {
    this.totalCents = amount * 100;
  }

  /**
   * Update the observable properties of this instance
   *
   * @param {Object} props - Properties to update
   * @returns {undefined}
   */
  @action update(props = {}) {
    for (const key in props) {
      this[key] = props[key];
    }
  }

  @action setID(id) {
    this.id = id;
  }

  @action setPersisted(value = true) {
    this.persisted = Boolean(value);
  }

  @action markPersisted(id) {
    this.id = id;
    this.persisted = true;
  }

  @action setTimestamps() {
    const now = new Date();
    this.createdAt = this.createdAt || now;
    this.updatedAt = now;
  }

  /**
   * Save the cash flow event to IndexedDB store, or raise a validation error if it doesn't conform to schema
   *
   * @throws {ValidationError} A Yup validation error if the object is not valid
   * @returns {Number} The key of the added or updated record
   */
  async save() {
    await this.validate();
    this.setTimestamps();

    const { tx, store } = await this.transaction('readwrite');
    const key = await store.put(this.toJS());
    await tx.complete;

    if (!this.id && !this.persisted) this.markPersisted(key);
    if (this.recurs && this.recurrenceRule && !this.isRecurrence)
      await this._createRecurrences();

    return key;
  }

  /**
   * Removes this event from the IDB store
   *
   * @returns {CashFlowEvent|Boolean} the event that was just removed, or false if not deleteable
   */
  async destroy() {
    if (!this.persisted) return false;
    const { tx, store } = await this.transaction('readwrite');
    await store.delete(this.id);
    await tx.complete;
    return this;
  }

  /**
   * Validate the cash flow event according to its defined schema
   *
   * @throws {ValidationError} A Yup validation error if the instance does not conform to schema
   * @returns {Promise<Object>} A promise resolving to the properties of the cash flow event if it's valid
   */
  validate() {
    return this.yupSchema.validate(this.toJS());
  }

  /**
   * Asynchronously determines whether or not the cash flow event is valid
   *
   * @returns {Promise<Boolean>} Whether or not the event is valid
   */
  isValid() {
    return this.yupSchema.isValid(this.toJS());
  }

  /**
   * Creates an IndexedDB transaction in which queries can be run
   *
   * @param {Boolean} [perms='readonly'] - Transaction permissions (readwrite or readonly)
   * @param {String|String[]} [stores=this.constructor.store] - Names of the object stores to be operated on
   */
  transaction(...args) {
    return this.constructor.transaction(...args);
  }

  toJS() {
    return transform(this.constructor.schema, (result, [key]) => {
      if (key === 'id' && !this[key]) return result;

      result[key] = this[key];
      return result;
    });
  }

  async _createRecurrences() {
    const events = this.recurrenceDates.map((dateTime) => new CashFlowEvent({
      ...this.toJS(),
      dateTime,
      id: null,
      originalEventID: this.id,
      persisted: false,
    }));

    this.logger.info('Generated recurrences for event %O: %O', this, events);

    const ids = await Promise.all(events.map((event) => event.save()));

    this.constructor.emit('recurrencesSaved', events, this);

    return ids;
  }
}

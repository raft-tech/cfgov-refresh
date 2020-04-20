import { observable, computed, action } from 'mobx';
import { rrulestr } from 'rrule';
import * as yup from 'yup';
import { dayjs } from '../../lib/calendar-helpers';
import EventEmitter from 'eventemitter3';
import { asyncComputed } from 'computed-async-mobx';
import logger from '../../lib/logger';
import dbPromise from '../../lib/database';
import { Categories } from '../models/categories';

export default class CashFlowEvent {
  @observable originalEventID;
  @observable id;
  @observable name = '';
  @observable date;
  @observable category;
  @observable totalCents = 0;
  @observable recurs = false;
  @observable recurrence;
  @observable errors;
  @observable persisted = false;
  @observable updatedAt;
  @observable createdAt;
  @observable recurrenceType;
  @observable payday1 = 15;
  @observable payday2 = 30;

  static MIN_DATE = dayjs(0);

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
    originalEventID: yup.number().integer(),
    name: yup.string(),
    dateTime: yup.date().required(),
    category: yup.string().required(),
    totalCents: yup
      .number()
      .integer()
      .default(0),
    createdAt: yup.date().default(() => new Date()),
    updatedAt: yup.date().default(() => new Date()),
  };

  static dbFields = [
    'id',
    'originalEventID',
    'name',
    'date',
    'category',
    'totalCents',
    'recurs',
    'rruleStr',
    'recurrenceType',
    'createdAt',
    'updatedAt',
  ];

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
    const cursor = await this.openCursor(indexName, direction);
    return this.getAllFromCursor(cursor);
  }

  /**
   * Get the first object in an index
   *
   * @param {string} indexName - The index to use for sorting
   * @param {string} [direction="next"] - The direction in which to sort
   * @returns {Promise<CashFlowEvent>}
   */
  static async getFirstBy(indexName, direction = 'next') {
    const cursor = await this.openCursor(indexName, direction);
    return cursor.value;
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
    const cursor = await this.openCursor('date', this.directions.ASC, range);
    return this.getAllFromCursor(cursor);
  }

  static async destroyAll() {
    const { store } = await this.transaction('readwrite');
    return store.clear();
  }

  static async getAllFromCursor(cursor) {
    const results = [];

    while (cursor) {
      results.push(new CashFlowEvent({ ...cursor.value, persisted: true }));
      cursor = await cursor.continue();
    }

    return results;
  }

  /**
   * Opens a cursor into an index for iteration
   *
   * @param {string} indexName The index to use for querying
   * @param {string} [direction="next"] The sort direction
   * @param {string|null} [range=null] The key range to query
   */
  static async openCursor(indexName, direction = this.directions.ASC, range = null) {
    const { store } = await this.transaction();
    const index = store.index(indexName);
    return index.openCursor(range, direction);
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

  originalEvent = asyncComputed(undefined, 50, async () => {
    if (!this.originalEventID) return undefined;
    return this.constructor.get(this.originalEventID);
  });

  recurrences = asyncComputed([], 100, async () => {
    if (this.isRecurrence || !this.id || !this.persisted || !this.rruleStr) return [];
    return this.getAllRecurrences();
  });

  @computed get signature() {
    return `${this.dateTime.startOf('day').valueOf()}-${this.originalEventID}`;
  }

  @computed get isRecurrence() {
    return this.recurs && this.originalEventID;
  }

  @computed get recurrenceRule() {
    if (!this.rruleStr || typeof this.rruleStr !== 'string') return null;
    return rrulestr(this.rruleStr);
  }

  @computed get categoryDetails() {
    return Categories.get(this.category);
  }

  @computed get absoluteCents() {
    return Math.abs(this.totalCents);
  }

  set recurrenceRule(rule) {
    if (!rule || typeof rule.toString !== 'function') {
      this.rruleStr = '';
      return;
    }

    this.rruleStr = rule.toString();
  }

  @computed get recurrenceDates() {
    const now = dayjs();

    return this.recurrenceRule
      .between(
        this.dateTime.startOf('day').toDate(),
        now
          .add(this.constructor.recurrenceMonths, 'months')
          .endOf('day')
          .toDate()
      )
      .map((date) => dayjs(date));
  }

  @computed get dateTime() {
    return dayjs(this.date).startOf('day');
  }

  set dateTime(dateTime) {
    if (!dateTime) {
      return;
    }

    this.date = dateTime.startOf('day').toDate();
  }

  @computed get createdAtDateTime() {
    return dayjs(this.createdAt);
  }

  set createdAtDateTime(value) {
    this.createdAt = value.toDate();
  }

  @computed get updatedAtDateTime() {
    return dayjs(this.updatedAt);
  }

  set updatedAtDateTime(value) {
    this.updatedAt = value.toDate();
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
    this.setTimestamps();

    const { tx, store } = await this.transaction('readwrite');
    const key = await store.put(this.toJS());
    await tx.complete;

    if (!this.id && !this.persisted) this.markPersisted(key);

    this.constructor.emit('afterSave', this);

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

    this.constructor.emit('destroy', this);
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
    return this.constructor.dbFields.reduce((output, field) => {
      if (field === 'id' && !this[field]) return output;
      output[field] = this[field];
      return output;
    }, {});
  }

  toFormValues() {
    return {
      id: this.id,
      name: this.name,
      totalCents: Math.abs(this.totalCents),
      category: this.category,
      dateTime: this.dateTime && this.dateTime.isValid() ? this.dateTime.format('YYYY-MM-DD') : null,
      recurs: this.recurs,
      recurrenceType: this.recurrenceType,
      payday1: this.payday1,
      payday2: this.payday2,
    };
  }

  async getAllRecurrences() {
    const id = this.isRecurrence ? this.originalEventID : this.id;
    const { store } = await this.transaction();
    const index = store.index('originalEventID_date');
    const lowerBound = [id, this.constructor.MIN_DATE.toDate()];
    const upperBound = [
      id,
      dayjs().add(3, 'months').toDate(),
    ];
    const range = IDBKeyRange.bound(lowerBound, upperBound);
    let cursor = await index.openCursor(range, 'next');

    return this.constructor.getAllFromCursor(cursor);
  }

  isGreaterThan(otherEvent) {
    return this.absoluteCents > otherEvent.absoluteCents;
  }

  isLessThan(otherEvent) {
    return this.absoluteCents < otherEvent.absoluteCents;
  }
}

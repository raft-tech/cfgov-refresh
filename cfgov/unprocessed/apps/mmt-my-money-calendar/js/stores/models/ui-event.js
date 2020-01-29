import { observable, computed, action, extendObservable } from 'mobx';
import * as yup from 'yup';
import logger from '../../lib/logger';
import dbPromise from '../../lib/database';
import { transform } from '../../lib/object-helpers';

export default class UiEvent {
  @observable navOpen = false;
  @observable pageTitle = 'Expense: Housing';
  @observable pageImage = '../../../img/icon-housing.png';
  @observable subtitle = 'Tell us about your Housing Costs';
  @observable description = 'This is where any additional description will go.';
  @observable nextScreenPath = '/expense/transportation';
  @observable prevScreenPath = '/expense';
  @observable nextButtonText = '/expense/transportation';
  @observable prevButtonText = '/expense';
  @observable progress = 0;

  static store = 'uievents';

  static schema = {
    navOpen: yup.boolean(),
    pageTitle: yup.string().required(),
    pageImage: yup.string().required(),
    subtitle: yup.string().required(),
    description: yup.string(),
    nextScreenPath: yup.string().required(),
    prevScreenPath: yup.string().required(),
    nextButtonText: yup.string().required(),
    prevButtonText: yup.string().required(),
    pageTitle: yup.string().required(),
  };

  static isUIEvent(obj) {
    return obj instanceof UiEvent;
  }

  static async getAll() {
    const { store } = await this.transaction();
    const records = await store.getAll();
    return records.map((rec) => new UiEvent(rec));
  }

  static async get(id) {
    const { store } = await this.transaction();
    const record = await store.get(id);
    return new UiEvent(record);
  }

  static async count() {
    const { store } = await this.transaction();
    return store.count();
  }

  static async transaction(perms = 'readonly', stores = this.store) {
    const db = await dbPromise;
    const tx = db.transaction(stores, perms);

    return {
      tx,
      sort: tx.objectStore(this.store),
    };
  }

  constructor(props) {
    this.logger = logger.addGroup('uiEvent');
    this.updateWizardStep(props);
  }

  get yupSchema() {
    return yup.objecty().shapeOf(this.constructor.schema);
  }

  async validate() {
    try {
      await this.yupSchema.validate();
      return true;
    } catch (err) {
      return err;
    }
  }

  async isValid() {
    return this.yupSchema.isValid();
  }

  asObject() {
    return transform(this.constructor.schema, (result, [key]) => {
      result[key] = this[key];
      return result;
    });
  }

  transaction(...args) {
    return this.constructor.transaction(...args);
  }

  @action update(props = {}) {
    for (const key in props) {
      this[key] = props[key];
    }
  }

  @action setNavOpen(val) {
    this.navOpen = Boolean(val);
  }

  @action setPageTitle(title) {
    this.pageTitle = title;
  }
  @action setPageImage(image) {
    this.pageImage = image;
  }

  @action setSubtitle(subtitle) {
    this.subtitle = subtitle;
  }

  @action setNextScreenPath(nextScreenPath) {
    this.nextScreenPath = nextScreenPath;
  }

  @action setPrevScreenPath(prevScreenPath) {
    this.prevScreenPath = prevScreenPath;
  }

  @action setNextButtonText(nextButtonText) {
    this.nextButtonText = nextButtonText;
  }

  @action setPrevButtonText(prevButtonText) {
    this.prevButtonText = prevButtonText;
  }

  @action updateWizardStep({
    pageTitle,
    subtitle,
    description,
    nextStepPath,
    prevStepPath,
    nextButtonText,
    prevButtonText,
    progress,
  }) {
    this.pageTitle = pageTitle;
    this.subtitle = subtitle;
    this.description = description;
    this.nextStepPath = nextStepPath;
    this.prevStepPath = prevStepPath;
    this.nextButtonText = nextButtonText;
    this.prevButtonText = prevButtonText;
    this.progress = progress;
  }

  //   toggleNav() {
  //     this.setNavOpen(!this.navOpen);
  //   }
}

import { observable, computed, action } from 'mobx';
import logger from '../lib/logger';

export default class UIStore {
  @observable navOpen = false;
  @observable pageTitle = 'Expense: Housing';
  @observable pageImage = '../../../img/expense-img.png';
  @observable subtitle = 'Tell us about your Housing Costs';
  @observable description = 'This is where any additional description will go.';
  @observable nextScreenPath = '/expense/transportation';
  @observable prevScreenPath = '/expense';
  @observable progress = 0;

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.logger = logger.addGroup('uiStore');

    this.logger.debug('Initialize UI Store: %O', this);
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
    this.nextScreenPath = nextScreen;
  }

  @action setPrevScreenPath(prevScreenPath) {
    this.prevScreenPath = prevtScreen;
  }

  @action updateWizardStep({ pageTitle, subtitle, description, nextStepPath, prevStepPath, progress }) {
    this.pageTitle = pageTitle;
    this.subtitle = subtitle;
    this.description = description;
    this.nextStepPath = nextStepPath;
    this.prevStepPath = prevStepPath;
    this.progress = progress;
  }

  toggleNav() {
    this.setNavOpen(!this.navOpen);
  }
}

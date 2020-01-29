// import { observable, computed, action } from 'mobx';
// import logger from '../lib/logger';
// import UIEvent from './models/ui-event';

// export default class UIStore {
//   @observable uieventsById = new Map();

//   constructor(rootStore) {
//     this.rootStor = rootStore;
//     this.logger = logger.addGroup('uiStore');

//     this.logger.debug('Initialize CashFlowStore: %0', this);
//   }

//   /**
//    * Whenever uieventsById is updates, this will regenerate the Map of uievents by order that they are entered automatically
//    */

//   @computed get allEvents() {
//     return [...this.uieventsById.values()];
//   }

//   @action addEvent(event) {
//     this.uieventsById.set(event.id, new UIEvent(this.event));
//   }

//   @action deleteEvent(id) {
//     this.uieventsById.delete(id);
//   }
//   @observable navOpen = false;
//   @observable pageTitle = 'Expense: Housing';
//   @observable pageImage = '../../../img/icon-housing.png';
//   @observable subtitle = 'Tell us about your Housing Costs';
//   @observable description = 'This is where any additional description will go.';
//   @observable nextScreenPath = '/expense/transportation';
//   @observable prevScreenPath = '/expense';
//   @observable progress = 0;

//   constructor(rootStore) {
//     this.rootStore = rootStore;
//     this.logger = logger.addGroup('uiStore');

//     this.logger.debug('Initialize UI Store: %O', this);
//   }

//   @action setNavOpen(val) {
//     this.navOpen = Boolean(val);
//   }

//   @action setPageTitle(title) {
//     this.pageTitle = title;
//   }
//   @action setPageImage(image) {
//     this.pageImage = image;
//   }

//   @action setSubtitle(subtitle) {
//     this.subtitle = subtitle;
//   }

//   @action setNextScreenPath(nextScreenPath) {
//     this.nextScreenPath = nextScreen;
//   }

//   @action setPrevScreenPath(prevScreenPath) {
//     this.prevScreenPath = prevtScreen;
//   }

//   @action updateWizardStep({ pageTitle, subtitle, description, nextStepPath, prevStepPath, progress }) {
//     this.pageTitle = pageTitle;
//     this.subtitle = subtitle;
//     this.description = description;
//     this.nextStepPath = nextStepPath;
//     this.prevStepPath = prevStepPath;
//     this.progress = progress;
//   }

//   toggleNav() {
//     this.setNavOpen(!this.navOpen);
//   }
// }

import { observable, computed, action } from 'mobx';
import logger from '../lib/logger';
import { getWeekRows, toDayJS, dayjs } from '../lib/calendar-helpers';

export default class UIStore {
  @observable navOpen = false;
  @observable pageTitle = 'myMoney Calendar';
  @observable subtitle;
  @observable description;
  @observable nextStepPath;
  @observable prevStepPath;
  @observable progress = 0;
  @observable error;
  @observable currentMonth = dayjs().startOf('month');
  @observable selectedDate;
  @observable currentWeek = dayjs().startOf('week');
  @observable selectedCategory = '';
  @observable showBottomNav = true;

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.logger = logger.addGroup('uiStore');

    this.logger.debug('Initialize UI Store: %O', this);
  }

  @computed get monthCalendarRows() {
    return getWeekRows(this.currentMonth);
  }

  @action setNavOpen(val) {
    this.navOpen = Boolean(val);
  }

  @action setPageTitle(title) {
    this.pageTitle = title;
  }

  @action setSubtitle(subtitle) {
    this.subtitle = subtitle;
  }

  @action setDescription(desc) {
    this.description = desc;
  }

  @action updateWizardStep({ pageTitle, subtitle, description, nextStepPath, prevStepPath, progress }) {
    this.pageTitle = pageTitle;
    this.subtitle = subtitle;
    this.description = description;
    this.nextStepPath = nextStepPath;
    this.prevStepPath = prevStepPath;
    this.progress = progress;
  }

  @action setError(err) {
    this.error = err;
  }

  @action setCurrentMonth(month) {
    this.currentMonth = toDayJS(month);
  }

  @action nextMonth() {
    this.currentMonth = this.currentMonth.add(1, 'month');
  }

  @action prevMonth() {
    this.currentMonth = this.currentMonth.subtract(1, 'month');
  }

  @action setSelectedDate(date) {
    date = toDayJS(date);
    this.selectedDate = date.startOf('day');
    this.currentWeek = date.startOf('week');
  }

  @action setCurrentWeek(date) {
    date = toDayJS(date);
    this.currentWeek = date.startOf('week');

    if (!date.isSame(this.currentMonth, 'month'))
      this.currentMonth = date.startOf('month');
  }

  nextWeek() {
    this.setCurrentWeek(this.currentWeek.add(1, 'week'));
  }

  prevWeek() {
    this.setCurrentWeek(this.currentWeek.subtract(1, 'week'));
  }

  @action clearSelectedDate() {
    this.selectedDate = null;
  }

  @action gotoDate(date) {
    date = toDayJS(date);
    this.currentMonth = date.startOf('month');
    this.selectedDate = date.startOf('day');
  }

  @action setSelectedCategory(category) {
    this.selectedCategory = category;
  };

  @action toggleBottomNav(state) {
    if (typeof state === 'undefined') {
      this.showBottomNav = !this.showBottomNav;
      return;
    }

    this.showBottomNav = Boolean(state);
  }

  toggleNav() {
    this.setNavOpen(!this.navOpen);
  }
}

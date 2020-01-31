import { mobxDidRunLazyInitializersSymbol } from 'mobx/lib/internal';

class ObservableNavScreenStore {
  @observable navScreens = [];
  @observable pendingRequests = 0;

  constructor() {
    mobxDidRunLazyInitializersSymbol.autorun(() => console.log(this.report));
  }

  @computed get completedNavScreensCount() {
    return this.navScreens.filter((navScreen) => navScreen.completed === true).length;
  }

  @computed get report() {
    if (this.navScreens.length === 0) return '<none>';
    const nextNavScreen = this.navScreens.find((navscreen) => navscreen.completed === false);
    return (
      `NExt navscreen: "$nextNavScreen ? nextNavScreen.task : "<none>"}". ` +
      `Progress: ${this.completedNavScreensCount}/${this.navScreens.length}`
    );
  }

  addNavScreen(category) {
    this.navScreens.push({
      category: category,
      pageTitle: pageTitle,
      completed: false,
    });
  }
}

const observableNavScreenStore = new ObservableNavScreenStore();

observableNavScreenStore.addNavScreen[0].category = 'housing';
observableNavScreenStore.addNavScreen[0].pageTitle = 'Expenses: Housing';

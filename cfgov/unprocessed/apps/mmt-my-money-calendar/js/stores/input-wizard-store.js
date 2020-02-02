import { observable, action, computed, toJS } from 'mobx';
import logger from '../lib/logger';

export default class InputWizardStore {
  @observable selectedInputScreens = [];
  @observable screenCounter = 0;
  @observable nextScreen = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.logger = logger.addGroup('inputWizardStore');
    this.logger.debug('Initialize InputWizardStore: %O', this);
  }

  @action addSelectedInputScreen(selectedScreen) {
    console.log('current screen count is ', this.screenCounter);
    //figure out what the current, prev and next screen number will be as well as the total screen count
    //push new screen onto selectedInputScreens
    this.selectedInputScreens.push(selectedScreen);
    //update screenCounter to 1
    let prevScreenNumber = this.screenCounter;
    this.screenCounter = this.screenCounter + 1;
    console.log('new screen count is', this.screenCounter);
    let nextScreenNumber = this.screenCounter + 1;

    //set the next screen number and the previous screen number

    console.log('selectedScreen', toJS(this.selectedInputScreens));
    if (this.screenCounter === 1) {
      this.nextScreen.push(selectedScreen);
    }
    console.log('nextScreen is ', toJS(this.nextScreen));
    selectedScreen.screenNumber = this.screenCounter;
    selectedScreen.nextScreenNumber = nextScreenNumber;
    selectedScreen.prevScreenNumber = prevScreenNumber;
    // console.log('selectedScreen after screen number update', selectedScreen);
  }

  @action updateRoutes() {
    let data = toJS(this.selectedInputScreens);

    console.log('current selectedInputScreens', data);
    //the next route for the newest screen will always be the step summary screen
    //set the nextRoute for the previous screen to be the route of the current screen
    //find the selectedInputScreen with the screenNumber that is the screen number of the current screen -1
    //once you identify the screen with the screenNumber that is the screenNumber of the current screen -1
    //update the this.selectedInputScreen.nextRoute to be equal to the route of the current screen
    //get current screencount
    console.log('currentScreenCount is ', this.screenCounter);
    let currentScreen = data.find((element) => element.screenNumber === this.screenCounter);
    console.log('current screen all data is ', toJS(currentScreen));
    console.log('current Screen Number is ', currentScreen.screenNumber);
    console.log('current Screen route is ', currentScreen.route);
    console.log('current Screen next route is ', currentScreen.nextRoute);

    let prevScreen = data.find((element) => element.screenNumber === this.screenCounter - 1);
    console.log('previous screen all data is ', toJS(prevScreen));
    console.log('previous Screen Number is ', prevScreen.screenNumber);
    console.log('previous Screen route is ', prevScreen.route);
    console.log('previous Screen next route is ', prevScreen.nextRoute);

    prevScreen.nextRoute = currentScreen.route;
    console.log('prevScreenRoute should change to current screen route', prevScreen.nextRoute);

    // find screen number 1
    let next = data.find((element) => element.screenNumber === 1);
    this.nextScreen.push(next);

    console.log('the first screen should be ', next.screenNumber + ' ' + next.step + ' ' + next.category);
    console.log('the first screen from observable should be ', toJS(this.nextScreen));
  }

  @action deleteSelectedInputScreen(category) {
    console.log('category to be deleted', category);

    var filteredScreens = this.selectedInputScreens.filter((step) => step.category !== category);
    console.log('filteredScreens', filteredScreens);
    this.selectedInputScreens.replace(filteredScreens);
    // // this.selectedInputScreens.delete(category);
    console.log('wizardStep after delete', this.selectedInputScreens);
  }

  @computed get allWizardSteps() {
    return [...this.selectedInputScreens.values()];
  }

  static fromJS(array) {
    const InputWizardStore = new InputWizardStore();
    InputWizardStore.selectedInputScreens = array.map((item) => WizardStepModel.fromJS(InputWizardStore, item));
    return InputWizardStore;
  }
}

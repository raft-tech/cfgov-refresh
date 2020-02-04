import { observable, action, computed, toJS } from 'mobx';

export default class InputWizardStore {
  @observable selectedInputScreens = [];

  @observable currentScreen = [];

  // observables for step screens
  @observable stepCounter = 3;
  @observable currentStepNumber = 1;
  @observable currentStepScreen = {};

  // observables for category screens
  @observable nextScreen = [];
  @observable prevScreen = [];
  @observable screenCounter = 0;
  @observable currentScreenNumber = 1;

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @action addSelectedInputScreen(newScreen) {
    //add the new screen to the selectedInputScreens array
    this.screenCounter = this.screenCounter + 1;
    newScreen.screenNumber = this.screenCounter;
    newScreen.screenNumber = this.screenCounter;
    this.selectedInputScreens.push(newScreen);

    // update the nextButtonText for each of the screens
    let lastScreen = this.selectedInputScreens.find((screen) => screen.screenNumber === this.screenCounter);
    lastScreen.nextButtonText = 'Summary of expenses';
    lastScreen.nextRoute = `/wizard/step-summary`;
    if (this.screenCounter > 1) {
      for (let i = this.screenCounter; i > 1; i--) {
        let currScreen = this.selectedInputScreens.find((screen) => screen.screenNumber === i);
        let prevScreen = this.selectedInputScreens.find((screen) => screen.screenNumber === i - 1);
        prevScreen.nextButtonText = currScreen.category;
      }
    }

    // update the prevButtonText for each of the screens
    let firstScreen = this.selectedInputScreens.find((screen) => screen.screenNumber === 1);
    firstScreen.prevButtonText = 'Expense selections';
    firstScreen.prevRoute = `/wizard/category-selection-screen`;
    if (this.screenCounter > 1) {
      for (let i = 1; i < this.screenCounter; i++) {
        let currScreen = this.selectedInputScreens.find((screen) => screen.screenNumber === i);
        let nextScreen = this.selectedInputScreens.find((screen) => screen.screenNumber === i + 1);
        nextScreen.prevButtonText = currScreen.category;
      }
    }
  }

  @action setCurrentScreen() {
    let currScreen = this.selectedInputScreens.find((screen) => screen.screenNumber === this.currentScreenNumber);
    this.currentScreen.replace([currScreen]);
    // set next button text
    if (this.screenCounter > 1) {
      let nextScrNumber = this.currentScreenNumber + 1;
      let nextScr = this.selectedInputScreens.find((screen) => screen.screenNumber === nextScrNumber);
      this.currentScreen.nextButtonText = nextScr.category;
    }
  }

  @action nextScreenNumber() {
    if (this.currentScreenNumber === this.screenCounter) {
      let currScreen = this.selectedInputScreens.find((screen) => screen.screenNumber === this.currentScreenNumber);
      this.currentScreen.replace([currScreen]);
    }
    this.currentScreenNumber = this.currentScreenNumber + 1;

    // update the screen that will be showing
    let currScreen = this.selectedInputScreens.find((screen) => screen.screenNumber === this.currentScreenNumber);
    this.currentScreen.replace([currScreen]);

    // update the text on the next button
    let nextScrNumber = this.currentScreenNumber + 1;
    let nextScr = this.selectedInputScreens.find((screen) => screen.screenNumber === nextScrNumber);

    this.currentScreen.nextButtonText = nextScr.category;
  }

  // @action prevScreenNumber() {
  //not complete
  //   this.currentScreenNumber = this.currentScreenNumber - 1;
  //   let currScreen = this.selectedInputScreens.find((screen) => screen.screenNumber === this.currentScreenNumber);
  //   this.currentScreen.replace([currScreen]);

  // }

  @action deleteSelectedInputScreen(category) {
    console.log('category to be deleted', category);
    var filteredScreens = this.selectedInputScreens.filter((step) => step.category !== category);
    console.log('filteredScreens', filteredScreens);
    this.selectedInputScreens.replace(filteredScreens);
    this.screenCounter = this.screenCounter - 1;
    console.log('wizardStep after delete', this.selectedInputScreens);
  }
}

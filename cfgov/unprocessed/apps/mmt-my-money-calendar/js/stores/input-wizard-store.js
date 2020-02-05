import { observable, action, computed, toJS } from 'mobx';

export default class InputWizardStore {
  // an array of all the screens that the user has selected
  @observable selectedInputScreens = [];

  // a single element array that holds an object of the current screen
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
    console.log('addSelectedInputScreen');
    console.log('newScreen', newScreen);

    this.screenCounter = this.screenCounter + 1;
    newScreen.screenNumber = this.screenCounter;
    newScreen.screenNumber = this.screenCounter;
    this.selectedInputScreens.push(newScreen);
    // if ((screenCounter = 1)) {
    //   this.currentScreen.replace([currScreen]);
    // }

    // update the nextButtonText and nextRoutes for each of the screens
    let lastScreen = this.selectedInputScreens.find((screen) => screen.screenNumber === this.screenCounter);
    lastScreen.nextButtonText = 'Summary of expenses';
    lastScreen.nextRoute = `/wizard/step-summary`;
    if (this.screenCounter > 1) {
      for (let i = this.screenCounter; i > 1; i--) {
        console.log('inside loop to set next route');
        let currScreen = this.selectedInputScreens.find((screen) => screen.screenNumber === i);
        console.log('currScreen', toJS(currScreen));
        let prevScreen = this.selectedInputScreens.find((screen) => screen.screenNumber === i - 1);
        console.log('prevScreen', toJS(prevScreen));
        prevScreen.nextButtonText = currScreen.category;
        prevScreen.nextRoute = `/wizard/category-input-screen`;
      }
    }

    // update the prevButtonText and prevRoutes for each of the screens
    let firstScreen = this.selectedInputScreens.find((screen) => screen.screenNumber === 1);
    firstScreen.prevButtonText = 'Expense selections';
    firstScreen.prevRoute = `/wizard/category-selection-screen`;
    console.log('what is the first screen: should have /wizard/category-selection', toJS(firstScreen));
    if (this.screenCounter > 1) {
      for (let i = 1; i < this.screenCounter; i++) {
        let currScreen = this.selectedInputScreens.find((screen) => screen.screenNumber === i);
        let nextScreen = this.selectedInputScreens.find((screen) => screen.screenNumber === i + 1);
        nextScreen.prevButtonText = currScreen.category;
      }
    }

    console.log('all screens, check routes and text', toJS(this.selectedInputScreens));
  }

  @action setCurrentScreen() {
    console.log('made it to setCurrentScreen');
    let currScreen = this.selectedInputScreens.find((screen) => screen.screenNumber === this.currentScreenNumber);
    console.log('currScreen', toJS(currScreen));
    this.currentScreen.replace([currScreen]);
    console.log('after replacementcurrScreen', toJS(currScreen));
    // set next button text
    if (this.screenCounter > 1) {
      let nextScrNumber = this.currentScreenNumber + 1;
      let nextScr = this.selectedInputScreens.find((screen) => screen.screenNumber === nextScrNumber);
      this.currentScreen.nextButtonText = nextScr.category;
    }
  }

  @action nextScreenNumber() {
    console.log('what is the screencounter', this.screenCounter);
    console.log('all scrrens looking for next screen', toJS(this.selectedInputScreens));
    // get the last screen and give it a route of /wizard/summary-screen
    let lastScreen = this.selectedInputScreens.find((screen) => screen.screenNumber === this.screenCounter);
    console.log('what is the last screen', toJS(lastScreen));

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
    var filteredScreens = this.selectedInputScreens.filter((step) => step.category !== category);
    this.selectedInputScreens.replace(filteredScreens);
    this.screenCounter = this.screenCounter - 1;
  }
}

import { observable, action, computed, toJS } from 'mobx';
import { CategorySelectionScreenDetails, StepSummaryDetails } from '../lib/step-details';

export default class InputWizardStore {
  // two arrays with details of step screens
  @observable stepSelectionScreens = CategorySelectionScreenDetails;
  @observable stepSummaryScreens = StepSummaryDetails;
  @observable currentSummaryStepNumber = 3001;

  // an array of all the screens that the user has selected
  @observable selectedInputScreens = [];
  @observable totalScreensSelected = 0;

  // a single element array that holds an object of the current screen
  @observable currentScreen = [];
  @observable currentScreenNumber = 1;

  // observables for step screens
  @observable stepCounter = 3;
  @observable currentStepNumber = 1;
  @observable currentStepScreen = {};

  // observables for category screens
  @observable nextScreen = [];
  @observable prevScreen = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @action addSelectedInputScreen(newScreen) {
    //add the new screen to the selectedInputScreens array
    console.log('addSelectedInputScreen');
    console.log('newScreen', newScreen);

    this.totalScreensSelected = this.totalScreensSelected + 1;
    newScreen.screenNumber = this.totalScreensSelected;
    newScreen.screenNumber = this.totalScreensSelected;
    this.selectedInputScreens.push(newScreen);

    // update the nextButtonText and nextRoutes for each of the screens
    let lastScreen = this.selectedInputScreens.find((screen) => screen.screenNumber === this.totalScreensSelected);
    lastScreen.nextButtonText = 'Summary of expenses';
    lastScreen.nextRoute = `/wizard/step-summary`;
    if (this.totalScreensSelected > 1) {
      for (let i = this.totalScreensSelected; i > 1; i--) {
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
    if (this.totalScreensSelected > 1) {
      for (let i = 1; i < this.totalScreensSelected; i++) {
        let currScreen = this.selectedInputScreens.find((screen) => screen.screenNumber === i);
        let nextScreen = this.selectedInputScreens.find((screen) => screen.screenNumber === i + 1);
        nextScreen.prevButtonText = currScreen.category;
      }
    }

    console.log('all screens, check routes and text', toJS(this.selectedInputScreens));
  }

  @action setCurrentScreen() {
    this.totalScreensSelected = this.totalScreensSelected + 1;
    let currStepScreen = this.stepSummaryScreens.find(
      (stepScreen) => stepScreen.screenNumber === this.currentSummaryStepNumber
    );

    currStepScreen.screenNumber = this.totalScreensSelected;
    currStepScreen.screenNumber = this.totalScreensSelected;
    this.selectedInputScreens.push(currStepScreen);

    if (this.totalScreensSelected) {
      let currScreen = this.selectedInputScreens.find((screen) => screen.screenNumber === this.currentScreenNumber);
      this.currentScreen.replace([currScreen]);
      // set next button text

      if (this.totalScreensSelected > 1) {
        if (this.currentScreenNumber + 1) {
          let nextScrNumber = this.currentScreenNumber + 1;
          let nextScr = this.selectedInputScreens.find((screen) => screen.screenNumber === nextScrNumber);
          this.currentScreen.nextButtonText = nextScr.category;
        } else {
          this.currentScreen.nextButtonText = 'lets go to the summary for expenses';
        }
      } else {
        let nextScrNumber = 1001;
        let nextScr = this.stepSelectionScreens.find((screen) => screen.screenNumber === nextScrNumber);
        this.currentScreen.nextButtonText = 'lets go to the summery....asdfasdf';
      }
      console.log('what is the button text', this.currentScreen.nextButtonText);
    }
  }

  @action setNextScreen() {
    // get the last screen and give it a route of /wizard/summary-screen
    if (this.totalScreensSelected) {
      this.currentScreenNumber = this.currentScreenNumber + 1;
      // let lastScreen = this.selectedInputScreens.find((screen) => screen.screenNumber === this.totalScreensSelected);
      console.log('this.currentScreenNumber', this.currentScreenNumber);
      console.log('this.totalScreensSelected', this.totalScreensSelected);
      if (this.currentScreenNumber === this.totalScreensSelected) {
        let currScreen = this.selectedInputScreens.find((screen) => screen.screenNumber === this.currentScreenNumber);
        this.currentScreen.replace([currScreen]);
        console.log('this.currentScreen', toJS(this.currentScreen[0]));
      } else {
        // update the screen that will be showing
        let currScreen = this.selectedInputScreens.find((screen) => screen.screenNumber === this.currentScreenNumber);
        this.currentScreen.replace([currScreen]);

        // update the text on the next button
        let nextScrNumber = this.currentScreenNumber + 1;
        let nextScr = this.selectedInputScreens.find((screen) => screen.screenNumber === nextScrNumber);
        this.currentScreen.nextButtonText = nextScr.category;
      }
    }
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
    this.totalScreensSelected = this.totalScreensSelected - 1;
  }
}

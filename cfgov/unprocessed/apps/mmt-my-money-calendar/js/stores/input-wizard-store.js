import { observable, action, computed, toJS } from 'mobx';
import { CategorySelectionScreenDetails, StepSummaryDetails } from '../lib/step-details';

export default class InputWizardStore {
  // two arrays with details of step screens
  @observable stepSelectionScreens = CategorySelectionScreenDetails;
  @observable stepSummaryScreens = StepSummaryDetails;
  @observable currentStepCategory = '';
  @observable currentSummaryStepNumber = 3001;

  // an array of all the screens that the user has selected
  @observable selectedInputScreens = [];
  // @observable totalScreensSelected = 0;

  // a single element array that holds an object of the current screen
  @observable currentScreen = [];
  @observable currentScreenNumber = 0;

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

  @action setCurrentStep(step) {
    console.log('made it to setCurrentStep');
    this.currentStepCategory = step;
    console.log('setCurrentStep', this.currentStepCategory);
  }

  @action addSelectedInputScreen(newScreen) {
    //add the new screen to the selectedInputScreens array

    newScreen.screenNumber = this.selectedInputScreens.length;
    this.selectedInputScreens.push(newScreen);

    // update the nextButtonText and nextRoutes for each of the screens
    let lastScreen = this.selectedInputScreens[this.selectedInputScreens.length - 1];
    lastScreen.nextButtonText = `${this.currentStepCategory} Summary`;
    lastScreen.nextRoute = `/wizard/step-summary-screen`;

    if (this.selectedInputScreens.length > 1) {
      for (let i = this.selectedInputScreens.length; i > 1; i--) {
        let thisScreen = this.selectedInputScreens[this.selectedInputScreens.length - 1];
        let prevScreen = this.selectedInputScreens[this.selectedInputScreens.length - 2];
        prevScreen.nextButtonText = thisScreen.category;
        prevScreen.nextRoute = `/wizard/category-input-screen`;
      }
      let firstScreen = this.selectedInputScreens[0];
      firstScreen.prevButtonText = `Select ${this.currentStepCategory} options`;
      firstScreen.prevRoute = `/wizard/category-selection-screen`;

      for (let i = 0; i < this.selectedInputScreens.length - 1; i++) {
        let thisScreen = this.selectedInputScreens[i];
        let nextScreen = this.selectedInputScreens[i + 1];

        nextScreen.prevButtonText = thisScreen.category;
        nextScreen.prevRoute = `/wizard/category-input-screen`;
      }
    } else {
      console.log('the first screen has been added');
    }
    console.log('all screens after add ', toJS(this.selectedInputScreens));
  }

  @action setCurrentScreen() {
    // get the last screen and give it a route of /wizard/summary-screen
    if (this.selectedInputScreens.length) {
      this.currentScreenNumber = this.currentScreenNumber + 1;
      console.log('what is the currentScreenNumber.  should be 1', this.currentScreenNumber);
      // let lastScreen = this.selectedInputScreens.find((screen) => screen.screenNumber === this.selectedInputScreens.length);

      // if this is the last screen
      if (this.currentScreenNumber === this.selectedInputScreens.length) {
        let currScreen = this.selectedInputScreens[this.currentScreenNumber - 1];
        this.currentScreen.replace([currScreen]);

        // there is more than 1 screen
      } else if (this.selectedInputScreens.length > 1) {
        // update the screen that will be showing
        let currScreen = this.selectedInputScreens[this.currentScreenNumber - 1];

        this.currentScreen.replace([currScreen]);

        // update the text on the next button
        let nextScrNumber = this.currentScreenNumber + 1;
        let nextScr = this.selectedInputScreens.find((screen) => screen.screenNumber === nextScrNumber);
        this.currentScreen.nextButtonText = nextScr.category;
      }
    }
  }

  @action deleteSelectedInputScreen(category) {
    // first, complete the deletion
    this.selectedInputScreens.length = this.selectedInputScreens.length - 1;
    var screenForDeletion = this.selectedInputScreens.filter((step) => step.category !== category);
    this.selectedInputScreens.replace(screenForDeletion);
    console.log('this.selectedInputScreens.length', this.selectedInputScreens.length);
    console.log('this.selectedInputScreens.length', this.selectedInputScreens.length);

    // update the order the screens
    for (let i = 1; i < this.selectedInputScreens.length; i++) this.selectedInputScreens[i].screenNumber = i + 1;

    // update tne nextButtonText, nextRoutes, prevButtonText and prevRoutes for each of the screens
    console.log('all screens after a delet but before routing updatee', toJS(this.selectedInputScreens));
    // update the first and last screens
    let lastScreen = this.selectedInputScreens.find(
      (screen) => screen.screenNumber === this.selectedInputScreens.length
    );
    lastScreen.nextButtonText = 'Summary of expenses';
    lastScreen.nextRoute = `/wizard/step-summary`;
    console.log('lastScreen', toJS(lastScreen));
    console.log(this.selectedInputScreens.length);

    if (this.selectedInputScreens.length > 1) {
      console.log('made it inside if');

      for (let i = this.selectedInputScreens.length - 1; i > 1; i--) {
        let currScreen = this.selectedInputScreens[i];
        console.log('currScr', toJS(currScreen));
        let prevScreen = this.selectedInputScreens[i - 1];
        console.log('currScr.category', currScreen.category);
        console.log('prevScreen.nextButtonText', prevScreen.nextButtonText);
        prevScreen.nextButtonText = currScreen.category;
        prevScreen.nextRoute = `/wizard/category-input-screen`;
      }

      let firstScreen = this.selectedInputScreens.find((screen) => screen.screenNumber === 1);
      firstScreen.prevButtonText = 'Expense selections';
      firstScreen.prevRoute = `/wizard/category-selection-screen`;

      for (let i = 1; i < this.selectedInputScreens.length - 1; i++) {
        let currScreen = this.selectedInputScreens[i];
        let nextScreen = this.selectedInputScreens[i + 1];
        nextScreen.prevButtonText = currScreen.category;
        nextScreen.prevRoute = `/wizard/category-input-screen`;
      }
      console.log('all screens after a delete', toJS(this.selectedInputScreens));
    }
  }
}

import { observable, action, computed, toJS } from 'mobx';

export default class InputWizardStore {
  @observable selectedInputScreens = [];

  @observable currentScreen = [
    {
      screenNumber: 0,
      nextScreenNumber: 0,
      prevScreenNumber: 0,
      nextButtonText: ``,
      prevButtonText: ``,
      step: '',
      category: '',
      pageImage: '',
      subtitle: '',
      description: '',
      frequencyInputs: ``,
      nextPaymentDueDateLabel: '',
      nextPaymentAmountLabel: '',
    },
  ];
  @observable nextScreen = [];
  @observable prevScreen = [];
  @observable screenCounter = 0;

  @observable currentScreenNumber = 1;

  constructor(rootStore) {
    this.rootStore = rootStore;
  }

  @action addSelectedInputScreen(newScreen) {
    this.screenCounter = this.screenCounter + 1;
    newScreen.screenNumber = this.screenCounter;
    newScreen.screenNumber = this.screenCounter;
    this.selectedInputScreens.push(newScreen);
  }

  @action setCurrentScreen() {
    let currScreen = this.selectedInputScreens.find((screen) => screen.screenNumber === this.currentScreenNumber);
    this.currentScreen.replace([currScreen]);
  }

  @action nextScreenNumber() {
    this.currentScreenNumber = this.currentScreenNumber + 1;
    // update the screen that will be showing
    let currScreen = this.selectedInputScreens.find((screen) => screen.screenNumber === this.currentScreenNumber);
    this.currentScreen.replace([currScreen]);

    // update the text on the next button
    let nextScrNumber = this.currentScreenNumber + 1;
    let nextScr = this.selectedInputScreens.find((screen) => screen.screenNumber === nextScrNumber);
    this.currentScreen.nextButtonText = nextScr.nextButtonText;
    console.log('this.currentScreen.nextButtonText', this.currentScreen.nextButtonText);

    // update the text on the prev button
    let prevScrNumber = this.currentScreenNumber - 1;
    let prevScr = this.selectedInputScreens.find((screen) => screen.screenNumber === prevScrNumber);
    this.currentScreen.prevButtonText = nextScr.prevButtonText;
  }

  @action prevScreenNumber() {
    this.currentScreenNumber = this.currentScreenNumber - 1;
    let currScreen = this.selectedInputScreens.find((screen) => screen.screenNumber === this.currentScreenNumber);
    this.currentScreen.replace([currScreen]);
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

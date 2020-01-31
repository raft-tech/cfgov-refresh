// import { observable } from 'mobx';

// export default class WizardStepModel {
//   store;
//   @observable category;
//   @observable pageTitle;
//   @observable pageImage;
//   @observable subtitle;
//   @observable description;
//   @observable nextStepPath;
//   @observable prevStepPath;
//   @observable progress = 0;
//   @observable completed = false;

//   constructor(store, id, category, pageTitle, pageImage, subtitle, description, nextStepPath, prevStepPath, progress) {
//     this.store = store;
//     this.category = category;
//     this.pageTitle = pageTitle;
//     this.pageImage = pageImage;
//     this.subtitle = subtitle;
//     this.description = description;
//     this.nextStepPath = nextStepPath;
//     this.prevStepPath = prevStepPath;
//     this.progress = progress;
//   }

//   destroy() {
//     this.store.wizardSteps.remove(this);
//   }

//   setCategory(category) {
//     this.category = category;
//   }

//   toJS() {
//     return {

//       category: this.category,
//       pageTitle: this.pageTitle,
//       pageImage: this.pageImage,
//       subtitle: this.subtitle,
//       description: this.description,
//       nextStepPath: this.nextStepPath,
//       prevStepPath: this.prevStepPath,
//       progress: this.progress,
//     };
//   }

//   static fromJS(store, object) {
//     return new WizardStepModel(
//       store,

//       object.category,
//       object.pageTitle,
//       object.pageImage,
//       object.subtitle,
//       object.description,
//       object.nextStepPath,
//       object.prevStepPath,
//       object.progress
//     );
//   }
// }

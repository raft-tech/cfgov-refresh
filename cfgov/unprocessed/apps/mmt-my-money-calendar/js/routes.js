import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/home';
// import Wizard from './views/wizard';
// import Summary from './views/summary';
import CategorySelectionScreen from './views/wizard/category-selection-screen';
import WizardStepScreen from './views/wizard/wizard-step-screen';

const Routes = () => (
  <Router basename="/mmt-my-money-calendar">
    <div className="app">
      <Switch>
        <Route path="/wizard/category-selection-screen">
          <CategorySelectionScreen />
        </Route>
        <Route path="/wizard/wizard-step-screen">
          <WizardStepScreen />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>

        {/* <Route path="/wizard">
          <Wizard />
        </Route>

        <Route path="/summary">
          <Summary />
        </Route> */}
      </Switch>
    </div>
  </Router>
);

export default Routes;

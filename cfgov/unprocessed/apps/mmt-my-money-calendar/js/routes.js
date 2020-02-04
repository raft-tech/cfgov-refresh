import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { observer } from 'mobx-react';
import Home from './views/home';
import StepSummaryScreen from './views/wizard/step-summary-screen';
import CategorySelectionScreen from './views/wizard/category-selection-screen';
import CategoryInputScreen from './views/wizard/category-input-screen';
import { useStore } from './stores';

function Routes() {
  const store = useStore();
  const { InputWizardStore } = store;
  return (
    <Router basename="/mmt-my-money-calendar">
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/wizard/category-selection-screen">
            <CategorySelectionScreen screen={InputWizardStore.cat} />
          </Route>

          <Route path="/wizard/category-input-screen">
            <CategoryInputScreen />
          </Route>
          <Route path="/wizard/step-summary">
            <StepSummaryScreen />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Routes;

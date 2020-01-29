import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/home';
// import Wizard from './views/wizard';
// import Summary from './views/summary';
// import CategoryInputScreen from './views/wizard/category-input-screen';
// import CategorySelectionScreen from './views/wizard/category-selection-screen';

const Routes = () => (
  <Router basename="/mmt-my-money-calendar">
    <div className="app">
      <Switch>
        {/* <Route path="/wizard/category-input-screen">
          <CategoryInputScreen />
        </Route>
        <Route path="/wizard/category-selection-screen">
          <CategorySelectionScreen />
        </Route> */}
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

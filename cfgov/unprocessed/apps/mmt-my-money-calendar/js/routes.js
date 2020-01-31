import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/home';
import CategorySelectionScreen from './views/wizard/category-selection-screen';
import CategoryInputScreen from './views/wizard/category-input-screen';

const Routes = () => (
  <Router basename="/mmt-my-money-calendar">
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/wizard/category-selection-screen">
          <CategorySelectionScreen />
        </Route>
        <Route path="/wizard/category-input-screen">
          <CategoryInputScreen />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default Routes;

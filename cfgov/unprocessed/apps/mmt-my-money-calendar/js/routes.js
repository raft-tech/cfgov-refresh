import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './views/home';
import Calendar from './views/calendar/index';
import AddEvent from './views/calendar/add';
import BottomNav from './components/bottom-nav';
import FixItStrategies from './views/fix-it-strategies';

const Routes = () => (
  <Router basename="/mmt-my-money-calendar">
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/calendar">
          <Calendar />
        </Route>

        <Route path="/calendar/add">
          <AddEvent />
        </Route>

        <Route path="/fix-it-strategies">
          <FixItStrategies />
        </Route>
      </Switch>

      <BottomNav />
    </div>
  </Router>
);

export default Routes;

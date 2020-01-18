import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/home";
import StartingBalance from "./views/wizard/starting-balance-step";
import IncomeStep from "./views/wizard/income-step";
import ExpensesStep from "./views/wizard/expenses-step";
import Summary from "./views/summary";

const Routes = () => (
  <Router basename="/mmt-my-money-calendar">
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/wizard/starting-balance-step">
          <StartingBalance />
        </Route>

        <Route path="/wizard/income-step">
          <IncomeStep />
        </Route>

        <Route path="/wizard/expenses-step">
          <ExpensesStep />
        </Route>

        <Route path="/summary">
          <Summary />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default Routes;

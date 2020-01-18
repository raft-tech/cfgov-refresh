import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/home";
import StartingBalance from "./views/wizard/starting-balance-step";
import StartingBalance25 from "./views/wizard/starting-balance-step25";
import StartingBalance50 from "./views/wizard/starting-balance-step50";
import StartingBalance75 from "./views/wizard/starting-balance-step75";
import IncomeStep from "./views/wizard/income-step";
import IncomeStep25 from "./views/wizard/income-step25";
import IncomeStep50 from "./views/wizard/income-step50";
import IncomeStep75 from "./views/wizard/income-step75";
import ExpensesStep from "./views/wizard/expenses-step";
import ExpensesStep25 from "./views/wizard/expenses-step25";
import ExpensesStep50 from "./views/wizard/expenses-step50";
import ExpensesStep75 from "./views/wizard/expenses-step75";
import Summary from "./views/summary";

const Routes = () => (
  <Router basename="/mmt-my-money-calendar">
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route
          exact
          path="/starting-balance-step"
          component={StartingBalance}
        />
        <Route
          exact
          path="/starting-balance-step25"
          component={StartingBalance25}
        />
        <Route
          exact
          path="/starting-balance-step50"
          component={StartingBalance50}
        />
        <Route
          exact
          path="/starting-balance-step75"
          component={StartingBalance75}
        />
        <Route exact path="/income-step" component={IncomeStep} />
        <Route exact path="/income-step25" component={IncomeStep25} />
        <Route exact path="/income-step50" component={IncomeStep50} />
        <Route exact path="/income-step75" component={IncomeStep75} />

        <Route exact path="/expenses-step" component={ExpensesStep} />
        <Route exact path="/expenses-step25" component={ExpensesStep25} />
        <Route exact path="/expenses-step50" component={ExpensesStep50} />
        <Route exact path="/expenses-step75" component={ExpensesStep75} />
        <Route exact path="/summary" component={Summary} />
      </Switch>
    </div>
  </Router>
);

export default Routes;

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/home";
import Tool from "./views/tool";
import TotalPurchaseAmount from "./views/input/total-purchase-amount";
import DownPayment from "./views/input/down-payment";
import TotalPurchaseAmount from "./views/input/total-purchase-amount";
import TotalPurchaseAmount from "./views/input/total-purchase-amount";

const Routes = () => (
  <Router basename="/mmt-cost-of-credit-tool">
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/total-purchase-amount">
          <TotalPurchaseAmount />
        </Route>
        <Route path="/down-payment">
          <DownPayment />
        </Route>
        <Route path="/credit-apr">
          <CreditApr />
        </Route>
        <Route path="/monthly-payment">
          <MonthlyPayment />
        </Route>
        <Route path="/tool">
          <Tool />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default Routes;

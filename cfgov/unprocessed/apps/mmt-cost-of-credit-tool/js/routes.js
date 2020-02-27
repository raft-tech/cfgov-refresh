import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/home";
import TotalPurchaseAmount from "./views/input/total-purchase-amount";
import DownPayment from "./views/input/down-payment";
import CreditApr from "./views/input/credit-apr";
import MonthlyPayment from "./views/input/monthly-payment";
import DealsAndPromotions from "./views/input/deals-and-promotions";

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
        <Route path="/deals-and-promotions">
          <DealsAndPromotions />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default Routes;

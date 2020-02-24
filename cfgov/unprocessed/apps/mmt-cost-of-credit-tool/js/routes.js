import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/home";
import Tool from "./views/tool";

const Routes = () => (
  <Router basename="/mmt-cost-of-credit-tool">
    <div className="app">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/tool">
          <Tool />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default Routes;

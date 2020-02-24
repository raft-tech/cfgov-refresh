import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/home";
import Tool from "./views/tool";

const Routes = () => (
  <Router>
    <div className="app">
      <Switch>
        <Route path="/">
          <Home />
        </Route>

        <Route exact path="/tool/">
          <Tool />
        </Route>
      </Switch>
    </div>
  </Router>
);

export default Routes;

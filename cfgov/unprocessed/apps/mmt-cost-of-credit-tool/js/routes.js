import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "../js/lib/scroll-to-top";

import Home from "../js/views/home";
import ToolView from "../js/views/wizard/tool-view";

export default function Routes() {
  return (
    <Router basename="/mmt-cost-of-credit-tool">
      <ScrollToTop>
        <div className="app">
          <AppContext.Provider value={contextObject}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/tool" exact component={ToolView} />
            </Switch>
          </AppContext.Provider>
        </div>
      </ScrollToTop>
    </Router>
  );
}

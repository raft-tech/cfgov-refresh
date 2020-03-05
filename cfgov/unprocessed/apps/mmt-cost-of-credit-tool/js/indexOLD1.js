import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./store";
// import * as idb from "idb";
// import { Workbox } from "workbox-window";
// import { DateTime, Info } from "luxon";

import Routes from "./routes";

render(
  <Provider store={store}>
    <section className="mmt-cost-of-credit-tool">
      <Routes />
    </section>
  </Provider>,
  document.querySelector("#mmt-cost-of-credit-tool")
);

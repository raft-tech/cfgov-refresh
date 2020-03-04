// import * as idb from "idb";
import { render } from "react-dom";
// import { Workbox } from "workbox-window";
// import { DateTime, Info } from "luxon";

import Routes from "./routes";

const App = () => (
  <section className="mmt-cost-of-credit-tool">
    <Routes />
  </section>
);

render(<App />, document.querySelector("#mmt-cost-of-credit-tool"));

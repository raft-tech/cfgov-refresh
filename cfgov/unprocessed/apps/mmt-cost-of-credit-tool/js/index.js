import * as idb from "idb";
import { render } from "react-dom";
import { configure as configureMobX } from "mobx";
import Routes from "./routes";

configureMobX({ enforceActions: "observed" });

const App = () => (
  <section className="mmt-cost-of-credit-tool">
    <Routes />
  </section>
);

window.idb = idb;

render(<App />, document.querySelector("#mmt-cost-of-credit-tool"));

if (process.env.NODE_ENV === "production" && "serviceWorker" in navigator) {
  const wb = new Workbox("/mmt-cost-of-credit-tool/service-worker.js", {
    scope: "/mmt-cost-of-credit-tool"
  });

  wb.addEventListener("activated", evt => {
    if (!evt.isUpdate) {
      console.info("COCT service worker activated for the first time");
    } else {
      console.info("COCT service worker updated");
    }
  });

  wb.register();
}

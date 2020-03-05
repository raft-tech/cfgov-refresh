

import store from "./store";

const render = () => {
    ReactDOM.render(
      <Tool todos={store.getState().todos} />,
      document.querySelector("#mmt-cost-of-credit-tool")
    );
}

store.subscribe(render);
render();


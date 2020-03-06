import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import Routes from './routes';

render(
  <Provider store={store}>
    <section className="mmt-cost-of-credit-tool">
      <Routes />
    </section>
  </Provider>,
  document.querySelector('#mmt-cost-of-credit-tool')
);

// store.subscribe(render);
// render();

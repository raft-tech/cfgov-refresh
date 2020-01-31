// import * as idb from 'idb';
import { render } from 'react-dom';

import { configure as configureMobX } from 'mobx';

import { StoreProvider } from './stores';
import Routes from './routes';

configureMobX({ enforceActions: 'observed' });

const App = () => (
  <StoreProvider>
    <section className="my-money-calendar">
      <Routes />
    </section>
  </StoreProvider>
);

render(<App />, document.querySelector('#mmt-my-money-calendar'));

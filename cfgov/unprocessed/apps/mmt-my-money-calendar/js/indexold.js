// import * as idb from 'idb';
// import { render } from 'react-dom';

// import { configure as configureMobX } from 'mobx';
// import { Workbox } from 'workbox-window';
// import { StoreProvider } from './stores';
// import Routes from './routes';
// import CashFlowEvent from './stores/models/cash-flow-event';
// import UiEvent from './stores/models/ui-event';

// configureMobX({ enforceActions: 'observed' });

// const App = () => (
//   <StoreProvider>
//     <section className="my-money-calendar">
//       <Routes />
//     </section>
//   </StoreProvider>
// );

// window.idb = idb;
// window.CashFlowEvent = CashFlowEvent;

// window.idb = idb;
// window.UiEvent = UiEvent;

// window.seedTestData = async function seedTestData() {
//   const { seedData } = await import(/* webpackChunkName: "seed-data.js" */ './seed-data.js');
//   console.info('Imported seed data script');
//   const results = await seedData();
//   console.info('Seeding complete %O', results);
// };

// render(<App />, document.querySelector('#mmt-my-money-calendar'));

// if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
//   const wb = new Workbox('/mmt-my-money-calendar/service-worker.js', { scope: '/mmt-my-money-calendar' });

//   wb.addEventListener('activated', (evt) => {
//     if (!evt.isUpdate) {
//       console.info('MMC service worker activated for the first time');
//     } else {
//       console.info('MMC service worker updated');
//     }
//   });

//   wb.register();
// }

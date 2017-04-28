import Home from 'universal/components/Home/Home.js';
import Store from 'universal/modules/store/containers/Store/StoreContainer.js';
// import StoreTest from 'universal/modules/store/containers/Store/StoreTest.js';

// export const storeRoutes = [
//   {
//     path: '/store/test/:testId?',
//     component: StoreTest,
//   }
// ]

export default [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/store/:name',
    component: Store,
    // childRoutes: storeRoutes
  },
];
import Home from 'universal/components/Home/Home.js';
// import Store from 'universal/modules/store/containers/Store/Store.js';
import LoginContainer from 'universal/modules/store/containers/Login/LoginContainer.js';
import StoreContainer from 'universal/modules/store/containers/Store/StoreContainer.js';
import StoreItemContainer from 'universal/modules/store/containers/Store/StoreItemContainer.js';
// import StoreTest from 'universal/modules/store/containers/Store/StoreTest.js';

const storeRoutes = [
  {
    path: '/store/:name/login',
    component: LoginContainer,
  },
  {
    path: '/store/:name/:type/:id',
    component: StoreItemContainer,
  }
];

export default [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/store/:name',
    component: StoreContainer,
    childRoutes: storeRoutes
  },
];
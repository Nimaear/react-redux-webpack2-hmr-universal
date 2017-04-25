import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';

import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware
} from 'react-router-redux';

import apiMiddleware from '../../universal/lib/apiMiddleware';
import * as Reducers from './reducers/index.js';

export default (history) => {
  const middlewares = [ routerMiddleware(history), apiMiddleware];

  const store = createStore(combineReducers({
    ...Reducers,
    router: routerReducer
  }), applyMiddleware(...middlewares));


  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
     module.hot.accept('./reducers', () => {
       const nextReducers = require('./reducers/index.js');
       const rootReducer = combineReducers({
         ...nextReducers,
         router: routerReducer
       });

       store.replaceReducer(rootReducer);
     });
   }


  return store;
}

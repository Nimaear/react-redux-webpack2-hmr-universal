import {
  createStore,
  combineReducers,
  applyMiddleware
} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import {
  ConnectedRouter,
  routerReducer,
  routerMiddleware
} from 'react-router-redux';
import thunk from 'redux-thunk';

import apiMiddleware from '../../universal/lib/apiMiddleware';
import * as Reducers from './reducers/index.js';

export default (history, initialState = {}) => {
  const middlewares = [ routerMiddleware(history), apiMiddleware, thunk];

  const store = createStore(combineReducers({
    ...Reducers,
    router: routerReducer
  }), initialState, composeWithDevTools(applyMiddleware(...middlewares)));


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

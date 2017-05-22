import React from 'react';
import {render} from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import api from 'universal/lib/api';

// Components
import App from './containers/AppContainer.js';

// Redux
import { Provider } from 'react-redux';
import createStore from '../universal/redux/createStore.js';
import createHistory from 'history/createBrowserHistory';


const history = createHistory();
const initialState = window.__INITIAL_STATE__;
const store = createStore(history, initialState);

if (initialState.auth && initialState.auth.sessionId) {
  api.setToken(initialState.auth.sessionId);
}

const rootEl = document.getElementById('root')
const renderApp = (Component) => {
    render(
      <AppContainer>
        <Provider store={store}>
          <Component history={history} />
        </Provider>
      </AppContainer>,
      rootEl
    );
}

renderApp(App);

if (module.hot) {
  module.hot.accept('./containers/AppContainer.js', () => {
    const nextApp = require('./containers/AppContainer.js');
    renderApp(nextApp);
  });
}

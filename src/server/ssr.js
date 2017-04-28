// Node Modules
import fs from 'fs';
import {basename, join} from 'path';
import { matchPath } from 'react-router-dom';
import api from 'universal/lib/api';
// Libraries
import React from 'react';
import {renderToString} from 'react-dom/server';

// Redux
// import {push} from 'react-router-redux';
import createStore from 'universal/redux/createStore.js';
import createHistory from 'history/createMemoryHistory'
import routes from '../universal/routes/static';
import {
  status
} from 'universal/redux/reducers/auth';
// Components
import Html from './Html.js';


function fetchData(dispatch, fetches, routes, url) {
  routes.some(route => {
    const match = matchPath(url, route);

    if (match) {
      if (route.childRoutes) {
        fetchData(dispatch, fetches, route.childRoutes, url);
      }
      const {
        component
      } = route;
      if (component && component.fetchData) {
        component.fetchData.forEach(fetch => {
          if (typeof fetch === 'function') {
            fetches.push(dispatch(fetch(match.params || {})));
          }
        });
      }
    }
  });
}

const fetchComponentData = (dispatch, routes, url) => {
  const fetches = [];
  fetchData(dispatch, fetches, routes, url);
  fetches.push(dispatch(status()));
  return fetches.reverse();
}


function renderApp(req, res, store, assets) {
  const context = {};
  const {
    url,
    session
  } = req;

  if (session) {
    api.setSession(session);
    if (session.token) {
      api.setToken(session.token);
    }
  }
  const promises = fetchComponentData(store.dispatch, routes, url);

  Promise.all(promises).then(data => {
    const html = renderToString(
      <Html
        title='💥'
        store={store}
        url={url}
        context={context}
        assets={assets} />
    );
    // do something w/ the data so the client
    // can access it then render the app
    res.send('<!DOCTYPE html>'+html);
  }).catch(res => {
    res.send('<!DOCTYPE html>'+'error');
  })
}

export const renderPage = function (req, res) {
  const history = createHistory( );
  const store  = createStore(history);

  const assets = require('../../build/assets.json');

  assets.manifest.text = fs.readFileSync(
    join(__dirname, '..', '..', 'build', basename(assets.manifest.js)),
    'utf-8'
  );
  renderApp(req, res, store, assets);
};

export const renderDevPage = function (req, res) {
  const history =  createHistory( );
  const store   = createStore(history);
  renderApp(req, res, store);
};

export default renderPage;

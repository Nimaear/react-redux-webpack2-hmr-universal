// Libraries
import React, {Component, PropTypes} from  'react';
import {Route, Redirect} from 'react-router';
let routes
// Routes
// For Development only


// This is used in production for code splitting via `wepback.config.server.js`
//
if (__PRODUCTION__) {
  routes = require('universal/routes/async');
} else {
  routes = require('../routes/static');
}

// Containers
import AppContainer from 'universal/containers/App/AppContainer';
// import PrivateRouteContainer from 'universal/containers/PrivateRoute/PrivateRouteContainer.js';

class Routes extends Component {
  render () {
    const {
      location
    } = this.props;
    return (
      <AppContainer>
        <div>
          {routes.map((route, index) => {
            return <Route key={index} {...route} />
          })}
        </div>
      </AppContainer>
    );
  }
}

export default Routes;

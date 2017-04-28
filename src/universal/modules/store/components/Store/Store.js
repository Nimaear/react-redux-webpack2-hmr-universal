import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
// import { storeRoutes } from 'universal/routes/static';
// import {Route, Redirect} from 'react-router';



class Store extends Component {

  get = () => {
    const {
      fetch,
      name,
    } = this.props;
    fetch({ name });
  };

  clear = () => {
    const {
      clear,
    } = this.props;
    clear()
  };

  render () {
    return (
      <div >
        This is the store

        <button onClick={this.get}>Get store</button>
        <button onClick={this.clear}>Clear store</button>
        <div>
        </div>
      </div>
    )
  }
}

export default Store;

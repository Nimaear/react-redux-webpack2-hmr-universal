import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class Loader extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    return (
      <div>
        ....Loading....
      </div>
    );
  }
}

export default Loader;

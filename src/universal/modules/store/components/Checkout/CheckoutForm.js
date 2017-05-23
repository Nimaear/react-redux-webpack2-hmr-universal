import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import StoreBarContainer from 'universal/modules/store/containers/Store/StoreBarContainer';

class CheckoutForm extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const {
      name
    } = this.props;
    return (
      <div>
        <StoreBarContainer name={name} />
        Checkout
      </div>
    );
  }
}

export default CheckoutForm;

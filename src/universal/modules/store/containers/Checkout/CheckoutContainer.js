import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import { getStore } from 'universal/selectors/store';
import CheckoutForm from 'universal/modules/store/components/Checkout/CheckoutForm.js';

// import * as storeActions from 'universal/modules/store/redux/auth.js';


class LoginContainer extends Component {
  static propTypes = {
    match: PropTypes.object
  }

  render () {
    const { name } = this.props.match.params;
    return (
      <CheckoutForm {...this.props} name={name}/>
    );
  }
}
const mapStateToProps = (state, props) => {
  const { name } = props.match.params;
  const { history } = props;
  const store = getStore(state, name);
  return {
    history,
    name,
    user: state.auth.user,
    theme: store.theme,
  };
};

const mapDispatchToProps = (dispatch, props) => ({
});


export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

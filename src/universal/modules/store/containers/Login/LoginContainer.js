import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

import { getStore } from 'universal/selectors/store';
import LoginForm from 'universal/modules/store/components/Login/LoginForm.js';
import * as authActions from 'universal/redux/reducers/auth';

// import * as storeActions from 'universal/modules/store/redux/auth.js';


class LoginContainer extends Component {
  static propTypes = {
    match: PropTypes.object
  }

  render () {
    const { name } = this.props.match.params;
    return (
      <LoginForm {...this.props} name={name}/>
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
  login: bindActionCreators(authActions.login, dispatch),
  logout: bindActionCreators(authActions.logout, dispatch),
});


export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

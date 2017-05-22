import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TextField from './TextField';
import Button from './Button';
import { translate as _l } from 'oxygen-i18n';

const css = oxygenCss({
  root: {
    width: 378,
    margin: 'auto'
  },
  inputWrapper: {
    padding: 4
  }
});

addTranslations({
  ['en-US']: {
    'Log in': 'Log in',
    'Email': 'Email',
    'Password': 'Password',
    'You are already logged in.': 'You are already logged in.'
  }
});

class LoginForm extends Component {
  static propTypes = {
    user: PropTypes.object,
    name: PropTypes.string,
    login: PropTypes.func,
    logout: PropTypes.func
  };

  state = {
    email: '',
    password: ''
  };

  login = () => {
    const { login } = this.props;
    const {
      email,
      password
    } = this.state;
    login({ identity: email, credential: password });
  };


  logout = () => {
    const { logout } = this.props;
    logout();
  };

  componentWillReceiveProps(nextProps) {
    if (nextProps.user && !this.props.user) {
      const {
        name,
        history,
      } = this.props;
      history.push(`/store/${name}`);
    }
  }

  render() {
    const {
      user
    } = this.props;
    const {
      email,
      password
    } = this.state;
    const canLogin = email != '' && password != '';
    if (user) {
      return (
        <div>
          {_l`You are already logged in.`}
          <button onClick={this.logout}>Log out</button>
        </div>
      )
    }
    return (
      <div className={css.root}>
        <div className={css.inputWrapper}>
          <TextField
            onChange={email => this.setState({ email })}
            value={email}
            placeholder={_l`Email`}
          />
        </div>
        <div className={css.inputWrapper}>
          <TextField
            onChange={password => this.setState({ password })}
            value={password}
            type={'password'}
            placeholder={_l`Password`}
          />
        </div>
        <div className={css.inputWrapper}>
          <Button label={_l`Log in`} disabled={!canLogin} onClick={this.login}/>
        </div>
      </div>
    );
  }
}

export default LoginForm;
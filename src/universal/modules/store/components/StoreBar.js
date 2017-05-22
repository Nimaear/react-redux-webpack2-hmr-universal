import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MenuIcon from 'universal/components/Icons/MenuIcon';
import PencilIcon from 'universal/components/Icons/PencilIcon';
import IconButton from 'cio/lib/Button/IconButton';
import { withRouter } from 'react-router';
import { translate as _l } from 'oxygen-i18n';
import { Typography, fontSize } from 'universal/styles';

const css = oxygenCss({
  root: {
    height: 156,
    display: 'flex',
    '@phone': {
      height: 64
    }
  },
  menuIcon: {
    flexGrow: 0,
    flexShrink: 0,
    width: 312,
    padding: 20,
    boxSizing: 'border-box',
    '@phone': {
      width: 64
    }
  },
  info: {
    flexGrow: 0,
    flexShrink: 0,
    width: 312,
    padding: 20,
    boxSizing: 'border-box',
    textAlign: 'right',
    '@phone': {
      width: 64,
      display: 'none'
    }
  },
  logoContainer: {
    flexGrow: 1,
    textAlign: 'center',
    padding: 20,
    boxSizing: 'border-box',
    cursor: 'pointer'
  },
  logo: {
    maxHeight: 116,
    '@phone': {
      maxWidth: 64
    }
  },
  loginButton: {
    cursor: 'pointer',
    borderRadius: 4,
    background: 'none',
    border: '1px solid #E1E1E1',
    lineHeight: '33px',
    padding: `0 16px`
  },
  alreadyEnrolled: {
    display: 'inline-block',
    padding: '0px 4px',
    fontSize: `${fontSize(-1)}`
  }
});

addTranslations({
  ['en-US']: {
    'Already enrolled?': 'Already enrolled?',
  }
});

class StoreBar extends Component {
  static propTypes = {
    logo : PropTypes.string,
    onClickEdit: PropTypes.func,
    onClickMenu: PropTypes.func,
    user: PropTypes.object,
    canEdit: PropTypes.bool,
    history: PropTypes.object,
    theme: PropTypes.object,
    name: PropTypes.string,
  };

  static contextTypes = {
    router: PropTypes.object
  };

  gotoLogin = () => {
    const { history, name } = this.props;
    history.push(`/store/${name}/login`);
  };

  gotoStore = () => {
    const { history, name } = this.props;
    history.push(`/store/${name}`);
  };

  render() {
    const {
      logo,
      user,
      onClickMenu,
      theme,
      canEdit,
      onClickEdit
    } = this.props;
    return (
      <div className={css.root}>
        <div className={css.menuIcon}>
          {user && <IconButton onClick={onClickMenu}>
            <MenuIcon />
          </IconButton>}
        </div>
        <div className={css.logoContainer} onClick={this.gotoStore}>
          <img className={css.logo} src={logo} />
        </div>
        <div className={css.info}>
          {! user && <div className={css.alreadyEnrolled}>{_l`Already enrolled?`}</div>}
          {!user && <button style={{ color: theme.color }} className={css.loginButton} onClick={this.gotoLogin}>
            Log in
          </button>}
          {user && canEdit && <IconButton onClick={onClickEdit}>
            <PencilIcon />
          </IconButton>}
        </div>
      </div>
    );
  }
}

export default withRouter(StoreBar);

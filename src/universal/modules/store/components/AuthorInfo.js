import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ProfileImage from 'universal/components/ProfileImage';
import { translate as _l } from 'oxygen-i18n';
import { Units } from 'universal/styles';

const css = oxygenCss({
  root: {
    margin: 'auto',
    position: 'relative',
    display: 'inline-flex',
    flexDirection: 'row',
    padding: Units.base / 2
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: `0 ${20}px`,
  },
  label: {
    fontSize: `${fontSize(-2)}`,
    lineHeight: `${lineHeight(-2)}`,
    fontWeight: 'bold',
    textTransform: 'uppercase',
    opacity: 0.4
  },
  name: {
    fontWeight: 'bold',
  }
});

addTranslations({
  ['en-US']: {
    'Your Instructor': 'Your Instructor'
  }
})

class AuthorInfo extends Component {
  static propTypes = {
    author: PropTypes.object,
  };

  render() {
    const { author } = this.props;
    return (
      <div className={css.root}>
        <ProfileImage url={author.avatarUrl} />
        <div className={css.info}>
          <div className={css.label}>{_l`Your Instructor`}</div>
          <div className={css.name}>{author.name}</div>
        </div>
      </div>
    );
  }
}

export default AuthorInfo;

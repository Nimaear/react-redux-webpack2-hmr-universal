import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { translate as _l } from 'oxygen-i18n';
import Logo from 'cio/lib/Assets/Logo';

const css = oxygenCss({
  root: {
    textAlign: 'center',
    fontSize: 11,
    color: '#9B9B9B',
    marginBottom: 20,
    fontWeight: 300,
    lineHeight: '18px'
  },
  logo: {
    marginRight: 4
  }
});

addTranslations({
  ['en-US']: {
    'We run on Coursio': 'We run on Coursio'
  }
})

class RunsOnCoursio extends Component {
  render() {
    return (
      <div className={css.root}>
        <Logo
          className={css.logo}
          size={14}
          color={'#9B9B9B'}
        />
        {_l`We run on Coursio`}
      </div>
    );
  }
}

export default RunsOnCoursio;

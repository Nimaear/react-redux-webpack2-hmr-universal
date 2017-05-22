import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { translate as _l } from 'oxygen-i18n';

import { Units, Colors, fontSize } from 'universal/styles';
import BundleIcon from 'universal/components/Icons/BundleIcon';

const css = oxygenCss({
  root: {
    padding: 0,
    margin: 0,
    backgroundColor: '#fff',
    position: 'absolute',
    borderRadius: 3,
    top: Units.base * 0.75,
    left: Units.base * 0.75,
    fontSize: `${fontSize(-2)}`,
    boxShadow: '0 4px 6px 0 rgba(0,0,0,0.11)'
  },
  icon: {
    margin: 0,
    verticalAlign: 'middle',
    display: 'inline-block'
  },
  label: {
    verticalAlign: 'middle',
    display: 'inline-block',
    fontWeight: 'bold',
    padding: `0 ${Units.base}px`
  },
});

addTranslations({
  ['en-US']: {
    '{0} COURSES': '{0} COURSES',
  }
})


class BundleBadge extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const {
      count,
      color
    } = this.props;
    return (
      <div className={css.root}>
        <div className={css.icon} style={{ backgroundColor: color}}>
          <BundleIcon color={'#fff'}/>
        </div>
        <div className={css.label} style={{ color}} >{_l`${count} COURSES`}</div>
      </div>
    );
  }
}

export default BundleBadge;

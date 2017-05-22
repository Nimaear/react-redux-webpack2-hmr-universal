import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { translate as _l } from 'oxygen-i18n';

import { fontSize, Units } from 'universal/styles';

addTranslations({
  ['en-US']: {
    'Copyright {0} {1}': 'Copyright {0} {1}',
  }
});

const css = oxygenCss({
  legalStuff: {
    textAlign: 'center',
    padding: Units.base * 4,
    opacity: 0.4,
    fontSize: `${fontSize(-2)}`
  },
});


class StoreFooter extends Component {
  static propTypes = {
    owner: PropTypes.object,
  };

  render() {
    const { owner } = this.props;
    const date = new Date();
    const year = date.getFullYear().toString();
    return (
      <div className={css.legalStuff}>
        {_l`Copyright ${year} ${owner.name}`}
      </div>
    );
  }
}

export default StoreFooter;

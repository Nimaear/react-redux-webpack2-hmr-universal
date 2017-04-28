import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { addMessages } from 'oxygen-i18n';
import i18n from 'oxygen-i18n';

try {
  const messages = require('../../../../build/messages.json');
  addMessages(messages);
} catch (e) {
  // Nothing going on
}

require('styles/reset.css');
require('../../../../build/bundle.css');
require('cio/dist/bundle.css');

const css = oxygenCss({
  root: {
    position: 'relative',
  }
});

class App extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.locale !== nextProps.locale) {
      const { locale } = nextProps;
      i18n.setLocale(locale, locale);
      this.forceUpdate();
    }
  }

  render () {
    return (
      <div className={css.root}>
        {this.props.children}
      </div>
    );
  }
}

export default App;

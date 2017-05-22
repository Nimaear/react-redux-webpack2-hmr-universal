import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { addMessages } from 'oxygen-i18n';
import i18n from 'oxygen-i18n';
import { Typography, fontSize } from 'universal/styles';

const PROD = process.env.NODE_ENV === 'production';
require('universal/styles/reset.css');
if (!PROD) {
  require('../../../../build/bundle.css');
}
require('cio/dist/bundle.css');
if (__CLIENT__) {
  if (window.__MESSAGES__) {
    addMessages(window.__MESSAGES__);
    delete(window.__MESSAGES__);
  } else {
    const messages = require('../../../../build/messages.json');
    addMessages(messages);
  }
}


const css = oxygenCss({
  BODY: {
    fontSize: `${fontSize()}`,
    lineHeight: `${lineHeight()}`,
    fontFamily: Typography.fontFamily
  },
  HTML: {
    fontSize: `${fontSize()}`,
    lineHeight: `${lineHeight()}`,
    fontFamily: Typography.fontFamily
  },
  CAPTION: {
    fontSize: `${fontSize(-2)}`,
    lineHeight: `${lineHeight(-2)}`,
  },
  H3: {
    fontSize: `${fontSize(+2)}`,
    lineHeight: `${lineHeight(+2)}`,
  },
  H2: {
    fontSize: `${fontSize(+4)}`,
    lineHeight: `${lineHeight(+4)}`,
  },
  H1: {
    fontSize: `${fontSize(+7)}`,
    lineHeight: `${lineHeight(+7)}`,
  },
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

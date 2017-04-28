import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import { translate as _l } from 'oxygen-i18n';

addTranslations({
  ['en-US']: {
    'Let\'s go': 'Let\'s go'
  }
})

class Home extends Component {

  static fetchData = [
  ];

  render () {
    return (
      <div >
        <p>{_l`Let's go`}</p>
      </div>
    );
  }
}

export default Home;

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import App from 'universal/components/App/App';
import { connect } from 'react-redux';
import ScrollToTop from 'universal/components/ScrollToTop';

import {
  status
} from 'universal/redux/reducers/auth';

class AppContainer extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired
  };

  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(status());
  }

  render () {
    return (
      <ScrollToTop>
        <App {...this.props}/>
      </ScrollToTop>
    );
  }
}

export default connect(
  state => ({

  })
)(AppContainer);

// Libraries
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';

// Components
import Store from 'universal/modules/store/components/Store/Store.js';

// Actions
import * as storeActions from 'universal/modules/store/redux/store.js';


class StoreContainer extends Component {
  static propTypes = {
    // State
    // count: PropTypes.number.isRequired,

    // Dispatchers
    // incrementCount: PropTypes.func.isRequired,
    // decrementCount: PropTypes.func.isRequired
  }

  static fetchData = [
    storeActions.fetch
  ];

  componentDidMount() {
    const {
      fetch,
      match
    } = this.props;
    fetch(match.params);
  }

  render () {
    const {
      fetch,
      match
    } = this.props;
    return (<Store {...this.props} name={match.params.name} fetch={fetch}/>);
  }
}


function mapStateToProps(state, props) {
  // const count = state.counter.get('count');
  return {
    // count
  };
}


function mapDispatchToProps(dispatch, props) {
  return {
    fetch: bindActionCreators(storeActions.fetch, dispatch),
    clear: bindActionCreators(storeActions.clear, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StoreContainer);

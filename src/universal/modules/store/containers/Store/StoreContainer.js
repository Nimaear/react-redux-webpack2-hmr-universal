// Libraries
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

// Components
import Store from 'universal/modules/store/components/Store/Store.js';

// Actions
// import {
//   incrementCount,
//   decrementCount
// } from 'universal/modules/counter/redux/counter.js';


class StoreContainer extends Component {
  static propTypes = {
    // State
    // count: PropTypes.number.isRequired,

    // Dispatchers
    // incrementCount: PropTypes.func.isRequired,
    // decrementCount: PropTypes.func.isRequired
  }

  render () {
    return (<Store {...this.props} />);
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
    // incrementCount: () => {
    //   dispatch(incrementCount());
    // },
    // decrementCount: () => {
    //   dispatch(decrementCount());
    // }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StoreContainer);

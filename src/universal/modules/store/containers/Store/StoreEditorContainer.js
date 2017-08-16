import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getStore } from 'universal/selectors/store';

import * as storeActions from 'universal/modules/store/redux/store.js';

class StoreEditorContainer extends Component {
  render() {
    return (
      <div> Store editor yo</div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const { name } = props;
  const store = getStore(state, name);
  return {
    name,
    theme: store.theme,
    user: state.auth.user,
    canEditStore: store.canIEdit,
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  fetch: bindActionCreators(storeActions.fetch, dispatch),
  setFilter: bindActionCreators(storeActions.setFilter, dispatch),
  setSearch: bindActionCreators(storeActions.setSearch, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(StoreEditorContainer);

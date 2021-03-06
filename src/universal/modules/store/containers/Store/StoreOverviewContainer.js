// Libraries
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getStore, getStoreItems } from 'universal/selectors/store';
import { bindActionCreators } from 'redux';
// Components
import StoreOverview from 'universal/modules/store/components/Store/StoreOverview.js';
import * as storeActions from 'universal/modules/store/redux/store.js';
// Actions


class StoreOverviewContainer extends Component {

  componentDidMount() {
    const {
      fetch,
      match,
    } = this.props;
    const { name } = match.params;
    fetch({ name });
  }

  render () {
    const {
      match,
    } = this.props;
    const { name } = match.params;
    return (
      <StoreOverview {...this.props} name={name}/>
    );
  }
}


function mapStateToProps(state, props) {
  const { name } = props.match.params;
  const store = getStore(state, name);
  const storeItems = getStoreItems(state, name);
  return {
    theme: store.theme,
    user: state.auth.user,
    search: store.search,
    filter: store.filter,
    editMode: store.editMode,
    canEditStore: store.canIEdit,
    presentation: store.presentation,
    owner: store.owner,
    storeItems
  };
}

function mapDispatchToProps(dispatch, props) {
  return {
    fetch: bindActionCreators(storeActions.fetch, dispatch),
    setFilter: bindActionCreators(storeActions.setFilter, dispatch),
    setSearch: bindActionCreators(storeActions.setSearch, dispatch),
    setEditMode: bindActionCreators(storeActions.setEditMode, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(StoreOverviewContainer);

// Libraries
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getStore, getStoreItem } from 'universal/selectors/store';
import { bindActionCreators } from 'redux';
// Components
import Course from 'universal/modules/store/components/Course.js';
import Bundle from 'universal/modules/store/components/Bundle.js';
import * as storeActions from 'universal/modules/store/redux/store.js';
import * as storeItemActions from 'universal/modules/store/redux/storeItem.js';
// Actions


class StoreItemContainer extends Component {

  static fetchData = [
    storeActions.fetchItemWithToc
  ];

  componentDidMount() {
    console.log('Mount')
    const {
      fetchItemWithToc,
      match,
    } = this.props;
    const {
      name,
      type,
      id
    } = match.params;
    fetchItemWithToc({ name, type, id });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.type !== this.props.type || nextProps.id !== this.props.id) {
      const {
        fetchItemWithToc,
        name,
        type,
        id
      } = this.props;
      fetchItemWithToc({ name, type, id });
    }
  }

  render () {
    const {
      storeItem
    } = this.props;
    const {
      type
    } = storeItem;
    if (type === 2) {
      return <Bundle {...this.props} />;
    } else if (type === 1) {
      return <Course {...this.props} />;
    }
    return null;
  }
}



const mapStateToProps = (state, props) => {
  const { name, type, id } = props;
  const store = getStore(state, name);
  const storeItem = getStoreItem(state, name, type, id);
  return {
    theme: store.theme,
    presentation: store.presentation,
    owner: store.owner,
    storeItem
  }
};

const mapDispatchToProps = (dispatch, props) => ({
  fetchItemWithToc: bindActionCreators(storeItemActions.fetchItemWithToc, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(StoreItemContainer);

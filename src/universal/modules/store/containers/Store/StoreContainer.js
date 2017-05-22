// Libraries
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import Drawer from 'cio/lib/Drawer';
import { Route, Switch } from 'react-router';

import { getStore, getStoreItems } from 'universal/selectors/store';
import LoginContainer from 'universal/modules/store/containers/Login/LoginContainer.js';
import StoreOverviewContainer from 'universal/modules/store/containers/Store/StoreOverviewContainer.js';
import StoreItemContainer from 'universal/modules/store/containers/Store/StoreItemContainer.js';
import StoreBar from 'universal/modules/store/components/StoreBar';
import * as storeActions from 'universal/modules/store/redux/store.js';
import * as authActions from 'universal/redux/reducers/auth';

import {
  BrowserRouter as Router,
} from 'react-router-dom';
// Actions


class Store extends Component {
  static propTypes = {
    match: PropTypes.object
  }

  // static fetchData = [
  //   storeActions.fetch
  // ];

  // componentDidMount() {
  //   const {
  //     fetch,
  //     match
  //   } = this.props;
  //   fetch(match.params);
  // }

  static fetchData = [
    storeActions.fetch
  ];

  state = {
    menu: false,
    edit: false
  };

  componentDidMount() {
    const {
      fetch,
      name
    } = this.props;
    fetch({ name });
  }


  clickMenu = () => {
    this.setState({ menu: !this.state.menu });
  };

  clickEdit = () => {
    this.setState({ edit: !this.state.edit });
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.user !== nextProps.user) {
      const {
        name,
        fetch,
      } = this.props;
      fetch({ name, refetch: true });
    }
  }

  logout = () => {
    const { logout } = this.props;
    this.setState({
      menu: false
    }, () => {
      logout();
    });
  };


  render () {
    const {
      match,
      theme,
      name,
      owner,
      canEditStore,
      user
    } = this.props;
    const {
      menu,
      edit
    } = this.state;
    return (
      <div>
        <StoreBar
          name={name}
          user={user}
          theme={theme}
          canEdit={canEditStore}
          logo={theme.logoUrl}
          onClickEdit={this.clickEdit}
          onClickMenu={this.clickMenu}
        />
        <Switch>
          <Route path={'/store/:name/login'} component={LoginContainer} />
          <Route path={'/store/:name/:type/:id'} render={props => {
            const type = parseInt(props.match.params.type, 10);
            const id = parseInt(props.match.params.id, 10);
            const { name } = props.match.params;
            return <StoreItemContainer key={`${type}-${id}`} {...this.props} {...props} type={type} id={id} name={name}/>
          }}/>
          <Route path={'/store/:name'} component={StoreOverviewContainer} />
        </Switch>
        <Drawer width={530} overlay open={edit} right onRequestClose={this.clickEdit}>
          Edit stuff
        </Drawer>
        <Drawer overlay open={menu} onRequestClose={this.clickMenu}>
          <button onClick={this.logout}>Logout</button>
        </Drawer>
      </div>
    );
  }
}


function mapStateToProps(state, props) {
  const { name } = props.match.params;
  const store = getStore(state, name);
  return {
    name,
    filter: store.filter,
    user: state.auth.user,
    owner: store.owner,
    canEditStore: store.canIEdit,
    presentation: store.presentation,
    theme: store.theme,
  };
}

function mapDispatchToProps(dispatch, props) {
  return {
    setSearch: bindActionCreators(storeActions.setSearch, dispatch),
    setFilter: bindActionCreators(storeActions.setFilter, dispatch),
    fetch: bindActionCreators(storeActions.fetch, dispatch),
    fetchItem: bindActionCreators(storeActions.fetch, dispatch),
    logout: bindActionCreators(authActions.logout, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Store);

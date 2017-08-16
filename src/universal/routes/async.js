import React from 'react';
import Loader from 'universal/components/Loader';

function asyncRoute(getComponent) {
  return class AsyncComponent extends React.Component {
    state = {
      Component: null
    };

    componentDidMount() {
      if ( this.state.Component === null ) {
        getComponent().then((Component) => {
          this.setState({Component: Component});
        })
      }
    }

    render() {
      const {
        Component
      } = this.state;

      if ( Component ) {
        return (<Component {...this.props} />);
      }
      return (
        <Loader />
      );
    }
  }
}

const storeRoutes = [
  {
    path: '/store/:name/login',
    component: asyncRoute(() => {
      return System.import('../modules/store/containers/Login/LoginContainer.js');
    }),
  },
  {
    path: '/store/:name/terms',
    component: asyncRoute(() => {
      return System.import('../modules/store/containers/Store/TermsContainer.js');
    }),
  },
  {
    path: '/store/:name/checkout',
    component: asyncRoute(() => {
      return System.import('../modules/store/containers/Checkout/CheckoutContainer.js');
    }),
  },
  {
    path: '/store/:name/:type/:ïd',
    component: asyncRoute(() => {
      return System.import('../modules/store/containers/Store/StoreItemContainer.js');
    }),
  }
];


export default [
  {
    path: '/',
    exact: true,
    component: asyncRoute(() => {
      return System.import('../components/Home/Home.js');
    })
  },
  {
    path: '/store/:name',
    component: asyncRoute(() => {
      return System.import('../modules/store/containers/Store/StoreContainer.js');
    }),
    childRoutes: storeRoutes
  },
];
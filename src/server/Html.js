import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {StaticRouter} from 'react-router';
import {renderToString} from 'react-dom/server';

// Redux
import { Provider } from 'react-redux';

class Html extends Component {
  static propTypes = {
    url: PropTypes.string.isRequired,
    store: PropTypes.object.isRequired,
    title: PropTypes.string.isRequired,
    assets: PropTypes.object,
    context: PropTypes.object
  }

  render () {
    const PROD = process.env.NODE_ENV === 'production';

    const {
      title,
      store,
      assets,
      messages,
      url,
      context
    } = this.props;

    const {
      manifest,
      app,
      vendor
    } = assets || {};

    const state = store.getState();

    const initialState = `window.__INITIAL_STATE__ = ${JSON.stringify(state)}`;
    const addMessages = `window.__MESSAGES__ = ${JSON.stringify(messages)}`;
    const Layout =  PROD ? require( '../../build/prerender.js') : () => {};

    const root = PROD && renderToString(
      <Provider store={store}>
        <StaticRouter location={url} context={context}>
          <Layout />
        </StaticRouter>
      </Provider>
    );

    return (
     <html>
       <head>
         <meta charSet="utf-8"/>
         <title>{title}</title>
         <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
         <link href="https://fonts.googleapis.com/css?family=Oxygen:300,400,700" rel="stylesheet" />
         {PROD && <link rel="stylesheet" href="/static/app.css" type="text/css" />}
         {PROD && <link rel="stylesheet" href="/static/bundle.css" type="text/css" />}
         <script dangerouslySetInnerHTML={{__html: initialState}} />
         {messages && <script dangerouslySetInnerHTML={{__html: addMessages}} />}
       </head>
       <body>
          {PROD ? <div id="root" dangerouslySetInnerHTML={{__html: root}}></div> : <div id="root"></div>}
          {PROD && <script dangerouslySetInnerHTML={{__html: manifest.text}}/>}
          {PROD && <script src={vendor.js}/>}
          <script src={PROD ? app.js : '/static/app.js'} />
       </body>
     </html>
    );
  }

}

export default Html;

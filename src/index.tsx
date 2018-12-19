import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'antd/dist/antd.css';

import { ApolloProvider } from 'react-apollo';
import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost';

// TODO: avoid any
const IS_BROWSER = !!(process as any).browser;

// Apollo Client
if (!IS_BROWSER) {
  (global as any).fetch = fetch; // TODO: avoid any
}

const URI_ENDPOINT = 'http://localhost:4000/graphql';

// TODO: avoid any
const createClient = (initialState: any) => {
  return new ApolloClient({
    connectToDevTools: IS_BROWSER,
    ssrMode: !IS_BROWSER, // Disables forceFetch on the server (so queries are only run once)
    link: new HttpLink({
      uri: URI_ENDPOINT, // Server URL (must be absolute)
      credentials: 'same-origin', // Additional fetch() options like `credentials` or `headers`
    }),
    cache: new InMemoryCache().restore(initialState || {}),
  });
};

const client = createClient({});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

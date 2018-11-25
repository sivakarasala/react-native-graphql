import React from 'react';
import ApolloClient, { InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { AsyncStorage } from 'react-native';
import 'cross-fetch/polyfill';

import Navigator from './Navigator';
import { getToken } from './loginUtils';

const client = new ApolloClient({
  uri: "https://api.graph.cool/simple/v1/cjot6a9g99rzj01884mzoljq0",
  fetchOptions: {
    credentials: 'include'
  },
  request:  async operation => {
    const token = await getToken();
    operation.setContext({
      headers: {
          authorization: token ? `Bearer ${token}` : null
      }
    });
  },
  cache: new InMemoryCache(),
  onError: ({ networkError }) => {
    if (networkError) {
      console.log('Network Error', networkError);
    }
  }
});
export default class App extends React.Component {
  render() {
    
    return (
      <ApolloProvider client={client}>
        <Navigator/>
      </ApolloProvider>
    );
  }
}





import config from '../config';
import React, { Component } from 'react';
import {
  ApolloClient,
  createNetworkInterface,
  ApolloProvider,
} from 'react-apollo';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: `${config.apiUrl}/api`,
  })
});

const apolloWrapper = WrappedComponent => {
  return class ApolloWrapperComponent extends Component {
    render() {
      return (
        <ApolloProvider client={client}>
          <WrappedComponent {...this.props} />
        </ApolloProvider>
      )
    }
  }
};

export default apolloWrapper;

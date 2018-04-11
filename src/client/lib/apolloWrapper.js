import config from '../config';
import React, { Component } from 'react';
import fetch from 'node-fetch';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from 'react-apollo';
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
  link: createHttpLink({ uri: `${config.apiUrl}/api/graphql`, fetch: fetch }),
  cache: new InMemoryCache()
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

exports.client = client;

export default apolloWrapper;

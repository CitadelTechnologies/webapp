import React from 'react';
import gql from 'graphql-tag';
import { client } from '../lib/apolloWrapper';

class ConnectedPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: null,
            ready: false,
        };
    }

    componentWillMount() {
        if (typeof window === 'undefined') {
            return;
        }
        let accessToken = localStorage.getItem('user.access_token');
        if (accessToken === null) {
            this.setState({ ready: true });
            return;
        }
        client.query({
          query: gql`
            query GetCurrentUser($accessToken: String) {
              me(accessToken: $accessToken) {
                username
                is_admin
              }
            }
          `,
          variables: {accessToken: accessToken}
      }).then(response => {
          if (response.data.me === null) {
              localStorage.removeItem('user.access_token');
              this.setState({ ready: true });
              return;
          }
          this.setState({
              user: response.data.me,
              ready: true,
          });
      });
    }
}

export default ConnectedPage;

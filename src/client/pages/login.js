import React, { Component } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import glamorous from 'glamorous';
import Layout from '../components/Layout';
import axios from 'axios';

import ProjectsListContainer from '../containers/ProjectsListContainer';
import apolloWrapper from '../lib/apolloWrapper';

const Container = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  "& form": {
      "& h3": {
          textAlign: 'center',
      },
      "& input": {
          display: 'block',
          height: '35px',
          margin: '10px 0px',
          border: 'none',
          borderBottom: '1px solid #AAA',
          backgroundColor: 'none',
          "&:focus": {
              borderBottom: '1px solid #000'
          }
      },
      "& button": {
          display: 'block',
          margin: '20px auto',
          border: 'none',
          borderRadius: '30px',
          backgroundColor: '#000',
          padding: '10px',
          color: '#EFEFEF',
      }
  }
});

class Login extends Component {
  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event) {
      event.preventDefault();

      axios.post('/api/users/connect', {
          username: event.target[0].value,
          password: event.target[1].value
      }).then(response => {
          localStorage.setItem('user.access_token', response.data.access_token);
          Router.push('/');
      })
      .catch(error => console.log(error));
  }

  render() {
    const { url } = this.props;
    return (
        <div>
            <Head>
                <title>La Citadelle - Se connecter</title>
                <link rel="icon" href="/static/images/armoiries.png" />
                <link href="https://fonts.googleapis.com/css?family=Quattrocento" rel="stylesheet" />
                <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <Layout>
                <Container>
                    <form onSubmit={this.onSubmit}>
                        <h3>Connexion</h3>
                        <input type="text" name="username" placeholder="Identifiant"/>
                        <input type="password" name="password" placeholder="Mot de passe"/>
                        <button type="submit">Se connecter</button>
                    </form>
                </Container>
            </Layout>
        </div>
    );
  }
}

export default Login;

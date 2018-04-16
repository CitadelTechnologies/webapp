import Head from 'next/head';
import Link from 'next/link';
import Router from 'next/router';
import glamorous from 'glamorous';
import Layout from '../components/Layout';
import ConnectedPage from '../components/ConnectedPage';

import ProjectsListContainer from '../containers/ProjectsListContainer';
import apolloWrapper from '../lib/apolloWrapper';

const Container = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
});

const Input = glamorous.input({
  padding: 8,
  borderRadius: 12,
  border: 'none',
  width: '50%',
  minWidth: 250,
  margin: '25px 0',
});

class Projects extends ConnectedPage {
  constructor(props) {
    super(props);

    this.state = {
        ...this.state,
        searchQuery: null,
    };

    this.onKeyDown = this.onKeyDown.bind(this);
    this.search = this.search.bind(this);
  }

  componentDidMount() {
    document.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown(e) {
    if (!this.props.url.query.projectId) {
      return;
    }
    if (e.keyCode === 27) {
      window.history.back();
    }
  }

  dismissModal() {
    Router.push('/');
  }

  search(query) {
    this.setState(() => ({
      searchQuery: query,
    }));
  }

  render() {
      if (this.state.ready === false) {
          return null;
      }
    const { url } = this.props;
    return (
      <div>
        <Head>
          <title>La Citadelle - Projets</title>
          <link rel="icon" href="/static/images/armoiries.png" />
          <link href="https://fonts.googleapis.com/css?family=Quattrocento" rel="stylesheet" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Layout user={this.state.user}>
          <Container>
            <Input
              type="text"
              placeholder="Rechercher"
              value={this.state.searchQuery || ''}
              onChange={e => this.search(e.target.value)}
            />
            <ProjectsListContainer search={this.state.searchQuery} />
          </Container>
        </Layout>
      </div>
    );
  }
}

export default apolloWrapper(Projects);

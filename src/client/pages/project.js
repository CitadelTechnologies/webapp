import glamorous from 'glamorous';
import Layout from '../components/Layout';
import ProjectContainer from '../containers/ProjectContainer';
import apolloWrapper from '../lib/apolloWrapper';
import Head from 'next/head';
import ConnectedPage from '../components/ConnectedPage';

class Project extends ConnectedPage {
  constructor(props) {
    super(props);

    this.state = {
        ...this.state,
        project: null
    };
  }

  render() {
      if (this.state.ready === false) {
          return null;
      }
    return(
      <div>
        <Head>
          <title>La Citadelle</title>
          <link rel="icon" href="/static/images/armoiries.png" />
          <link href="https://fonts.googleapis.com/css?family=Quattrocento" rel="stylesheet" />
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <Layout user={this.state.user}>
          <ProjectContainer id={this.props.url.query.id} />
        </Layout>
      </div>
    );
  }
}

export default apolloWrapper(Project);

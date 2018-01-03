import glamorous from 'glamorous';
import Layout from '../components/Layout';
import ProjectContainer from '../containers/ProjectContainer';
import apolloWrapper from '../lib/apolloWrapper';
import Head from 'next/head';

class Project extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      project: null
    };
  }

  render() {
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
        <Layout>
          <ProjectContainer id={this.props.url.query.id} />
        </Layout>
      </div>
    );
  }
}

export default apolloWrapper(Project);

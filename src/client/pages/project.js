import glamorous from 'glamorous';
import Layout from '../components/Layout';
import ProjectContainer from '../containers/ProjectContainer';
import apolloWrapper from '../lib/apolloWrapper';

class Project extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      project: null
    };
  }

  render() {
    return(
      <Layout>
        <ProjectContainer id={this.props.url.query.id} />
      </Layout>
    );
  }
}

export default apolloWrapper(Project);

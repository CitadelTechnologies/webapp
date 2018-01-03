import React from 'react';
import { gql, graphql } from 'react-apollo';
import Project from '../components/Project';

const ProjectContainer = ({ data }) => {
  if (data.loading || data.error)
    return (
      <p style={{ color: 'white', textAlign: 'center' }}> Loading projects... </p>
    )

  return <Project project={data.project} />
};

const projectQuery = gql`
  query GetProject($id: ID!) {
    project(id: $id) {
      id
      name
      description
      url
      picture
      cover_picture
      responsible {
        id
        username
      }
    }
  }
`;

export default graphql(projectQuery, {
  options: ({ id }) => ({ id }),
})(ProjectContainer);

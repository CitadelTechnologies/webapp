import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
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
      budget {
        name
        slug
        sectors {
            name
            slug
            transactions {
                wording
            }
        }
      }
    }
  }
`;

export default graphql(projectQuery, {
  options: ({ id }) => ({ id }),
})(ProjectContainer);

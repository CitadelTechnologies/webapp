import React from 'react'
import { gql, graphql } from 'react-apollo'
import ProjectsList from '../components/ProjectsList'

const ProjectsListContainer = ({ data }) => {
  if (data.loading || data.error)
    return (
      <p style={{ color: 'white', textAlign: 'center' }}> Loading projects... </p>
    )

  return <ProjectsList projects={data.projects} />
}

const projectsQuery = gql`
  query FilterProjects($search: String) {
    projects(search: $search) {
      id
      name
      picture
      cover_picture
      responsible {
        id
        username
      }
    }
  }
`
export default graphql(projectsQuery, {
  options: ({ search }) => ({ search }),
})(ProjectsListContainer)

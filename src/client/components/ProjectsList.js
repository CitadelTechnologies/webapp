import React from 'react';
import ProjectCard from './ProjectCard';

const listStyle = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'center',
  minWidth: 300,
}

const ProjectsList = ({ projects }) => {
  return (
      <div style={listStyle}>
        {projects.map(project =>
          <a
            style={{ textDecoration: 'none' }}
            key={project.id}
          >
            <ProjectCard project={project} />
          </a>
        )}
      </div>
  )
};

export default ProjectsList;

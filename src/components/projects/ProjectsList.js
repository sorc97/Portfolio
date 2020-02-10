import React from 'react';
import PropTypes from 'prop-types';
import ProjectsItem from './ProjectsItem';

const ProjectsList = ({ projects = [] }) =>
  <ul className='projects__list'>
    {projects.map((project, i) =>
      <ProjectsItem key={i} {...project}  />
    )}
  </ul>

ProjectsList.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.object)
}

export default ProjectsList;
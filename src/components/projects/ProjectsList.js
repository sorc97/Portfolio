import React from 'react';
import ProjectsItem from './ProjectsItem';
import './ProjectsList.scss';

const ProjectsList = ({ projects = [] }) =>
  <ul className='projects__list'>
    {projects.map((project, i) =>
      <ProjectsItem key={i} {...project} />
    )}
  </ul>

export default ProjectsList;
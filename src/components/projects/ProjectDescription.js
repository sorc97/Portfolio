import React from 'react';
import PropTypes from 'prop-types';
import './ProjectDescription.scss';

const ProjectDescription = ({ 
  title = "", text = "" 
}) =>
  <div className='project-description'>
    <h3 className='project-description__title'>
      {title}
    </h3>
    <p className='project-description__text'>
      {text}
    </p>
  </div>

ProjectDescription.propTypes = {
  title: PropTypes.string, 
  text: PropTypes.string
}

export default ProjectDescription;
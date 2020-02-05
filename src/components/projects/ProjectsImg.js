import React from 'react';
import Img from '../common/Img';

const ProjectsImg = ({ img, link, openLink }) =>
  <Img additionalClasses='projects-item__img' imgSource={img}>
    <a
      href={link}
      rel="noopener noreferrer"
      target="_blank"
      className='projects-item__link'
    >
      <span className='projects-item__link-text'>
        {openLink}
      </span>
    </a>
  </Img>

export default ProjectsImg;
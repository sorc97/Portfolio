import React from 'react';
import PropTypes from 'prop-types';
import Img from '../common/Img';

const ProjectsImg = ({ 
  img, link, openLink 
}) =>
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

ProjectsImg.propTypes = {
  img: PropTypes.string,
  link: PropTypes.string,
  openLink: PropTypes.string
}

ProjectsImg.defaultProps = {
  img: "",
  link: "#",
  openLink: "Open"
}

export default ProjectsImg;
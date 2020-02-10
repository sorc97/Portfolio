import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { AppContext } from '../context/AppContext';
import ProjectsImg from './ProjectsImg';
import AboutProject from './AboutProject';
import TagsList from './TagsList';
import './ProjectsItem.scss';

const ProjectsItem = ({
  title,
  link,
  tags,
  img,
  github,
  description
}) => {
  const { config: { projects } } = useContext(AppContext);
  const { descriptionButton, openLink } = projects;

  return (
    <li className='projects__item projects-item'>
      <ProjectsImg
        link={link}
        img={img}
        openLink={openLink}
      />
      <h3 className='projects-item__title'>
        {title}
      </h3>
      <AboutProject
        descriptionBtn={descriptionButton}
        github={github}
        title={title}
        description={description}
      />
      <TagsList tags={tags} />
    </li>
  )
}

ProjectsItem.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  img: PropTypes.string,
  github: PropTypes.string,
  description: PropTypes.string
}

ProjectsItem.defaultProps = {
  title: "unknown",
  link: "#",
  tags: [],
  img: "",
  github: "#",
  description: ""
}

export default ProjectsItem;
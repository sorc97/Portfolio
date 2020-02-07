import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { Link } from 'react-router-dom';
import ProjectsImg from './ProjectsImg';
import AboutProject from './AboutProject';
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
      <div className='projects-item__tags tags'>
        {
          tags.map((tag, i) =>
            <Link to={`?filter=${tag}`} key={i} className='tags__item'>
              {tag}
            </Link>
          )
        }
      </div>
    </li>
  )
}

export default ProjectsItem;
import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectsItem.scss';

const ProjectsItem = ({ title, link, tags, img }) =>
  <li className='projects__item projects-item'>
    <div className='projects-item__img'>
      <img src={img} alt='project sreen' />
      <a
        href={link}
        rel="noopener noreferrer"
        target="_blank"
        className='projects-item__link'
      >
        <span className='projects-item__link-text'>
          Open
        </span>
      </a>
    </div>
    <h3 className='projects-item__title'>
      {title}
    </h3>
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

export default ProjectsItem;
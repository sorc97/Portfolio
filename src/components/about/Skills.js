import React from 'react';
import PropTypes from 'prop-types';
import './Skills.scss';

const Skills = ({ skillsList = [], caption = "" }) =>
  <div className='skills'>
    <h3 className='skills__caption subcaption'>
      {caption}
    </h3>

    <ul className='skills__list'>
      {
        skillsList.map((skill, i) =>
          <li key={i} className='skills__item'>
            {skill}
          </li>
        )
      }
    </ul>
  </div>

Skills.propTypes = {
  skillsList: PropTypes.arrayOf(PropTypes.string),
  caption: PropTypes.string
}

export default Skills;

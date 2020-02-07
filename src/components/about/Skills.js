import React from 'react';
import './Skills.scss'

const Skills = ({ skillsList }) =>
  <ul className='skills'>
    {
      skillsList.map((skill, i) =>
        <div key={i} className='skills-item'>
          {skill}
        </div>
      )
    }
  </ul>

export default Skills;

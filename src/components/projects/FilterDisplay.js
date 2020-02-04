import React from 'react';
import { Link } from 'react-router-dom';
import './FilterDisplay.scss';

const FilterDisplay = ({ text = "", value = ""}) =>
  <div className='projects__filter-display filter-display'>
    <h3 className='filter-display__text'>{text}</h3>
    <span className='filter-display__value'>{value}</span>
    <Link to='/projects' className='filter-display__remove'>
      &times;
    </Link>
  </div>

export default FilterDisplay;
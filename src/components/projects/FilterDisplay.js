import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './FilterDisplay.scss';

const FilterDisplay = ({
  text = "",
  value = "",
  additionalClass = ""
}) => {

  const classes = classNames(
    'filter-display',
    additionalClass
  )

  return (
    <div className={classes}>
      <i className='filter-display__icon fa fa-filter'></i>
      <span className='filter-display__text'>{text}</span>
      {value && (
        <>
          <span className='filter-display__value'>{value}</span>
          <Link to='/projects' className='filter-display__remove'>
            &times;
          </Link>
        </>
      )}

    </div>
  )
}

FilterDisplay.propTypes = {
  text: PropTypes.string,
  value: PropTypes.string,
  additionalClass: PropTypes.string
}

export default FilterDisplay;
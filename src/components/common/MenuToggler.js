import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './MenuToggler.scss';

const MenuToggler = ({ 
  handleToggle = f => f,
  additionalClass,
  isOpen = false
}) => {

  const classes = classNames(
    'menu-toggler',
    isOpen && `menu-toggler_opened`,  // Active class based on the base class 
    !isOpen && additionalClass
  )

  return (
    <button className={classes} onClick={handleToggle}>
      <span className='menu-toggler__line'></span>
    </button>
  )
}

MenuToggler.propTypes = {
  handleToggle: PropTypes.func,
  additionalClass: PropTypes.string,
  isOpen: PropTypes.bool
}

export default MenuToggler;
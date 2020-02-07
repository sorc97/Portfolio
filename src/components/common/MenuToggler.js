import React from 'react';
import classNames from 'classnames';
import './MenuToggler.scss';

const MenuToggler = ({ 
  handleToggle,
  activeClass
}) => {

  const baseClass = 'menu-toggler';
  const classes = classNames(
    baseClass,
    `${baseClass}${activeClass}`  // Active class based on the base class 
  )

  return (
    <button className={classes} onClick={handleToggle}>
      <span className='menu-toggler__line'></span>
    </button>
  )
}

export default MenuToggler;
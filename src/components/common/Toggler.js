import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Toggler.scss';

const Toggler = ({
  className,
  firstToggleValue,
  secondToggleValue,
  checked,
  onClick = f => f,
}) => {
  // Calculating toggler classes
  const togglerClass = classNames(
    'toggler',
    `${className}__toggler`
  )
  // Calculating lang toggler classes
  const baseItemClass = `${className}__item`;

  const firstItemClass = classNames(
    baseItemClass,
    !checked && `${baseItemClass}_active`
  )

  const secondItemClass = classNames(
    baseItemClass,
    checked && `${baseItemClass}_active`
  )

  return (
    <div className={className}>
      <span className={firstItemClass}>{firstToggleValue}</span>
      <label className={togglerClass}>
        <input
          type='checkbox'
          onChange={onClick}
          className='toggler__checkbox'
          id='toggler__checkbox'
          checked={checked}
        />
        <span className='toggler__slider'></span>
      </label>
      <span className={secondItemClass}>{secondToggleValue}</span>
    </div>
  )
}

Toggler.propTypes = {
  className: PropTypes.string,
  firstToggleValue: PropTypes.string,
  secondToggleValue: PropTypes.string,
  checked: PropTypes.bool,
  onClick: PropTypes.func
}

Toggler.defaultProps = {
  className: "",
  firstToggleValue: "",
  secondToggleValue: "",
  checked: false,
  onClick: f => f
}

export default Toggler;
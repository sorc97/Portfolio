import React from 'react';
import classNames from 'classnames';
import './Toggler.scss';

const Toggler = ({
  className,
  firstToggleValue,
  secondToggleValue,
  firstActive,
  secondActive,
  onClick = f => f
}) => {
  const classes = classNames(
    'toggler',
    `${className}__toggler`
  )

  return (
    <div className={className}>
      <span className={firstActive}>{firstToggleValue}</span>
      <label className={classes}>
        <input
          type='checkbox'
          onChange={onClick}
          className='toggler__checkbox'
          id='toggler__checkbox'
        />
        <span className='toggler__slider'></span>
      </label>
      <span className={secondActive}>{secondToggleValue}</span>
    </div>
  )
}

export default Toggler;
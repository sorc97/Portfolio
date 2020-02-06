import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Icon.scss';

const Icon = ({ 
  name = '', 
  className = '', 
  hover = false 
}) => {

  const iconClasses = classNames(
    'icon',
    'fa',
    `fa-${name}`,
    {
      'icon_hovering': hover
    },
    className
  )

  return (
    <i className={iconClasses} />
  )
}

Icon.propTypes = {
  name: PropTypes.string,
  additionalClasses: PropTypes.string,
  hover: PropTypes.bool
}

export default Icon;
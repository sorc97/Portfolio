import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Icon.scss';

const Icon = ({ name = '', className = '' }) => {

  const iconClasses = classNames(
    'icon',
    'fa',
    `fa-${name}`,
    className
  )

  return(
    <i className={iconClasses} />
  )
}

Icon.propTypes = {
  name: PropTypes.string,
  additionalClasses: PropTypes.string
}

export default Icon;
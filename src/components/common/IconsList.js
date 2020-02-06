import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import BlankLink from './BlankLink';
import Icon from './Icon';
import './IconsList.scss';

const IconsList = ({ 
  icons = {}, 
  className = '', 
  hover = false
}) => {

  const iconsNames = Object.keys(icons);

  const iconsClasses = classNames(
    'icons',
    className
  )

  return (
    <ul className={iconsClasses}>
      {
        iconsNames.map((iconName, i) =>
          <li key={i} className='icons__item'>
            <BlankLink href={icons[iconName]} className='icons__link'>
              <Icon name={iconName} hover={hover} />
            </BlankLink>
          </li>
        )
      }
    </ul >
  )
}

Icon.propTypes = {
  icons: PropTypes.object,
  className: PropTypes.string,
  hover: PropTypes.bool
}

export default IconsList;
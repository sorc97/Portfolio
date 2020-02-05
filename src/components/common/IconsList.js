import React from 'react';
import classNames from 'classnames';
import Link from './Link';
import Icon from './Icon';
import './IconsList.scss';

const IconsList = ({ className, icons }) => {

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
            <Link href={icons[iconName]} className='icons__link'>
              <Icon name={iconName} />
            </Link>
          </li>
        )
      }
    </ul >
  )
}


export default IconsList;
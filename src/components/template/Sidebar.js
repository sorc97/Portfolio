import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import IconsList from '../common/IconsList';
import Icon from '../common/Icon';
import './Sidebar.scss';

const Sidebar = ({ 
  menu = [], 
  icons = {},
  isOpen,
  onClick = f=>f
}) => {

  const classes = classNames(
    'sidebar',
    {
      'sidebar_active': isOpen
    }
  )
  
  return (
    <aside className={classes} onClick={onClick}>
      <nav className='menu'>
        <ul className='menu__list'>
          {
            menu.map(({ title, url, icon }, i) =>
              <li key={i} className='menu__item'>
                <NavLink activeClassName='menu__link_active' exact className='menu__link' to={url}>
                  <Icon className='menu__icon' name={icon} />
                  {/* <span className='menu__text-wrapper'> */}
                    {title}
                  {/* </span> */}
                </NavLink>
              </li>
            )
          }
        </ul>
      </nav>
      <IconsList
        className='sidebar__icons'
        icons={icons}
        hover
      />
    </aside>
  )
}

export default Sidebar;

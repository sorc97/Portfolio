import React from 'react';
import { NavLink } from 'react-router-dom';
import IconsList from '../common/IconsList';
import './Sidebar.scss';

const Sidebar = ({ sidebarItems = {}, icons = {} }) => {
  const items = Object.keys(sidebarItems);
  // console.log(items);

  /* return (
    <aside className='sidebar'>
      <ul className='sidebar__menu'>
        <li>
          <NavLink to='/' exact className='sidebar__link'>
            Главаная
          </NavLink>
        </li>
        <li>
          <NavLink to='/about' className='sidebar__link'>
            Обо мне
          </NavLink>
        </li>
        <li>
          <NavLink to='/projects' className='sidebar__link'>
            Проекты
          </NavLink>
        </li>
        <li>
          <NavLink to='/contacts' className='sidebar__link'>
            Контакты
          </NavLink>
        </li>
      </ul>
    </aside>
  ) */

  return (
    <aside className='sidebar'>
      <nav className='menu'>
        <ul className='menu__list'>
          {
            items.map((item, i) =>
              <li key={i} className='menu__item'>
                <NavLink exact className='menu__link' to={sidebarItems[item]}>
                  {item}
                </NavLink>
              </li>
            )
          }
        </ul>
      </nav>
      <IconsList className='sidebar__icons' icons={icons}/>
    </aside>
  )

}


export default Sidebar;

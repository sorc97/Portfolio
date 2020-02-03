import React from 'react';
import { NavLink } from 'react-router-dom';
import './Sidebar.scss';

const Sidebar = ({ sidebarItems = {} }) => {
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
      <ul className='sidebar__menu'>
        {
          items.map((item, i) =>
            <li key={i} className='sidebar__item'>
              <NavLink exact className='sidebar__link' to={sidebarItems[item]}>
                {item}
              </NavLink>
            </li>
          )
        }
      </ul>
    </aside>
  )

}


export default Sidebar;

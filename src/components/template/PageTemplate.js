import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';
import classNames from 'classnames';
import Toggler from '../common/Toggler';
import MenuToggler from '../common/MenuToggler';
import './PageTemplate.scss';

const PageTemplate = ({
  children,
  currentLang,
  changeLang,
  setMenu,
  isMenuOpen
}) => {
  const { config: { sidebar } } = useContext(AppContext);
  const { menu, icons } = sidebar;

  // Change language handler
  const handleCheck = () => {
    const newLang = (currentLang === 'ru') ? 'en' : 'ru';
    changeLang(newLang);
  }
  // Calculating lang toggler classes
  const baseLangClass = 'lang-choosing__item';
  const activeLangClass = 'lang-choosing__item_active';
  const ruClasses = classNames(
    baseLangClass,
    (currentLang === 'ru') && activeLangClass
  )
  const engClasses = classNames(
    baseLangClass,
    (currentLang === 'en') && activeLangClass
  )

  // Toggle sidebar
  const toggleMenu = () => {
    setMenu(!isMenuOpen);
  }

  return (
    <>
      <MenuToggler
        handleToggle={toggleMenu} 
        activeClass={isMenuOpen && '_menu-opened'}/>
      <Toggler
        className='lang-choosing'
        firstToggleValue='Ru'
        secondToggleValue='En'
        firstActive={ruClasses}
        secondActive={engClasses}
        onClick={handleCheck}
      />
      <Sidebar
        menu={menu}
        icons={icons}
        isOpen={isMenuOpen}
        onClick={isMenuOpen ? toggleMenu : undefined}
      />
      <main className='content'>
        {children}
      </main>
    </>
  )
}

PageTemplate.propTypes = {
  children: PropTypes.node
}

export default PageTemplate;
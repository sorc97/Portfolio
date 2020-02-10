import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';
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

  // Toggle sidebar
  const toggleMenu = () => {
    setMenu(!isMenuOpen);
  }

  return (
    <>
      <MenuToggler
        className=''
        handleToggle={toggleMenu}
        additionalClass='menu-toggler_positioned'
        isOpen={isMenuOpen} />
      <Toggler
        className='lang-choosing'
        firstToggleValue='Ru'
        secondToggleValue='En'
        onClick={handleCheck}
        checked={currentLang === 'en'} />
      <Sidebar
        menu={menu}
        icons={icons}
        isOpen={isMenuOpen}
        onClick={isMenuOpen ? toggleMenu : undefined} />
      <main className='content'>
        {children}
      </main>
    </>
  )
}

PageTemplate.propTypes = {
  children: PropTypes.node,
  currentLang: PropTypes.string,
  isMenuOpen: PropTypes.bool,
  changeLang: PropTypes.func,
  setMenu: PropTypes.func
}

PageTemplate.defaultProps = {
  currentLang: "en",
  isMenuOpen: false,
  changeLang: () => { },
  setMenu: () => { }
}

export default PageTemplate;
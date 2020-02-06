import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';
import classNames from 'classnames';
import './PageTemplate.scss';

const PageTemplate = ({
  children,
  currentLang,
  changeLang
}) => {
  const { config: { sidebar } } = useContext(AppContext);
  const { menu, icons } = sidebar; 

  // Change language handler
  const handleCheck = () => {
    const newLang = (currentLang === 'ru') ? 'en' : 'ru';
    changeLang(newLang);
  }
  // Lang classes
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

  return (
    <>
      <div className='lang-choosing'>
        <span className={ruClasses}>Ru</span>
        <label className='toggler lang-choosing__toggler'>
          <input
            type='checkbox'
            onChange={handleCheck}
            className='toggler__checkbox'
            id='toggler__checkbox'
          />
          <span className='toggler__slider'></span>
        </label>
        <span className={engClasses}>En</span>
      </div>
      <Sidebar menu={menu} icons={icons}/>
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
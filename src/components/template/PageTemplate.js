import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from './Sidebar';
// import { sidebarItems } from '../../config.ru';
import './PageTemplate.scss';

const PageTemplate = ({ children }) => {
  const currentLang = 'ru';
  
  const sidebarItems = require(`../../config.${currentLang}`).sidebarItems;
  console.log(sidebarItems);

  return (
    <>
      <Sidebar sidebarItems={sidebarItems} />
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
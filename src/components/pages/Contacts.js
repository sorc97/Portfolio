import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './Contacts.scss';

const Contacts = () => {
  const { config: { contacts } } = useContext(AppContext);
  const { caption } = contacts;

  return (
    <div className='contacts'>
      <h1 className='caption contacts__caption'>
        {caption}
      </h1>
    </div>
  )
}

export default Contacts;
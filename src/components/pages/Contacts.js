import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import ContactsList from '../contacts/ContactsList';
import './Contacts.scss';

const Contacts = () => {
  const { config: { contacts } } = useContext(AppContext);
  const { caption, contactsList } = contacts;

  return (
    <section className='contacts'>
      <div className='container contacts__container'>
        <h1 className='caption contacts__caption'>
          {caption}
        </h1>
        <div className='contacts__content'>
          <div className='contacts__info contacts-info'>
            <ContactsList contacts={contactsList} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts;
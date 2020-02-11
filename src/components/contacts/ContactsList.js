import React from 'react';
import PropTypes from 'prop-types';
import ContactsItem from './ContactsItem';
import './ContactsList.scss';

const ContactsList = ({ contacts = [] }) =>
  contacts.map(({ title, icons }, i) =>
    <div key={i} className='contacts-info__item'>
      <h2 className='contacts-info__caption'>
        {title}
      </h2>
      <ul className='contacts-info__icons-list icons-list'>
        {
          icons.map((contact, i) =>
            <ContactsItem {...contact} key={i} />
          )
        }
      </ul>
    </div>
  )

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object)
}

export default ContactsList;
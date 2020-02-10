import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../common/Icon';
import BlankLink from '../common/BlankLink';
import './ContactsList.scss';

const ContactsList = ({ contacts = [] }) =>
  contacts.map(({ title, icons }, i) =>
    <div key={i} className='contacts-info__item'>
      <h2 className='contacts-info__caption'>
        {title}
      </h2>
      <ul className='contacts-info__icons-list icons-list'>
        {
          icons.map(({ name, description, link }, i) =>
            <BlankLink className='icons-list__link' key={i} href={link}>
              <Icon name={name} className='icons-list__icon' />
              <span>
                {description}
              </span>
            </BlankLink>
          )
        }
      </ul>
    </div>
  )

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object)
}

export default ContactsList;
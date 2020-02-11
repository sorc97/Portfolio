import React from 'react';
import PropTypes from 'prop-types';
import BlankLink from '../common/BlankLink';
import Icon from '../common/Icon';

const ContactsItem = ({
  name, description, link
}) => {
  const contact = (
    <>
      <Icon name={name} className='icons-list__icon' />
      <span>
        {description}
      </span>
    </>
  );

  const contactLink = (
    <BlankLink className='icons-list__link' href={link}>
      {contact}
    </BlankLink>
  );

  return (
    <li className="icons-list__item">
      {(link) ? contactLink : contact}
    </li>
  )
}

ContactsItem.propTypes = {
  name: PropTypes.string,
  description: PropTypes.string,
  link: PropTypes.string
}

ContactsItem.defaultProps = {
  name: "",
  description: "",
  link: ""
}

export default ContactsItem;
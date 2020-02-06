import React from 'react';
import PropTypes from 'prop-types';

const BlankLink = ({ href, children, className }) =>
  <a
    href={href}
    rel="noopener noreferrer"
    target="_blank"
    className={className}
  >
    {children}
  </a>

BlankLink.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
}

BlankLink.defaultProps = {
  href: "",
  className: ""
}

export default BlankLink;
import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ href, children, className }) =>
  <a
    href={href}
    rel="noopener noreferrer"
    target="_blank"
    className={className}
  >
    {children}
  </a>

Link.propTypes = {
  href: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string
}

Link.defaultProps = {
  href: "",
  className: ""
}

export default Link;
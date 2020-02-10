import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './TagsList.scss';

const TagsList = ({ tags = [] }) =>
  <ul className='tags'>
    {
      tags.map((tag, i) =>
        <Link to={`?filter=${tag}`} key={i} className='tags__item'>
          {tag}
        </Link>
      )
    }
  </ul>

TagsList.propTypes = {
  tags: PropTypes.arrayOf(PropTypes.string),
}

export default TagsList;
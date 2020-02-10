import React from 'react';
import PropTypes from 'prop-types';
import ProjectsList from './ProjectsList';
import './Category.scss';

const Category = ({ 
  projectsList = [], categoryTitle = ""
}) =>
  <div className='projects__category category'>
    <h2 className='category__title'>
      {categoryTitle}
    </h2>
    <ProjectsList projects={projectsList} />
  </div>

Category.propTypes = {
  projectsList: PropTypes.arrayOf(PropTypes.object), 
  categoryTitle: PropTypes.string
}

export default Category;
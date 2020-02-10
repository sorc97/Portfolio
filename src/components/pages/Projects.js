import React, { useContext } from 'react';
import queryString from 'query-string';
import { AppContext } from '../context/AppContext';
import Category from '../projects/Category';
import FilterDisplay from '../projects/FilterDisplay';
import './Projects.scss';

const Projects = ({ location = {} }) => {
  const { config: { projects } } = useContext(AppContext);
  const {
    caption,
    projectsList,
    filterText,
    filterPlaceholder
  } = projects;

  // Projects filtering
  const { filter: filterParam } = queryString.parse(location.search);
  let filteredProjects = [...projectsList];
  const filterValue = (filterParam) ? filterText : filterPlaceholder;

  if (filterParam) {
    filteredProjects = projectsList.filter(
      project => project.tags.includes(filterParam)
    )
  }

  // Get all categories
  const uniqCategories = new Set();

  filteredProjects.forEach(project => {
    uniqCategories.add(project.category);
  });

  // Make array from Set 
  const categories = [...uniqCategories];

  // Current categories components
  const currentCategories = categories.map(
    (category, i) => {
      const sortedProjects = filteredProjects.filter(
        project => project.category === category
      );

      return (
        <Category
          key={i}
          categoryTitle={category}
          projectsList={sortedProjects}
        />
      )
    })

  return (
    <section className='projects'>
      <div className='container'>
        <h1 className='caption projects__caption'>
          {caption}
        </h1>
        <FilterDisplay
          text={filterValue}
          value={filterParam}
          additionalClass='projects__filter-display' />
        {!filteredProjects.length &&
          <h3 className='subcaption'>No projects</h3>}
        {currentCategories}
      </div>
    </section>
  )
}

export default Projects;
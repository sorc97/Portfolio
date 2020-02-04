import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import queryString from 'query-string';
import Category from '../projects/Category';
import FilterDisplay from '../projects/FilterDisplay';
import './Projects.scss';

const Projects = ({ location }) => {
  const { config: { projects } } = useContext(AppContext);
  const {
    caption,
    projectsList,
    filterText
  } = projects;

  // Projects filtering
  const { filter: filterParam } = queryString.parse(location.search);
  let filteredProjects = [...projectsList];

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

  return (
    <section className='projects'>
      <h1 className='caption projects__caption'>
        {caption}
      </h1>
      {filterParam && <FilterDisplay text={filterText} value={filterParam} />}
      {!filteredProjects.length && <h3>No projects</h3>}
      {
        categories.map((category, i) => {
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
      }
    </section>
  )
}

export default Projects;
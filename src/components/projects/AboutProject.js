import React, { useState } from 'react';
import PropTypes from 'prop-types';
import BlankLink from '../common/BlankLink';
import Icon from '../common/Icon';
import Modal from '../common/Modal';
import ProjectDescription from './ProjectDescription';
import './AboutProject.scss';

const AboutProject = ({
  descriptionBtn,
  github,
  title,
  description
}) => {

  const [isModalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(false);
  }

  const openModal = () => {
    setModalOpen(true);
  }

  return (
    <div className='projects-item__about'>
      <button
        onClick={openModal}
        type='button'
        className='projects-item__description-btn'
      >
        {descriptionBtn}
      </button>
      <BlankLink
        href={github}
        className='projects-item__icon'
      >
        <Icon name='github' hover />
      </BlankLink>
      <Modal
        isOpen={isModalOpen}
        onHideModal={closeModal}
      >
        <ProjectDescription title={title} text={description} />
      </Modal>
    </div>
  )
}

AboutProject.propTypes = {
  descriptionBtn: PropTypes.string,
  github: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
}

AboutProject.defaultProps = {
  descriptionBtn: "Description",
  github: "#",
  title: "Unknown",
  description: ""
}

export default AboutProject;
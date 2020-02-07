import React, { useState } from 'react';
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
        <Icon name='github' hover/>
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

export default AboutProject;
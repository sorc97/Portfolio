import React from 'react';
import PropTypes from 'prop-types';
import Portal from '../portal/Portal';
import './Modal.scss';

const Modal = ({
  isOpen = false,
  children,
  onHideModal = f => f
}) => {

  const handleOverlayClick = e => {
    let target = e.target;

    if (!target.classList.contains("modal-overlay")) return;

    onHideModal();
  }

  return (
    isOpen &&
    <Portal>
      <div
        className="modal-overlay"
        onClick={handleOverlayClick}
      >
        <div className="modal-content">
          <button
            type='button'
            onClick={onHideModal}
            className="modal-content-close"
          >
            &times;
        </button>
          {children}
        </div>
      </div>
    </Portal>
  )
}

Modal.propTypes = {
  children: PropTypes.node,
  onHideModal: PropTypes.func
}

export default Modal;
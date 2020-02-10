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

    if (!target.classList.contains("modal")) return;

    onHideModal();
  }

  return (
    isOpen &&
    <Portal>
      <div
        className="modal"
        onClick={handleOverlayClick}
      >
        <div className="modal__content">
          <button
            type='button'
            onClick={onHideModal}
            className="modal__btn_close"
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
  isOpen: PropTypes.bool,
  children: PropTypes.node,
  onHideModal: PropTypes.func
}

export default Modal;
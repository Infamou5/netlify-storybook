import React, { useState } from 'react';
import './Modal.css';
import PropTypes from 'prop-types';
import Button from '../Button/Button.component';

export default function Modal({
  text,
  cornerClose,
  btnLabel,
  secondBtn,
  modalIcon,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const openAndCloseModal = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      {!isOpen && <button onClick={openAndCloseModal} label="open modal" />}
      {isOpen && (
        <div className="modal-bg">
          {cornerClose && (
            <button
              onClick={openAndCloseModal}
              type="button"
              className="closing-modal-button"
            >
              X
            </button>
          )}
          <p className="modal-text">{text}</p>
          <Button primary="true" label={btnLabel}></Button>
          {secondBtn && <Button label="CONTINUE SHOPPING"></Button>}
        </div>
      )}
    </div>
  );
}

Modal.propTypes = {
  // show: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  cornerClose: PropTypes.bool.isRequired,
  btnLabel: PropTypes.string.isRequired,
  secondBtn: PropTypes.bool,
  modalIcon: PropTypes.bool,
};
Modal.defaultProps = {
  secondBtn: false,
  modalIcon: false,
};

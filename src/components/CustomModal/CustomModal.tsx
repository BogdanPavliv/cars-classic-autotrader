import React from "react";
import Modal from "react-modal";
import "./CustomModal.scss";
import { CustomModalProps } from "../../types/others";

export const CustomModal: React.FC<CustomModalProps> = ({ isOpen, onClose, submitButton, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      overlayClassName={"modal-overlay"}
      className={"modal-content"}
      closeTimeoutMS={300}
      onRequestClose={() => onClose()}
      ariaHideApp={false}
    >
      <button className="modal-close-button" onClick={() => onClose()}>
        <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.6257 22.0711L8.34218 7.92893" stroke="inherit" strokeWidth="2" strokeLinecap="round"/>
          <path d="M22.6257 7.92893L8.34218 22.0711" stroke="inherit" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      </button>
      {children}
      {submitButton && (
        <button className="modal-submit-button" onClick={() => onClose()}>
          {submitButton}
        </button>
      )}
    </Modal>
  );
};

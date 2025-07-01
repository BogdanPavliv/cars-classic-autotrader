import React from "react";
import Modal from "react-modal";
import CloseIcon from "./close-icon.svg";
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
        <CloseIcon />
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

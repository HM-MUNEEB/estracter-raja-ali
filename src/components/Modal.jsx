import React from "react";
import { Modal, Button } from "react-bootstrap";
const CustomModal = ({ modal, handleClose, modalHeading, message }) => {
  return (
    <Modal show={modal} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>{modalHeading}</Modal.Title>
      </Modal.Header>
      <Modal.Body>{message}</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModal;

import React from "react";
import { Modal, Button } from "react-bootstrap";

function CelebrationModal({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Body className="text-center py-5">
        <h1 className="fw-bold text-success">🎉 Happy Birthday! 🎂</h1>
        <p className="fs-5 text-secondary">Enjoy your special day!</p>
        <Button variant="success" onClick={handleClose}>
          Close
        </Button>
      </Modal.Body>
    </Modal>
  );
}

export default CelebrationModal;

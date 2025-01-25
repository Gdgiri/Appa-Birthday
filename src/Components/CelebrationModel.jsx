import React from "react";
import { Modal, Button } from "react-bootstrap";

function CelebrationModal({ show, handleClose }) {
  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Body className="text-center py-5">
        <div
          className="d-inline-block"
          style={{
            perspective: "800px", // Adds perspective for 3D effect
          }}
        >
          <img
            src="https://github.com/user-attachments/assets/1d8c5604-559e-49e4-a380-2424dc0d9d66"
            alt="happy birthday"
            className="img-fluid rounded shadow"
            style={{
              transform: "rotateY(0deg) rotateX(0deg)",
              transition: "transform 0.5s, box-shadow 0.5s",
              boxShadow:
                "0 10px 20px rgba(0, 0, 0, 0.3), 0 6px 6px rgba(0, 0, 0, 0.23)",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform =
                "rotateY(15deg) rotateX(10deg) scale(1.05)";
              e.target.style.boxShadow =
                "0 15px 25px rgba(0, 0, 0, 0.4), 0 8px 10px rgba(0, 0, 0, 0.26)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "rotateY(0deg) rotateX(0deg) scale(1)";
              e.target.style.boxShadow =
                "0 10px 20px rgba(0, 0, 0, 0.3), 0 6px 6px rgba(0, 0, 0, 0.23)";
            }}
          />
        </div>
        <h1 className="fw-bold text-success mt-4">🎉 Happy Birthday! 🎂</h1>
        <p className="fs-5 text-secondary">Enjoy your special day!</p>
        <Button variant="success" onClick={handleClose}>
          Close
        </Button>
      </Modal.Body>
    </Modal>
  );
}

export default CelebrationModal;

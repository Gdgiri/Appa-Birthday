import React, { useEffect, useState } from "react";
import CelebrationModal from "./CelebrationModel";

function CountdownTimer() {
  const [countdown, setCountdown] = useState(10); // Start from 10
  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown((prev) => prev - 1);
      }, 1000); // Decrease by 1 every second

      return () => clearTimeout(timer);
    } else {
      setShowModal(true); // Show modal when countdown reaches 0
    }
  }, [countdown]);

  return (
    <div className="min-vh-100 d-flex flex-column align-items-center justify-content-center bg-gradient text-white">
      <h2 className="h4 mb-3">Countdown Timer:</h2>
      <p className="display-1 fw-bold text-warning">{countdown}</p>

      {/* Show Popup Modal */}
      <CelebrationModal show={showModal} handleClose={handleCloseModal} />
    </div>
  );
}

export default CountdownTimer;

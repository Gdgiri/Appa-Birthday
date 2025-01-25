import React, { useState } from "react";
import { motion } from "framer-motion";
import Dashboard from "./Dashboard";
import ButterflyEffect from "./ButterflyEffect";

function GiftBox() {
  const [isOpened, setIsOpened] = useState(false);
  const [showButterflies, setShowButterflies] = useState(false);

  const handleOpen = () => {
    setIsOpened(true);
    setTimeout(() => {
      setShowButterflies(true);
    }, 500);
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-primary position-relative">
      {!isOpened ? (
        <motion.div
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
          className="text-center"
        >
          <motion.div
            className="gift-box bg-danger rounded p-4 shadow position-relative"
            onClick={handleOpen}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <div className="gift-ribbon bg-warning position-absolute top-0 start-50 translate-middle-x"></div>
            <div className="gift-decoration bg-light"></div>
          </motion.div>
          <p className="mt-3 text-white fs-4 fw-bold">Click to open!</p>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="position-relative w-100 h-100"
        >
          {showButterflies && <ButterflyEffect />}
          <Dashboard />
        </motion.div>
      )}
    </div>
  );
}

export default GiftBox;

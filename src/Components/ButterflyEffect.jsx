import React from "react";
import { motion } from "framer-motion";

function ButterflyEffect() {
  const butterflies = Array.from({ length: 5 });

  return (
    <div className="position-absolute w-100 h-100 overflow-hidden">
      {butterflies.map((_, index) => (
        <motion.img
          key={index}
          src="https://github.com/user-attachments/assets/2bf1fb4f-3e0b-4c04-8a49-8567038bafa1"
          alt="Butterfly"
          className="position-absolute"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: "50px",
            height: "50px",
          }}
          animate={{
            y: [-50, 50, -50],
            x: [-50, 50, -50],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}

export default ButterflyEffect;

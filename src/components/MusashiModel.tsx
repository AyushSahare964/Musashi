import React from 'react';
import { motion } from 'framer-motion';
import modelMusashi from '@/assets/Model1.png';

const MusashiModel: React.FC = () => {
  // Animation variants for the continuous floating effect
  const floatVariants = {
    initial: { y: 0, scale: 1 },
    animate: {
      y: [-5, 5, -5], // Slow up and down float
      scale: [1, 1.02, 1], // Subtle "breathing" scale effect
      transition: {
        duration: 6, // Slow, deliberate movement (6 seconds per loop)
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  // Animation for a subtle glow/shadow pulsing behind him
  const shadowVariants = {
    animate: {
      opacity: [0.4, 0.7, 0.4],
      scale: [0.9, 1.1, 0.9],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none">
      
      {/* Atmospheric Pulse behind the model (Optional depth effect) */}
      <motion.div
        variants={shadowVariants}
        animate="animate"
        className="absolute w-[500px] h-[500px] bg-zinc-900/10 blur-[100px] rounded-full hidden md:block"
      />

      {/* The Main Model Container */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        // Opacity handles readability on different screen sizes
        className="relative w-full max-w-lg md:max-w-xl px-4 opacity-20 md:opacity-100"
      >
        {/* The animated wrapper for the image */}
        <motion.div
          variants={floatVariants}
          initial="initial"
          animate="animate"
        >
          <img 
            src={modelMusashi} 
            alt="Miyamoto Musashi" 
            className="w-full h-auto object-contain grayscale contrast-125 drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]" 
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MusashiModel;
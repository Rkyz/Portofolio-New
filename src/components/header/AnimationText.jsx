import React, { useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedTypingH1 = ({ text, delay }) => {
  const [showText, setShowText] = useState(true);

  const handleAnimationComplete = () => {
    setShowText(false);
    setTimeout(() => {
      setShowText(true);
    }, text.length * delay);
  };

  const variants = {
    animate: {
      opacity: [1],
      transition: {
        duration: 1,
        repeat: Infinity, // Mengulangi animasi secara terus-menerus
        repeatType: 'loop', // Mengulangi animasi dengan tipe loop
        repeatDelay: delay * (text.length + 1), // Penundaan sebelum pengulangan dimulai
        ease: 'easeInOut', // Efek animasi yang lebih smooth
      },
    },
  };

  return (
    <motion.h1
      initial={{ opacity: 0 }} // Mulai dari posisi luar layar sebelah kiri
      animate="animate"
      variants={variants}
      style={{ position: 'relative' }}
    >
      {showText && (
        <>
          {text.split('').map((char, index) => (
            <motion.span
              key={index}
              style={{ display: 'inline' }}
              animate={{
                opacity: [0, 1],
              }}
              transition={{ duration: 0.5, delay: index  }}
              exit={{ opacity: 0 }}
              onAnimationComplete={index === text.length - 1 ? handleAnimationComplete : null}
            >
              {char}
            </motion.span>
          ))}
        </>
      )}
    </motion.h1>
  );
};

export default AnimatedTypingH1;

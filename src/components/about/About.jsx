import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';
import './About.css';
import CTA from './CTA';

const About = () => {
  const [isHoveredOne, setIsHoveredOne] = useState(false);
  const [isAndroid, setIsAndroid] = useState(false);
  const [swiper, setSwiper] = useState(null);

  const handleMouseEnterOne = () => {
    setIsHoveredOne(true);
  };

  const handleMouseLeaveOne = () => {
    setIsHoveredOne(false);
  };

  const animationVariants = {
    initial: {
      y: 0, // Initial position of the element
    },
    animate: {
      y: [-10, 10], // Animation movement
      transition: {
        duration: 1.5, // Movement duration
        repeat: Infinity, // Enable infinite animation
        repeatType: 'reverse', // Reverse direction after reaching the end
      },
    },
  };

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    setIsAndroid(userAgent.match(/Android/i));

    if (window.innerWidth <= 768 && isAndroid && swiper === null) {
      const newSwiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
      });
      setSwiper(newSwiper);
    }
  }, [swiper, isAndroid]);

  return (
    <motion.section id="about">
      <h5 className="text-light">Portfolio</h5>
      <h2>About Me</h2>
      <motion.div className="container-card" initial="initial" animate="animate" variants={animationVariants}>
        <div className="card-body-one">
          <motion.div
            className={`card-body ${isHoveredOne ? 'rotate' : ''}`}
            onMouseEnter={handleMouseEnterOne}
            onMouseLeave={handleMouseLeaveOne}
          ></motion.div>
          <motion.div
            className={`card-img ${isHoveredOne ? 'rotate' : ''}`}
            onMouseEnter={handleMouseEnterOne}
            onMouseLeave={handleMouseLeaveOne}
          >
            <img src="path/to/image" alt="idk" />
          </motion.div>
        </div>
        <div className="card-body-two">
          <h1 className="h1-intro">Let Me Introduce Myself</h1>
          <p className="text-lorem">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque, fuga. Qui aspernatur dicta suscipit,
            assumenda distinctio, neque deserunt architecto iusto placeat dolores ratione magni odio at rem dolor
            eveniet nostrum.
          </p>
          <CTA />
        </div>
      </motion.div>
      <motion.div className="shadow-circle"></motion.div>
    </motion.section>
  );
};

export default About;

import React, { useState, useEffect } from 'react';
import '../nav/Nav.css';
import { motion } from 'framer-motion';
import { AiOutlineHome, AiOutlineUser, AiOutlineBook, AiOutlineCustomerService } from 'react-icons/ai';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Hanya menambahkan event listener setelah komponen siap
    if (!isReady) {
      setIsReady(true);
    } else {
      window.addEventListener('scroll', handleScroll);
    }

    // Membersihkan event listener ketika komponen di-unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isReady]);

  return (
    <motion.div className={`navbar-div ${isScrolled ? 'active' : ''}`}
    transition={{ delay: 1, duration: 2 }}
    >
      <div className="logo">
        <p className='brand-logo'>Brand</p>
      </div>
      <nav>
        <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}>
          <AiOutlineHome className='icons' />
          <p className={`navbar-title ${isScrolled ? 'active' : ''}`}>Home</p>
        </a>
        <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}>
          <AiOutlineUser className='icons' />
          <p className={`navbar-title ${isScrolled ? 'active' : ''}`}>About</p>
        </a>
        <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}>
          <AiOutlineBook className='icons' />
          <p className={`navbar-title ${isScrolled ? 'active' : ''}`}>Contact</p>
        </a>
        <a href="#testimonial" onClick={() => setActiveNav('#testimonial')} className={activeNav === '#testimonial' ? 'active' : ''}>
          <AiOutlineCustomerService className='icons' />
          <p className={`navbar-title ${isScrolled ? 'active' : ''}`}>Testimonial</p>
        </a>
      </nav>
    </motion.div>
  );
}

export default Nav;

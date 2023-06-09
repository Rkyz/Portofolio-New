import React from 'react';
import { motion } from 'framer-motion';
import './index.css';
import Header from './components/header/Header';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Experience from './components/experience/Experience';
import Testimonial from './components/testimonial/Testimonial';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';


function App() {

  return (
    <>
      <motion.div
      id='header'
      >
        <Header />
      </motion.div>
      <Nav />
      <motion.section
        id="about"
      >
        <About />
      </motion.section>
      <motion.section
        id="experience"
      >
        <Experience />
      </motion.section>
      <motion.section
        id="testimonial"
      >
        <Testimonial />
      </motion.section>
      <motion.section
        id="contact"
      >
        <Contact />
      </motion.section>
      <Footer  />
    </>
  );
}

export default App;

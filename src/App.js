// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Header from './components/Header'; // your nav with handleNav(section)
import Footer from './components/Footer';

import Home from './Pages/Home';
import OurservicesPage from './Pages/OurservicesPage';
import AboutusPage from './Pages/AboutusPage';
import LoanProcess from './Pages/LoanProcess';
import LoanApplyForm from './Pages/LoanApplyForm';
import ContactPage from './Pages/ContactPage';
import CheckStatus from './Pages/CheckStatus';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Scroll fade animation wrapper
const ScrollFadeUp = ({ children, delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1.2, delay, ease: 'easeOut' },
      });
    } else {
      controls.start({
        opacity: 0,
        y: 50,
        transition: { duration: 0.6, ease: 'easeIn' },
      });
    }
  }, [inView, controls, delay]);

  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 50 }} animate={controls}>
      {children}
    </motion.div>
  );
};

// ✅ Home Page wrapper with scroll-to-section logic
function HomeWrapper() {
  const location = useLocation();
  const section = location.state?.section;

  useEffect(() => {
    if (section) {
      const el = document.getElementById(section);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 500); // delay ensures animation mount
      }
    }
  }, [section]);

  return (
    <>
      <ScrollFadeUp delay={0}>
        <section id="home"><Home /></section>
      </ScrollFadeUp>

      <ScrollFadeUp delay={0.2}>
        <section id="aboutus"><AboutusPage /></section>
      </ScrollFadeUp>

      <ScrollFadeUp delay={0.4}>
        <section id="services"><OurservicesPage /></section>
      </ScrollFadeUp>

      <ScrollFadeUp delay={0.6}>
        <section id="loanprocess"><LoanProcess /></section>
      </ScrollFadeUp>

      <ScrollFadeUp delay={0.8}>
        <section id="contact"><ContactPage /></section>
      </ScrollFadeUp>
    </>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header /> {/* Include buttons that call navigate('/', { state: { section: 'aboutus' } }) */}

      <Routes>
        <Route path="/" element={<HomeWrapper />} />
        <Route path="/status" element={<CheckStatus />} />
        <Route path="/apply" element={<LoanApplyForm />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;

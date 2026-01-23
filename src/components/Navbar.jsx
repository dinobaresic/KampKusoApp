import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="navbar-root">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`navbar-content ${isScrolled ? 'scrolled' : 'initial'}`}
      >
        {/* Logo Section */}
        <div className="nav-logo-group">
          <span className="nav-logo-main">Kamp Kušo</span>
          <span className="nav-logo-sub">Premium Resort</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="nav-menu hidden-mobile">
          {['O nama', 'Parcele', 'Plaža', 'Kontakt'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '')}`}
              className="nav-link"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Right Side Actions */}
        <div className="nav-actions">
          <a
            href="https://wa.me/385922542249?text=Bok%20Zoran%2C%20zainteresiran%20sam%20za%20najam%20parcele%20u%20Va%C5%A1em%20kampu"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp hidden-mobile"
            style={{ textDecoration: 'none' }}
          >
            WhatsApp
          </a>

          {/* Mobile Menu Toggle */}
          <button className="mobile-toggle">
            <span></span>
            <span style={{ width: '75%', alignSelf: 'flex-end' }}></span>
          </button>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;

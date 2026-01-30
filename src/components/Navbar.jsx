import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="navbar-root">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`navbar-content ${isScrolled ? 'scrolled' : 'initial'}`}
      >
        {/* Logo Section */}
        <a href="/" className="nav-logo-group">
          <span className="nav-logo-main">Kamp Kušo</span>
          <span className="nav-logo-sub">Premium Resort</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="nav-menu hidden-mobile">
          {['O nama', 'Parcele', 'Plaža', 'Kontakt'].map((item) => (
            <a
              key={item}
              href={item === 'Kontakt' ? '/kontakt' : item === 'Plaža' ? '/plaza' : `/#${item.toLowerCase().replace(' ', '')}`}
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
          <button className="mobile-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            <motion.span
              animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 8 : 0 }}
            />
            <motion.span
              animate={{ opacity: isMenuOpen ? 0 : 1 }}
            />
            <motion.span
              animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -8 : 0, width: isMenuOpen ? '24px' : '18px' }}
              style={{ width: '75%', alignSelf: 'flex-end' }}
            />
          </button>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="mobile-menu-overlay"
          >
            <nav className="mobile-nav-list">
              {['O nama', 'Parcele', 'Plaža', 'Kontakt'].map((item, i) => (
                <motion.a
                  key={item}
                  href={item === 'Kontakt' ? '/kontakt' : item === 'Plaža' ? '/plaza' : `/#${item.toLowerCase().replace(' ', '')}`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.1 }}
                  className="mobile-nav-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
              <motion.a
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                href="https://wa.me/385922542249?text=Bok%20Zoran%2C%20zainteresiran%20sam%20za%20najam%20parcele%20u%20Va%C5%A1em%20kampu"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp mt-8"
                style={{ textDecoration: 'none', display: 'inline-flex' }}
              >
                WhatsApp Rezezervacija
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './components/Home';
import ContactPage from './components/ContactPage';
import BeachPage from './components/BeachPage';
import './index.css';

// Lazy load Masterplan
const Masterplan = lazy(() => import('./components/Masterplan'));

// Simple loading fallback
const Loader = () => (
  <div className="h-64 w-full flex items-center justify-center bg-black text-white/20">
    <span className="animate-pulse font-black uppercase tracking-widest text-xs">Učitavanje...</span>
  </div>
);

// ScrollToTop component
const ScrollToTop = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/masterplan"
          element={
            <Suspense fallback={<Loader />}>
              <Masterplan />
            </Suspense>
          }
        />
        <Route path="/kontakt" element={<ContactPage />} />
        <Route path="/plaza" element={<BeachPage />} />
      </Routes>
    </Router>
  );
}

export default App;

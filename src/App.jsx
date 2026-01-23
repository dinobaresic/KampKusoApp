import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Plots from './components/Plots';
import Location from './components/Location';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bg-light">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Features />
        <Plots />
        <Location />
      </main>
      <Footer />
    </div>
  );
}

export default App;

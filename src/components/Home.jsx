import React, { Suspense, lazy } from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from './Navbar';
import Hero from './Hero';
import Experience from './Experience';
import About from './About';
import Footer from './Footer';

// Lazy load heavy/below-fold components
const Features = lazy(() => import('./Features'));
const Plots = lazy(() => import('./Plots'));
const Location = lazy(() => import('./Location'));

// Simple loading fallback
const Loader = () => (
    <div className="h-64 w-full flex items-center justify-center bg-black text-white/20">
        <span className="animate-pulse font-black uppercase tracking-widest text-xs">Učitavanje...</span>
    </div>
);

const Home = () => {
    return (
        <div className="min-h-screen bg-black">
            <Helmet>
                <title>Kamp Kušo | Premium Resort | Drage, Pakoštane</title>
                <meta name="description" content="Kamp Kušo - Vrhunski kamping doživljaj u srcu Dalmacije. Rezervirajte svoje mjesto u raju, godišnji paušal za mobilne kućice." />
                <meta name="keywords" content="Kamp Kušo, Kamp Drage, Kamp Pakoštane, Mobilne kućice Dalmacija, Godišnji paušal" />
                <meta property="og:title" content="Kamp Kušo | Premium Resort" />
                <meta property="og:description" content="Vaš privatni komadić Dalmacije. Ekskluzivne parcele uz more." />
            </Helmet>

            <Navbar />

            <main>
                <Hero />
                <Experience />
                <About />

                <Suspense fallback={<Loader />}>
                    <Features />
                </Suspense>

                <Suspense fallback={<Loader />}>
                    <Plots />
                </Suspense>

                <Suspense fallback={<Loader />}>
                    <Location />
                </Suspense>
            </main>

            <Footer />
        </div>
    );
};

export default Home;

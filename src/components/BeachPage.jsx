import React from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';
import videoSource from '../assets/plaza.mp4';
import { Waves, Sun, MapPin, Maximize2 } from 'lucide-react';

const BeachPage = () => {
    const videoRef = React.useRef(null);

    const toggleFullScreen = () => {
        if (videoRef.current) {
            if (videoRef.current.requestFullscreen) {
                videoRef.current.requestFullscreen();
            } else if (videoRef.current.webkitRequestFullscreen) { /* Safari */
                videoRef.current.webkitRequestFullscreen();
            } else if (videoRef.current.msRequestFullscreen) { /* IE11 */
                videoRef.current.msRequestFullscreen();
            }
        }
    };

    return (
        <div className="min-h-screen bg-black text-white selection:bg-orange-500/30 font-sans">
            <Navbar />

            {/* Video Hero Section */}
            <section className="hero-section !p-0 !items-center relative group">
                {/* Background Video */}
                <div className="hero-bg-wrapper">
                    <div className="hero-overlay" style={{ background: 'rgba(0,0,0,0.4)' }} />
                    <video
                        ref={videoRef}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="hero-image"
                        style={{ transform: 'scale(1.15)', transformOrigin: 'center center' }}
                    >
                        <source src={videoSource} type="video/mp4" />
                    </video>
                </div>

                <div className="container hero-content pb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="hero-text-container"
                        style={{ marginBottom: '2rem' }}
                    >
                        <span className="text-orange font-bold tracking-[0.2em] uppercase text-sm md:text-base mb-6 block">
                            KAMP KUŠO IZ ZRAKA
                        </span>
                        <h1 className="title-massive text-white mb-4" style={{ lineHeight: 0.9 }}>
                            SIMFONIJA <br />
                            <span className="text-white">MORA I JEZERA</span>
                        </h1>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="hero-description"
                    >
                        Jedinstvena oaza smještena na tankom pojasu kopna između Jadranskog mora i Vranskog jezera.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <button
                            onClick={toggleFullScreen}
                            className="btn-impact btn-ghost"
                            style={{ backdropFilter: 'blur(10px)', marginTop: '20px' }}
                        >
                            <Maximize2 size={20} />
                            Gledaj Puni Zaslon
                        </button>
                    </motion.div>
                </div>

                {/* Decorative Element */}
                <motion.div
                    initial={{ opacity: 0, x: -100, rotate: -30 }}
                    animate={{ opacity: 0.03, x: 0, rotate: -20 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="hero-kuso-decor"
                >
                    <h1>DRAGE</h1>
                </motion.div>
            </section>

            {/* Content Section */}
            <section className="section-padding relative overflow-hidden">
                <div className="container">
                    <div className="grid-5" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3rem', maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="title-section mb-8">
                                GDJE SE <span className="text-orange">PLAVETNILA</span> SPAJAJU
                            </h2>
                            <p className="hero-description" style={{ fontSize: '1.2rem', marginBottom: '2rem', lineHeight: '1.8' }}>
                                <strong>Uvala Lučica</strong> pravi je dragulj mjesta <strong>Drage</strong>, smještenog u srcu Dalmacije.
                                Ono što ovu lokaciju čini svjetskim raritetom jest njezin položaj na uskom kopnenom pojasu – s jedne strane vas oplakuje kristalno čisto <strong>Jadransko more</strong>,
                                a samo par stotina metara dalje prostire se <strong>Vransko jezero</strong>, najveće prirodno jezero u Hrvatskoj i ornitološki rezervat.
                            </p>
                            <p className="hero-description" style={{ fontSize: '1.1rem' }}>
                                Ovdje jutra možete provoditi uz šum morskih valova, a popodneva u miru netaknute prirode jezera.
                                Kamp Kušo nalazi se točno u ovom prirodnom fenomenu, nudeći vam savršenu bazu za istraživanje oba svijeta.
                            </p>
                        </motion.div>

                        {/* Features Grid */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="grid-3"
                            style={{ width: '100%', marginTop: '2rem' }}
                        >
                            <div className="mini-feature">
                                <div className="mini-icon-circle">
                                    <Waves size={28} />
                                </div>
                                <span className="mini-label">Jadransko More</span>
                            </div>

                            <div className="mini-feature">
                                <div className="mini-icon-circle">
                                    <Sun size={28} />
                                </div>
                                <span className="mini-label">Vransko Jezero</span>
                            </div>

                            <div className="mini-feature">
                                <div className="mini-icon-circle">
                                    <MapPin size={28} />
                                </div>
                                <span className="mini-label">Drage, Pakoštane</span>
                            </div>
                        </motion.div>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default BeachPage;

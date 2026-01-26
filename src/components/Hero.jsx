import React from 'react';
import { motion } from 'framer-motion';
import sunsetHero from '../assets/units_evening.jpg';

const Hero = () => {
    return (
        <section id="home" className="hero-section !p-0 !items-center">
            {/* Dark Background with Overlay */}
            <motion.div
                className="hero-bg-wrapper"
            >
                <div className="hero-overlay" />
                <img
                    src={sunsetHero}
                    alt="Kamp Kušo"
                    className="hero-image"
                />
            </motion.div>

            <div className="container hero-content pb-40">
                <div className="hero-text-container">
                    <motion.h1
                        initial={{ y: "100%" }}
                        whileInView={{ y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="title-massive text-white mb-4"
                        style={{ marginBottom: '1rem' }}
                    >
                        TVOJA OAZA <br />
                        <span className="text-white">CIJELU GODINU</span>
                    </motion.h1>
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="hero-description"
                >
                    Ekskluzivna mjesta za kamp kućice i mobilne kućice s godišnjim paušalom. Vaš privatni komadić Dalmacije čeka na vas.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="hero-actions"
                >
                    <button className="btn-impact btn-solid-orange group">
                        Provjeri dostupnost
                        <motion.span
                            className="inline-block"
                            whileHover={{ x: 5 }}
                            style={{ display: 'inline-block', marginLeft: '0.5rem' }}
                        >
                            &rarr;
                        </motion.span>
                    </button>
                    <button className="btn-impact btn-ghost">
                        Traži više
                    </button>
                </motion.div>
            </div>

            {/* Decorative Branding */}
            <motion.div
                initial={{ opacity: 0, x: -100, rotate: -30 }}
                whileInView={{ opacity: 0.03, x: 0, rotate: -20 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="hero-kuso-decor"
            >
                <h1>KUSO</h1>
            </motion.div>
        </section>
    );
};

export default Hero;

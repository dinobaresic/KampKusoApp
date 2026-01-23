import React from 'react';
import { motion } from 'framer-motion';

const Location = () => {
    return (
        <section id="location" className="section-padding bg-black" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="title-section text-white"
                >
                    NAŠA <span className="text-orange">LOKACIJA</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="location-wrapper"
                >
                    <iframe
                        className="location-map"
                        src="https://maps.google.com/maps?q=43.876433,15.553582&t=&z=15&ie=UTF8&iwloc=&output=embed"
                        loading="lazy"
                        allowFullScreen
                    ></iframe>
                </motion.div>
            </div>
        </section>
    );
};

export default Location;

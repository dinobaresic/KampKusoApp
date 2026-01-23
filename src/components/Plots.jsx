import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';
import complexAerial from '../assets/complex_aerial.jpg';

const Plots = () => {
    const plots = [
        { id: '01', name: "Premium Zona", size: "140m²", status: "Dostupno" },
        { id: '02', name: "Hill Zona", size: "125m²", status: "Dostupno" },
        { id: '03', name: "Central Zona", size: "160m²", status: "Dostupno" }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section id="parcele" className="section-padding bg-black" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="title-section text-white"
                >
                    GODIŠNJI <span className="text-orange">PAUŠAL</span>
                </motion.h2>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid-3"
                >
                    {plots.map((plot) => {
                        // Map plot names to masterplan zone IDs
                        const zoneMap = {
                            "Premium Zona": "premium",
                            "Hill Zona": "hill",
                            "Central Zona": "central"
                        };
                        const zoneId = zoneMap[plot.name];

                        return (
                            <Link
                                key={plot.id}
                                to={`/masterplan?zone=${zoneId}`}
                                style={{ textDecoration: 'none', display: 'block' }}
                            >
                                <motion.div
                                    variants={itemVariants}
                                    className="plot-card"
                                >
                                    <span className="plot-id">
                                        {plot.id}
                                    </span>

                                    <div className="plot-content">
                                        <h4 className="plot-name text-white">
                                            {plot.name}
                                        </h4>
                                        <span className="plot-size">
                                            Veličina: {plot.size}
                                        </span>

                                        <div className="plot-footer">
                                            <span className={`status-pill ${plot.status === 'Dostupno' ? 'text-green' : 'text-red'}`} style={{ color: plot.status === 'Dostupno' ? '#00E676' : '#ef4444' }}>
                                                {plot.status}
                                            </span>
                                            <motion.div
                                                whileHover={{ rotate: 45, color: "#FF5C00" }}
                                                className="text-white"
                                                style={{ opacity: 0.5 }}
                                            >
                                                <ExternalLink size={20} />
                                            </motion.div>
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        );
                    })}
                </motion.div>

                {/* Big Aerial Visual Button */}
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                    className="masterplan-wrapper"
                >
                    <motion.img
                        src={complexAerial}
                        className="masterplan-img"
                    />
                    <div className="masterplan-overlay">
                        <Link
                            to="/masterplan"
                            className="btn-impact btn-solid-orange"
                            style={{ boxShadow: '0 20px 50px rgba(0,0,0,0.5)', textDecoration: 'none' }}
                        >
                            Pregledaj Masterplan
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Plots;

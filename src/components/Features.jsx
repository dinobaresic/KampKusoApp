import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, Zap, Droplets, Warehouse } from 'lucide-react';

const Features = () => {
    const features = [
        { icon: <Zap />, name: "Struja & Voda" },
        { icon: <Wifi />, name: "High-Speed Wi-Fi" },
        { icon: <Warehouse />, name: "Održavanje Parcela" },
        { icon: <Droplets />, name: "Sanitarni Čvorovi" }
    ];

    return (
        <section className="section-padding bg-black" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="container">
                <div className="grid-4">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="mini-feature"
                        >
                            <div className="mini-icon-circle">
                                <div>
                                    {React.cloneElement(f.icon, { size: 28 })}
                                </div>
                            </div>
                            <span className="mini-label">
                                {f.name}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;

import React from 'react';
import { motion } from 'framer-motion';
import { Wifi, Zap, Droplets, Warehouse, Sparkles } from 'lucide-react';

const Features = () => {
    const features = [
        { icon: <Zap />, name: "Struja & Voda" },
        { icon: <Wifi />, name: "High-Speed Wi-Fi" },
        { icon: <Warehouse />, name: "Održavanje Parcela" },
        { icon: <Droplets />, name: "Sanitarni Čvorovi" },
        { icon: <Sparkles />, name: "Čišćenje & Održavanje" }
    ];

    return (
        <section className="section-padding bg-black" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="container">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12 items-start justify-center">
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

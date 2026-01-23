import React from 'react';
import { motion } from 'framer-motion';
import { Anchor, ShieldCheck, Waves } from 'lucide-react';

const About = () => {
    const cards = [
        {
            icon: <Anchor className="text-orange" size={32} />,
            title: "Vaš stalni vez s morem",
            text: "Zaboravite na traženje smještaja svake godine. Uz godišnji paušal, vaša kućica je spremna za vas u svakom trenutku."
        },
        {
            icon: <ShieldCheck className="text-orange" size={32} />,
            title: "Sigurnost i mir",
            text: "Kamp je pod stalnim nadzorom i brigom naših djelatnika. Vaša imovina je sigurna i kada niste tamo."
        },
        {
            icon: <Waves className="text-orange" size={32} />,
            title: "Luksuz Uvale Lučica",
            text: "Uživajte u kristalnom moru i hladu borove šume na parcelama dizajniranim za maksimalnu privatnost."
        }
    ];

    return (
        <section id="onama" className="section-padding bg-black" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid-3"
                >
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.8 }}
                            className="feature-card"
                        >
                            <div className="feature-icon-box">
                                {card.icon}
                            </div>
                            <h3 className="feature-title">
                                {card.title}
                            </h3>
                            <p className="feature-text">
                                {card.text}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default About;

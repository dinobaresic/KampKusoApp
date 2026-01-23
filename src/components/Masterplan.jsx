import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Anchor, Warehouse, MapPin, Zap, Droplets, Trophy, Mountain, Focus, MousePointerClick } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import masterplanMap from '../assets/masterplan_map.png';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            stiffness: 50,
            damping: 15
        }
    }
};

const zones = {
    premium: {
        id: 'premium',
        name: 'Premium Zona',
        price: '7.000€',
        desc: 'Parcele KP1, KP2, KP3 i KP4. Prvi red do sadržaja, najveća privatnost.',
        icon: <Trophy size={32} color="#FFD700" />,
        color: '#FFD700',
        bg: 'rgba(255, 215, 0, 0.1)',
        // Left vertical column (KP1-KP4) - 19% width
        clipPath: 'polygon(0% 0%, 19% 0%, 19% 100%, 0% 100%)'
    },
    hill: {
        id: 'hill',
        name: 'Hill Zona',
        price: '6.500€',
        desc: 'Gornji red (KP14 - KP17). Panoramski pogled na cijeli kamp.',
        icon: <Mountain size={32} color="#4ADE80" />,
        color: '#4ADE80',
        bg: 'rgba(74, 222, 128, 0.1)',
        // Top row, extending from Premium boundary (19%) to right edge
        clipPath: 'polygon(19% 0%, 100% 0%, 100% 32%, 19% 32%)'
    },
    central: {
        id: 'central',
        name: 'Central Zona',
        price: '6.000€',
        desc: 'Središnji dio (KP10, KM5-6) i parcele uz recepciju. Blizina svih sadržaja.',
        icon: <Focus size={32} color="#60A5FA" />,
        color: '#60A5FA',
        bg: 'rgba(96, 165, 250, 0.1)',
        // Everything else: Middle block + Bottom Right, starting from 19%
        clipPath: 'polygon(19% 32%, 100% 32%, 100% 100%, 19% 100%)'
    }
};

const Masterplan = () => {
    // Initial state is null (no selection)
    const [activeZone, setActiveZone] = useState(null);

    const handleZoneChange = (zoneId) => {
        // Toggle if clicking same zone? Or just set. Let's just set for now, or toggle off if same.
        if (activeZone === zoneId) {
            setActiveZone(null);
        } else {
            setActiveZone(zoneId);
        }
    };

    return (
        // INLINE STYLES TO FORCE LAYOUT
        <div style={{
            minHeight: '100vh',
            backgroundColor: '#000000',
            color: '#ffffff',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: '100%',
            overflowX: 'hidden'
        }}>
            <Helmet>
                <title>Masterplan | Kamp Kušo</title>
                <meta name="description" content="Detaljan plan kampa. KP parcele za mobilne kućice i KM parcele za kampere/brodove." />
            </Helmet>

            <Navbar />

            {/* MAIN CONTENT WRAPPER */}
            <main style={{
                width: '100%',
                maxWidth: '1400px',
                paddingTop: '280px',
                paddingBottom: '120px',
                paddingLeft: '24px',
                paddingRight: '24px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxSizing: 'border-box'
            }}>

                {/* HEADER SECTION */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    style={{
                        width: '100%',
                        maxWidth: '900px',
                        textAlign: 'center',
                        marginBottom: '60px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <motion.div variants={itemVariants} style={{ marginBottom: '40px' }}>
                        <a
                            href="/"
                            className="group"
                            style={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '12px',
                                color: 'rgba(255,255,255,0.6)',
                                fontSize: '14px',
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                                letterSpacing: '0.15em',
                                padding: '12px 30px',
                                borderRadius: '999px',
                                border: '1px solid rgba(255,255,255,0.1)',
                                backgroundColor: 'rgba(255,255,255,0.05)',
                                textDecoration: 'none',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <ArrowLeft size={16} />
                            Povratak
                        </a>
                    </motion.div>

                    <motion.h1
                        variants={itemVariants}
                        style={{
                            fontSize: 'clamp(3rem, 10vw, 7rem)',
                            fontWeight: '900',
                            lineHeight: '0.9',
                            marginBottom: '30px',
                            textTransform: 'uppercase',
                            letterSpacing: '-0.05em'
                        }}
                    >
                        MASTER<span style={{ color: '#FF5C00' }}>PLAN</span>
                    </motion.h1>
                </motion.div>

                {/* ZONE SELECTOR */}
                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    style={{
                        display: 'flex',
                        gap: '12px',
                        marginBottom: '40px',
                        flexWrap: 'wrap',
                        justifyContent: 'center'
                    }}
                >
                    {Object.values(zones).map((zone) => (
                        <button
                            key={zone.id}
                            onClick={() => handleZoneChange(zone.id)}
                            style={{
                                padding: '12px 28px',
                                borderRadius: '99px',
                                border: `1px solid ${activeZone === zone.id ? zone.color : 'rgba(255,255,255,0.1)'}`,
                                backgroundColor: activeZone === zone.id ? zone.bg : 'transparent',
                                color: activeZone === zone.id ? zone.color : 'rgba(255,255,255,0.5)',
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                                letterSpacing: '0.1em',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                fontSize: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px'
                            }}
                        >
                            {activeZone === zone.id && (
                                <span style={{
                                    width: '6px',
                                    height: '6px',
                                    backgroundColor: zone.color,
                                    borderRadius: '50%',
                                    display: 'block'
                                }} />
                            )}
                            {zone.name}
                        </button>
                    ))}
                </motion.div>

                {/* CONTENT GRID */}
                <div
                    className="masterplan-grid"
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(12, 1fr)',
                        gap: '40px',
                        width: '100%',
                        alignItems: 'start'
                    }}
                >
                    <style>{`
                        @media (max-width: 1280px) {
                            .masterplan-grid {
                                display: flex !important;
                                flex-direction: column !important;
                            }
                        }
                    `}</style>

                    {/* MAP CONTAINER */}
                    <div style={{ gridColumn: 'span 8', width: '100%' }}>
                        <motion.div
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            style={{
                                backgroundColor: '#0A0A0A',
                                padding: '10px',
                                borderRadius: '40px',
                                border: '1px solid rgba(255,255,255,0.1)',
                                position: 'relative',
                                overflow: 'hidden',
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)'
                            }}
                        >
                            <div style={{ position: 'relative', borderRadius: '32px', overflow: 'hidden' }}>
                                {/* LAYER 1: BASE MAP (Blurred if activeZone, Clear if not) */}
                                <img
                                    src={masterplanMap}
                                    alt="Masterplan Map Blur"
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                        display: 'block',
                                        // Blur only if a zone is active
                                        filter: activeZone ? 'blur(8px) grayscale(0.8) brightness(0.3)' : 'blur(0px) grayscale(0) brightness(1)',
                                        transition: 'all 0.5s ease',
                                        transform: 'scale(1.02)'
                                    }}
                                />

                                {/* LAYER 2: SHARP FOCUS (Only visible if activeZone) */}
                                <div style={{
                                    position: 'absolute',
                                    inset: 0,
                                    zIndex: 10,
                                    // Clip path active based on zone, or hidden
                                    clipPath: activeZone ? zones[activeZone].clipPath : 'polygon(0 0, 0 0, 0 0, 0 0)',
                                    opacity: activeZone ? 1 : 0,
                                    transition: 'clip-path 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease',
                                    backgroundColor: 'rgba(0,0,0,0.2)'
                                }}>
                                    <img
                                        src={masterplanMap}
                                        alt="Masterplan Map Focus"
                                        style={{
                                            width: '100%',
                                            height: 'auto',
                                            display: 'block',
                                            filter: 'brightness(1.2) contrast(1.1)',
                                            transform: 'scale(1.02)'
                                        }}
                                    />
                                </div>
                            </div>

                            {activeZone && (
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    style={{
                                        position: 'absolute',
                                        top: '30px',
                                        left: '30px',
                                        backgroundColor: 'rgba(0,0,0,0.8)',
                                        backdropFilter: 'blur(10px)',
                                        padding: '12px 20px',
                                        borderRadius: '16px',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '10px',
                                        zIndex: 20
                                    }}
                                >
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: zones[activeZone].color }}></div>
                                    <span style={{ fontSize: '10px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                        Prikaz: {zones[activeZone].name}
                                    </span>
                                </motion.div>
                            )}
                        </motion.div>
                    </div>

                    {/* INFO COLUMN */}
                    <div style={{ gridColumn: 'span 4', width: '100%', display: 'flex', flexDirection: 'column', gap: '30px' }}>

                        {/* 1. DYNAMIC ZONE DETAILS (Only if activeZone) */}
                        <AnimatePresence mode="wait">
                            {activeZone ? (
                                <motion.div
                                    key={activeZone}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    style={{
                                        backgroundColor: '#0F0F0F',
                                        padding: '40px',
                                        borderRadius: '40px',
                                        border: `1px solid ${zones[activeZone].color}40`,
                                        position: 'relative',
                                        cursor: 'default',
                                        boxShadow: `0 20px 40px -10px ${zones[activeZone].color}10`,
                                        overflow: 'hidden'
                                    }}
                                >
                                    {/* Color Glow */}
                                    <div style={{
                                        position: 'absolute',
                                        top: 0,
                                        right: 0,
                                        width: '200px',
                                        height: '200px',
                                        background: zones[activeZone].color,
                                        filter: 'blur(100px)',
                                        opacity: 0.1,
                                        pointerEvents: 'none',
                                        borderRadius: '50%',
                                        transform: 'translate(30%, -30%)'
                                    }} />

                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '30px', position: 'relative' }}>
                                        <div style={{ padding: '20px', backgroundColor: zones[activeZone].bg, borderRadius: '20px', border: `1px solid ${zones[activeZone].color}20` }}>
                                            {zones[activeZone].icon}
                                        </div>
                                        <span style={{ padding: '8px 16px', backgroundColor: zones[activeZone].bg, borderRadius: '12px', color: zones[activeZone].color, fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                            Odabrano
                                        </span>
                                    </div>

                                    <h3 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '10px', color: zones[activeZone].color, position: 'relative' }}>{zones[activeZone].name}</h3>

                                    <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', marginBottom: '30px', lineHeight: '1.6', position: 'relative' }}>
                                        {zones[activeZone].desc}
                                    </p>

                                    <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '30px', position: 'relative' }}>
                                        <span style={{ fontSize: '3rem', fontWeight: '900', color: 'white' }}>{zones[activeZone].price}</span>
                                        <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '11px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.1em' }}>/ Godina</span>
                                    </div>

                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', position: 'relative' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px', backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                            <Zap size={16} color="#FACC15" />
                                            <span style={{ fontSize: '12px', fontWeight: 'bold', color: 'rgba(255,255,255,0.8)' }}>Struja</span>
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px', backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)' }}>
                                            <Droplets size={16} color="#60A5FA" />
                                            <span style={{ fontSize: '12px', fontWeight: 'bold', color: 'rgba(255,255,255,0.8)' }}>Voda</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ) : (
                                // 2. DEFAULT STATE (Welcome / Instructions)
                                <motion.div
                                    key="instruction"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    style={{
                                        backgroundColor: 'rgba(255,255,255,0.02)',
                                        padding: '40px',
                                        borderRadius: '40px',
                                        border: '1px dashed rgba(255,255,255,0.1)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        textAlign: 'center',
                                        height: '200px'
                                    }}
                                >
                                    <MousePointerClick size={32} color="rgba(255,255,255,0.3)" style={{ marginBottom: '16px' }} />
                                    <h3 style={{ fontSize: '1.2rem', fontWeight: '800', marginBottom: '8px', color: 'white' }}>Odaberite Zonu</h3>
                                    <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: '0.9rem' }}>
                                        Kliknite na gumb iznad mape za prikaz cijena i detalja zona.
                                    </p>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* 3. STATIC KM CARD (Always Visible as Additional Option) */}
                        <motion.div
                            variants={itemVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            whileHover={{ y: -5 }}
                            style={{
                                backgroundColor: '#0F0F0F',
                                padding: '40px',
                                borderRadius: '40px',
                                border: '1px solid rgba(255,255,255,0.1)',
                                position: 'relative',
                                cursor: 'default'
                            }}
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '30px' }}>
                                <div style={{ padding: '20px', backgroundColor: 'rgba(59, 130, 246, 0.1)', borderRadius: '20px', border: '1px solid rgba(59, 130, 246, 0.1)' }}>
                                    <Anchor color="#3B82F6" size={32} />
                                </div>
                                <span style={{ padding: '8px 16px', backgroundColor: 'rgba(59, 130, 246, 0.1)', borderRadius: '12px', color: '#3B82F6', fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                                    KM Mjesta
                                </span>
                            </div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '900', marginBottom: '10px' }}>Suhi Vez / Kamper</h3>
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '10px' }}>
                                <span style={{ fontSize: '1.8rem', fontWeight: '900' }}>1.500€</span>
                                <span style={{ color: 'rgba(255,255,255,0.3)', fontSize: '10px', fontWeight: '900', textTransform: 'uppercase', letterSpacing: '0.1em' }}>/ Godina</span>
                            </div>
                            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem', lineHeight: '1.5' }}>
                                Dodatna mogućnost zakupa za vaše plovilo ili kamper.
                            </p>
                        </motion.div>

                        {/* CTA */}
                        {activeZone && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                            >
                                <a
                                    href={`https://wa.me/385922542249?text=Pozdrav%2C%20zainteresiran%20sam%20za%20${zones[activeZone].name}%20u%20iznosu%20od%20${zones[activeZone].price}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        display: 'block',
                                        width: '100%',
                                        padding: '24px',
                                        backgroundColor: '#ffffff',
                                        color: '#000000',
                                        borderRadius: '20px',
                                        textAlign: 'center',
                                        fontSize: '14px',
                                        fontWeight: '900',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.2em',
                                        textDecoration: 'none',
                                        boxShadow: '0 20px 40px -10px rgba(255,255,255,0.1)',
                                        transition: 'transform 0.2s ease'
                                    }}
                                >
                                    Zatraži Ponudu
                                </a>
                            </motion.div>
                        )}

                    </div>
                </div>

            </main>

            <Footer />
        </div>
    );
};

export default Masterplan;

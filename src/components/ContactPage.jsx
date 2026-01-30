import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import { Mail, Phone, MapPin, Send, User, MessageSquare, AtSign } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

const ContactPage = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        setIsSubmitting(true);

        const SERVICE_ID = 'service_lxkyvsh';
        const TEMPLATE_ID = 'template_dsboxh9';
        const PUBLIC_KEY = 'ww3PsxWdD4D5l6XU8';

        if (SERVICE_ID === 'YOUR_SERVICE_ID') {
            toast.error("EmailJS konfiguracija nije postavljena!");
            setIsSubmitting(false);
            return;
        }

        try {
            await emailjs.send(
                SERVICE_ID,
                TEMPLATE_ID,
                {
                    name: data.firstName,
                    surname: data.lastName,
                    email: data.email,
                    message: data.message,
                },
                PUBLIC_KEY
            );

            toast.success("Poruka uspješno poslana!");
            reset();
        } catch (error) {
            console.error("EmailJS Error:", error);
            toast.error("Greška pri slanju. Pokušajte ponovno.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="contact-page-root">
            <Toaster position="top-right" toastOptions={{
                style: {
                    background: '#1a1a1a',
                    color: '#fff',
                    border: '1px solid rgba(255,255,255,0.1)',
                },
            }} />

            <Navbar />

            <section className="contact-section">
                {/* Decoration */}
                <div style={{
                    position: 'absolute',
                    top: '-10%',
                    left: '20%',
                    width: '500px',
                    height: '500px',
                    background: 'rgba(255, 92, 0, 0.08)',
                    borderRadius: '50%',
                    filter: 'blur(100px)',
                    zIndex: 0,
                    pointerEvents: 'none'
                }} />

                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="contact-header"
                    >
                        <h1 className="contact-title">KONTAKTIRAJTE NAS</h1>
                        <p className="contact-subtitle">
                            Imate pitanja o parcelama ili želite rezervirati svoj termin?
                            Javite nam se i odgovorit ćemo vam u najkraćem roku.
                        </p>
                    </motion.div>

                    <div className="contact-grid">
                        {/* Info Side */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-8"
                        >
                            <div className="glass-card">
                                <h3 className="section-title mb-8" style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>INFORMACIJE</h3>

                                <div className="info-list">
                                    <a href="mailto:zobaresic@gmail.com" className="info-item">
                                        <div className="info-icon-box">
                                            <Mail size={24} />
                                        </div>
                                        <div>
                                            <p className="info-label">Email Adresa</p>
                                            <p className="info-value">zobaresic@gmail.com</p>
                                        </div>
                                    </a>

                                    <a href="tel:+385922542249" className="info-item">
                                        <div className="info-icon-box">
                                            <Phone size={24} />
                                        </div>
                                        <div>
                                            <p className="info-label">Telefon</p>
                                            <p className="info-value">+385 92 2542249</p>
                                        </div>
                                    </a>

                                    <div className="info-item">
                                        <div className="info-icon-box">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <p className="info-label">Lokacija</p>
                                            <p className="info-value">Drage, Pakoštane</p>
                                            <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem' }}>Uvala Lučica</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Form Side */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <div className="glass-card">
                                <h3 className="section-title" style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>POŠALJI PORUKU</h3>
                                <p style={{ color: 'rgba(255,255,255,0.5)', marginBottom: '2rem' }}>Ispunite formu ispod i javit ćemo vam se uskoro.</p>

                                <form onSubmit={handleSubmit(onSubmit)} className="form-layout">
                                    <div className="form-row-2">
                                        <div className="form-group">
                                            <label className="form-label">Ime</label>
                                            <div className="input-wrapper">
                                                <User className="field-icon" />
                                                <input
                                                    {...register("firstName", { required: "Ime je obavezno" })}
                                                    className="form-input"
                                                    placeholder="Ivan"
                                                />
                                            </div>
                                            {errors.firstName && <span className="error-msg">{errors.firstName.message}</span>}
                                        </div>

                                        <div className="form-group">
                                            <label className="form-label">Prezime</label>
                                            <div className="input-wrapper">
                                                <User className="field-icon" />
                                                <input
                                                    {...register("lastName", { required: "Prezime je obavezno" })}
                                                    className="form-input"
                                                    placeholder="Horvat"
                                                />
                                            </div>
                                            {errors.lastName && <span className="error-msg">{errors.lastName.message}</span>}
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">Email</label>
                                        <div className="input-wrapper">
                                            <AtSign className="field-icon" />
                                            <input
                                                type="email"
                                                {...register("email", {
                                                    required: "Email je obavezan",
                                                    pattern: {
                                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                                        message: "Neispravna email adresa"
                                                    }
                                                })}
                                                className="form-input"
                                                placeholder="ivan.horvat@email.com"
                                            />
                                        </div>
                                        {errors.email && <span className="error-msg">{errors.email.message}</span>}
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label">Poruka</label>
                                        <div className="input-wrapper">
                                            <MessageSquare className="field-icon" style={{ top: '1.5rem' }} />
                                            <textarea
                                                {...register("message", { required: "Poruka je obavezna" })}
                                                rows="4"
                                                className="form-textarea"
                                                placeholder="Vaša poruka..."
                                            />
                                        </div>
                                        {errors.message && <span className="error-msg">{errors.message.message}</span>}
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="btn-impact btn-solid-orange btn-full-width"
                                    >
                                        {isSubmitting ? (
                                            <span>Slanje...</span>
                                        ) : (
                                            <>
                                                <span>Pošalji Poruku</span>
                                                <Send size={18} />
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ContactPage;

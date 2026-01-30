import React from 'react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-grid">
                    {/* Logo & Intro */}
                    <div className="footer-logo-section">
                        <span className="footer-logo-text">Kamp Kušo</span>
                        <p className="footer-tagline">
                            Vrhunski kamping doživljaj u srcu Dalmacije. Rezervirajte svoje mjesto u raju i doživite formu odmora kakvu zaslužujete.
                        </p>
                    </div>

                    {/* Contact Info Centered */}
                    <div className="footer-contact-info">
                        <span style={{ fontSize: '0.8rem', opacity: 0.5, letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 900, marginBottom: '0.5rem' }}>Kontakt & Lokacija</span>
                        <span>Uvala Lučica, Drage, Hrvatska</span>
                        <span className="contact-highlight">+385 92 254 2249</span>
                        <a href="mailto:info@kampkuso.hr" className="hover:text-white transition-colors mb-6">zobaresic@gmail.com</a>


                    </div>

                    {/* Social Links */}
                    <div className="footer-social-links">
                        {['Instagram', 'Facebook', 'TikTok'].map(plat => (
                            <a key={plat} href="#" className="footer-social-link">
                                {plat}
                            </a>
                        ))}
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © 2026 KAMP KUŠO. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex gap-8">
                        <a href="#" className="footer-copyright hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="footer-copyright hover:text-white transition-colors">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

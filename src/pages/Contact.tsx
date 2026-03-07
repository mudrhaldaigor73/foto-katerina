import ContactForm from '../components/forms/ContactForm';
import { Mail, Phone, MapPin, Instagram, Facebook } from 'lucide-react';

export default function Contact() {
    return (
        <div className="animate-fade-in">
            <section className="section">
                <div className="container" style={{ maxWidth: '1000px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                        <h1>Spojme se</h1>
                        <p style={{ color: 'var(--color-text-light)', maxWidth: '600px', margin: '0 auto' }}>
                            Máte dotaz nebo zájem o focení? Napište mi a společně vymyslíme koncept přímo pro vás.
                        </p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>

                        {/* Contact Info */}
                        <div>
                            <h2 style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>Kontaktní údaje</h2>

                            <ul style={{ listStyle: 'none', marginBottom: '3rem' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <Mail style={{ color: 'var(--color-primary)' }} />
                                    <div>
                                        <strong style={{ display: 'block', textTransform: 'uppercase', fontSize: '0.85rem' }}>E-mail</strong>
                                        <a href="mailto:katykey@foto-katerina.cz" style={{ color: 'var(--color-text-light)' }}>katykey@foto-katerina.cz</a>
                                    </div>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <Phone style={{ color: 'var(--color-primary)' }} />
                                    <div>
                                        <strong style={{ display: 'block', textTransform: 'uppercase', fontSize: '0.85rem' }}>Telefon</strong>
                                        <a href="tel:+420722004554" style={{ color: 'var(--color-text-light)' }}>+420 722 004 554</a>
                                    </div>
                                </li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                                    <MapPin style={{ color: 'var(--color-primary)' }} />
                                    <div>
                                        <strong style={{ display: 'block', textTransform: 'uppercase', fontSize: '0.85rem' }}>Lokalita</strong>
                                        <span style={{ color: 'var(--color-text-light)' }}>Valašské Meziříčí, ČR. Cestovné mimo okolí: 8 Kč/km po celé ČR.</span>
                                    </div>
                                </li>
                            </ul>

                            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Sledujte mě</h3>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <a href="https://instagram.com" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '45px', height: '45px', borderRadius: '50%', border: '1px solid rgba(0,0,0,0.1)', transition: 'all 0.3s' }}>
                                    <Instagram />
                                </a>
                                <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '45px', height: '45px', borderRadius: '50%', border: '1px solid rgba(0,0,0,0.1)', transition: 'all 0.3s' }}>
                                    <Facebook />
                                </a>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div>
                            <h2 style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>Napište mi</h2>
                            <ContactForm />
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}

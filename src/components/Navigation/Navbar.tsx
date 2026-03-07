import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Camera } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Domů', path: '/' },
        { name: 'Služby', path: '/#sluzby' },
        { name: 'Portfolio', path: '/portfolio' },
        { name: 'O mně', path: '/o-mne' },
        { name: 'Blog', path: '/blog' },
        { name: 'Kontakt', path: '/kontakt' },
    ];

    return (
        <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
            <div className={`container ${styles.navContainer}`}>
                <Link to="/" className={styles.logo}>
                    <Camera className={styles.icon} />
                    <span>Foto Kateřina</span>
                </Link>

                <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}>
                    <ul className={styles.navList}>
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                {link.path.startsWith('/#') ? (
                                    <a href={link.path} className={styles.navLink}>{link.name}</a>
                                ) : (
                                    <Link to={link.path} className={styles.navLink}>{link.name}</Link>
                                )}
                            </li>
                        ))}
                        <li>
                            <Link to="/rezervace" className={`btn ${styles.bookBtn}`}>Rezervace</Link>
                        </li>
                    </ul>
                </nav>

                <button className={styles.mobileToggle} onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>
        </header>
    );
}

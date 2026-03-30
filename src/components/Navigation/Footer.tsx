import { Link } from 'react-router-dom';
import { Mail, MapPin, Camera } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.grid}`}>

                {/* Brand */}
                <div className={styles.col}>
                    <Link to="/" className={styles.logo}>
                        <Camera className={styles.icon} />
                        <span>Foto Kateřina</span>
                    </Link>
                    <p className={styles.text}>
                        Zachycujeme ty nejkrásnější momenty vašeho života. Od jemných novorozeneckých snímků po emotivní svatební příběhy.
                    </p>
                </div>

                {/* Links */}
                <div className={styles.col}>
                    <h4 className={styles.heading}>Služby</h4>
                    <ul className={styles.links}>
                        <li><Link to="/novorozenci">Novorozenci</Link></li>
                        <li><Link to="/tehotenstvi">Těhotenství</Link></li>
                        <li><Link to="/svatby">Svatby</Link></li>
                        <li><Link to="/portrety">Portréty a rodina</Link></li>
                    </ul>
                </div>

                <div className={styles.col}>
                    <h4 className={styles.heading}>Odkazy</h4>
                    <ul className={styles.links}>
                        <li><Link to="/portfolio">Portfolio</Link></li>
                        <li><Link to="/blog">Blog a tipy</Link></li>
                        <li><Link to="/o-mne">O mně</Link></li>
                        <li><Link to="/kontakt">Kontakt</Link></li>
                    </ul>
                </div>

                {/* Contact */}
                <div className={styles.col}>
                    <h4 className={styles.heading}>Kontakt</h4>
                    <ul className={styles.contactList}>
                        <li>
                            <Mail size={16} />
                            <a href="mailto:katykey@foto-katerina.cz">katykey@foto-katerina.cz</a>
                        </li>
                        <li>
                            <MapPin size={16} />
                            <span>Valašské Meziříčí</span>
                        </li>
                    </ul>
                    <Link to="/rezervace" className={`btn ${styles.bookBtn}`}>Rezervovat termín</Link>
                </div>
            </div>

            <div className={styles.bottom}>
                <div className="container">
                    <p>&copy; 2026 HaldaVisuals.eu Všechna práva vyhrazena.</p>
                </div>
            </div>
        </footer>
    );
}

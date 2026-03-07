import { Link } from 'react-router-dom';
import styles from './Hero.module.css';

interface HeroProps {
    title: string;
    subtitle?: string;
    image: string;
    ctaText?: string;
    ctaLink?: string;
}

export default function Hero({ title, subtitle, image, ctaText, ctaLink }: HeroProps) {
    return (
        <section className={styles.hero}>
            <div className={styles.imageContainer}>
                <div className={styles.overlay}></div>
                <img src={image} alt={title} className={styles.image} loading="lazy" />
            </div>

            <div className={`container ${styles.content}`}>
                <div className={styles.textWrap}>
                    <h1 className={`${styles.title} animate-fade-in`}>{title}</h1>
                    {subtitle && <p className={`${styles.subtitle} animate-fade-in`} style={{ animationDelay: '0.2s' }}>{subtitle}</p>}

                    {ctaText && ctaLink && (
                        <div className={`animate-fade-in`} style={{ animationDelay: '0.4s' }}>
                            <Link to={ctaLink} className={`btn ${styles.cta}`}>{ctaText}</Link>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}

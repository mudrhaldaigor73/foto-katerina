import { Link } from 'react-router-dom';
import styles from './ServiceSection.module.css';

interface ServiceItem {
    id: string;
    title: string;
    description: string;
    image: string;
    link: string;
}

const services: ServiceItem[] = [
    {
        id: 'novorozenci',
        title: 'Novorozenci',
        description: 'Jemné, bezpečné a emotivní zachycení prvních dnů života vašeho miminka v pohodlí domova nebo ateliéru.',
        image: '/images/newborn-uvod.webp',
        link: '/novorozenci'
    },
    {
        id: 'tehotenstvi',
        title: 'Těhotenství',
        description: 'Elegantní oslava nového života. Odhalte krásu a sílu očekávání prostřednictvím nadčasových fotografií.',
        image: '/images/tehotenstvi.webp',
        link: '/tehotenstvi'
    },
    {
        id: 'svatby',
        title: 'Svatby',
        description: 'Váš příběh lásky vyprávěný skrze autentické momenty. Od ranních příprav až po večerní oslavu.',
        image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800',
        link: '/svatby'
    },
    {
        id: 'portrety',
        title: 'Portréty a rodina',
        description: 'Přirozené lifestylové fotografie vaší rodiny plné radosti, smíchu a opravdového spojení.',
        image: '/images/portret.webp',
        link: '/portrety'
    }
];

export default function ServiceSection() {
    return (
        <section id="sluzby" className="section">
            <div className="container">
                <div className={styles.header}>
                    <h2 className={styles.title}>Mé služby</h2>
                    <p className={styles.subtitle}>
                        Každé focení je jedinečným příběhem. Specializuji se na přirozené světlo a autentické momenty plné emocí.
                    </p>
                </div>

                <div className={styles.grid}>
                    {services.map((service, index) => (
                        <div key={service.id} className={`${styles.card} animate-fade-in`} style={{ animationDelay: `${index * 0.15}s` }}>
                            <Link to={service.link} className={styles.imageLink}>
                                <div className={styles.imageWrapper}>
                                    <img src={service.image} alt={service.title} className={styles.image} loading="lazy" />
                                    <div className={styles.overlay}>
                                        <span className={styles.viewMore}>Zjistit více</span>
                                    </div>
                                </div>
                            </Link>
                            <div className={styles.content}>
                                <h3 className={styles.cardTitle}>
                                    <Link to={service.link}>{service.title}</Link>
                                </h3>
                                <p className={styles.cardDesc}>{service.description}</p>
                                <Link to={service.link} className={styles.link}>Prohlédnout galerii</Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

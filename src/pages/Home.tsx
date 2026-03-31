import { Link } from 'react-router-dom';
import Hero from '../components/sections/Hero';
import ServiceSection from '../components/sections/ServiceSection';

export default function Home() {
    return (
        <div className="animate-fade-in">
            <Hero
                title="Přirozená elegance & čisté emoce"
                subtitle="Zachycuji jedinečné okamžiky s profesionálním přístupem a kreativním pohledem."
                image="/images/Katerina-hero.webp"
                ctaText="Prozkoumat portfolio"
                ctaLink="/portfolio"
            />

            <section className="section" style={{ backgroundColor: 'var(--color-primary-light)' }}>
                <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
                    <h2 style={{ marginBottom: '1.5rem', fontSize: '2.5rem' }}>Vítejte ve světě mých příběhů</h2>
                    <p style={{ fontSize: '20px', color: 'var(--color-text-light)' }}>
                        Jmenuji se Kateřina Haldová a mám přes 8 let zkušeností v oblasti lifestylové, rodinné a svatební fotografie. Zachycuji přirozené světlo, vaše skutečné emoce a příběhy přesně takové, jaké jsou.
                    </p>
                </div>
            </section>

            <ServiceSection />

            {/* Featured Gallery placeholder */}

            <section className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '2rem' }}>Chcete se o mně dozvědět více?</h2>
                    <Link to="/o-mne" className="btn btn-outline">Můj příběh</Link>
                </div>
            </section>
        </div>
    );
}

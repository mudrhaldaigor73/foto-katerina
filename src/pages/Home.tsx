import Hero from '../components/sections/Hero';
import ServiceSection from '../components/sections/ServiceSection';

export default function Home() {
    return (
        <div className="animate-fade-in">
            <Hero
                title="Přirozená elegance & čisté emoce"
                subtitle="Zachycuji krásu jedinečných okamžiků vašeho života v jemném a luxusním stylu."
                image="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=1920"
                ctaText="Prozkoumat portfolio"
                ctaLink="/portfolio"
            />

            <section className="section" style={{ backgroundColor: 'var(--color-primary-light)' }}>
                <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
                    <h2 style={{ marginBottom: '1.5rem', fontSize: '2.5rem' }}>Vítejte ve světě mých příběhů</h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)' }}>
                        Jmenuji se Kateřina Haldová a mám přes 8 let zkušeností v oblasti lifestylové, rodinné a svatební fotografie. Zachycuji přirozené světlo, vaše skutečné emoce a příběhy přesně takové, jaké jsou.
                    </p>
                </div>
            </section>

            <ServiceSection />

            {/* Featured Gallery placeholder */}

            <section className="section" style={{ backgroundColor: '#fdfdfc' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '2rem' }}>Chcete se o mně dozvědět více?</h2>
                    <a href="/o-mne" className="btn btn-outline">Můj příběh</a>
                </div>
            </section>
        </div>
    );
}

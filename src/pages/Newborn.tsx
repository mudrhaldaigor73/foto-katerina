import { Helmet } from 'react-helmet-async';
import Hero from '../components/sections/Hero';
import Gallery from '../components/gallery/Gallery';
import { Link } from 'react-router-dom';

const newbornImages = [
    { id: 'n1', category: 'novorozenci', url: '/images/newborn-brezen2026-016.webp', alt: 'Novorozenecké focení' },
    { id: 'n2', category: 'novorozenci', url: '/images/newborn-brezen2026-027.webp', alt: 'Novorozenecké focení' },
    { id: 'n3', category: 'novorozenci', url: '/images/newborn-cerven2025-004.webp', alt: 'Novorozenecké focení' },
    { id: 'n4', category: 'novorozenci', url: '/images/newborn-kveten2025-016.webp', alt: 'Novorozenecké focení' },
    { id: 'n5', category: 'novorozenci', url: '/images/newborn-rijen2025-044.webp', alt: 'Novorozenecké focení' },
    { id: 'n6', category: 'novorozenci', url: '/images/newborn-srpen2025-003.webp', alt: 'Novorozenecké focení' },
    { id: 'n7', category: 'novorozenci', url: '/images/newborn-zari2025-018.webp', alt: 'Novorozenecké focení' },
    { id: 'n8', category: 'novorozenci', url: '/images/newborn-leden2026-015.webp', alt: 'Novorozenecké focení' },
];

export default function Newborn() {
    return (
        <div className="animate-fade-in">
            <Helmet>
                <title>Novorozenecké focení | Foto Kateřina – Valašské Meziříčí</title>
                <meta name="description" content="Jemné a bezpečné focení novorozenců v prvních dnech života. Fotím u vás doma, ideálně mezi 7. a 14. dnem. 250 Kč/foto. Rezervujte ještě v těhotenství." />
            </Helmet>
            <Hero
                title="Novorozenecké focení"
                subtitle="Čistota, jemnost a bezpečnost. Ty nejkrásnější první momenty s vaším děťátkem."
                image="/images/newborn-unor2026-009.webp"
                textColor="#121212"
                textMarginTop={300}
            />

            <section className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
                <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '1.5rem', fontSize: '2.5rem' }}>Bezpečí a pohodlí na prvním místě</h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '3rem' }}>
                        První dny života vašeho miminka jsou neuvěřitelně rychle prchavé. Mým cílem je tyto momenty zachytit s maximálním ohledem na pohodlí maminky i miminka. Focení probíhá v klidu, bez spěchu, ideálně u vás doma v přirozeném prostředí.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'left', marginTop: '3rem' }}>
                        <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-primary-light)' }}>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Cena focení</h3>
                            <p style={{ color: 'var(--color-text-light)', fontSize: '0.95rem' }}>Cena za jednu upravenou fotografii v elektronické podobě je <strong>250 Kč</strong>. Cestovné mimo okolí Valašského Meziříčí činí 8 Kč/km.</p>
                        </div>
                        <div style={{ padding: '1.5rem', backgroundColor: 'var(--color-primary-light)' }}>
                            <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>Kdy fotit?</h3>
                            <p style={{ color: 'var(--color-text-light)', fontSize: '0.95rem' }}>Nejlepší doba pro tyto spící, schoulené fotografie je mezi 7. a 14. dnem života, kdy miminka hodně a tvrdě spí.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Ukázka mé práce</h2>
                    <Gallery images={newbornImages} />
                </div>
            </section>

            <section className="section" style={{ backgroundColor: 'var(--color-surface)', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>Zachyťme společně tento zázrak</h2>
                    <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
                        Doporučuji rezervovat termín ještě během těhotenství podle předpokládaného data porodu.
                    </p>
                    <Link to="/kontakt" className="btn" style={{ backgroundColor: 'white', color: '#121212', borderColor: 'white' }}>Napište mi</Link>
                </div>
            </section>
        </div>
    );
}

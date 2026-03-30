import Hero from '../components/sections/Hero';
import Gallery from '../components/gallery/Gallery';
import { Link } from 'react-router-dom';

const weddingImages: { id: string; category: string; url: string; alt: string }[] = [
    { id: 'w1', category: 'svatby', url: '/images/kniha-prsten1.webp', alt: 'Kniha a prsten' },
    { id: 'w2', category: 'svatby', url: '/images/svatebni-stul.webp', alt: 'Svatební stůl' },
    { id: 'w3', category: 'svatby', url: '/images/dekorace-svatba.webp', alt: 'Svatební dekorace' },
    { id: 'w4', category: 'svatby', url: '/images/kniha-prsteny2.webp', alt: 'Kniha a prsteny' },
];

export default function Wedding() {
    return (
        <div className="animate-fade-in">
            <Hero
                title="Svatební příběhy"
                subtitle="Upřímné zachycení vašeho dne D. Bez nucení, přirozeně a v jemných tónech."
                image="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1920"
            />

            <section className="section" style={{ backgroundColor: 'var(--color-primary-light)' }}>
                <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
                    <h2 style={{ marginBottom: '1.5rem', fontSize: '2.5rem' }}>Dokumentární přístup s nádechem romantiky</h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '3rem' }}>
                        Váš svatební den je pro mě příběhem lásky, radosti a vzájemného spojení. Focení pojímám s respektem k dění okolo – mým cílem je nerušit, ale zachytávat drobné kouzelné okamžiky, které možná sami v té rychlosti přehlédnete.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'flex-start' }}>
                    <div>
                        <h3 style={{ fontSize: '1.8rem', marginBottom: '1.5rem', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '1rem' }}>Svatební balíčky</h3>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            <li style={{ marginBottom: '1.5rem' }}>
                                <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '0.3rem' }}>Balíček 1 <span style={{ color: 'var(--color-primary)', marginLeft: '1rem' }}>6 000 Kč</span></strong>
                                <span style={{ color: 'var(--color-text-light)', fontSize: '0.95rem', display: 'block', marginBottom: '0.5rem' }}>(do 3 hodin focení)</span>
                                <span style={{ color: 'var(--color-text-light)', fontSize: '0.95rem' }}>Zahrnuje obřad, společné focení po obřadu a portréty novomanželů. Obdržíte cca 150 – 200 retušovaných fotografií.</span>
                            </li>
                            <li style={{ marginBottom: '1.5rem' }}>
                                <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '0.3rem' }}>Balíček 2 <span style={{ color: 'var(--color-primary)', marginLeft: '1rem' }}>12 000 Kč</span></strong>
                                <span style={{ color: 'var(--color-text-light)', fontSize: '0.95rem', display: 'block', marginBottom: '0.5rem' }}>(do 6 hodin focení)</span>
                                <span style={{ color: 'var(--color-text-light)', fontSize: '0.95rem' }}>Zahrnuje předobřadní přípravu, obřad, společné focení, hostinu a portréty novomanželů. Obdržíte cca 200 – 300 retušovaných fotografií.</span>
                            </li>
                            <li style={{ marginBottom: '1.5rem' }}>
                                <strong style={{ display: 'block', fontSize: '1.1rem', marginBottom: '0.3rem' }}>Balíček 3 <span style={{ color: 'var(--color-primary)', marginLeft: '1rem' }}>16 000 Kč</span></strong>
                                <span style={{ color: 'var(--color-text-light)', fontSize: '0.95rem', display: 'block', marginBottom: '0.5rem' }}>(do 11 hodin focení)</span>
                                <span style={{ color: 'var(--color-text-light)', fontSize: '0.95rem' }}>Celodenní pokrytí od příprav až po začátek zábavy. Obdržíte cca 400 – 500 retušovaných fotografií.</span>
                            </li>
                            <li style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px dashed rgba(0,0,0,0.1)' }}>
                                <span style={{ color: 'var(--color-text-light)', fontSize: '0.9rem', fontStyle: 'italic' }}>
                                    Možnost doplatit hodiny navíc (1 600 Kč/hod). Fotografie k tisku si vybíráte sami. Cestovné: 8 Kč/km.
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <img src="https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=800" alt="Detail svatebních květin" style={{ width: '100%', height: 'auto', borderRadius: '4px' }} />
                    </div>
                </div>
            </section>

            <section className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Galerie</h2>
                    <Gallery images={weddingImages} />
                </div>
            </section>

            <section className="section" style={{ textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ marginBottom: '1.5rem' }}>Zajímá vás moje dostupnost pro váš den?</h2>
                    <Link to="/rezervace" className="btn">Poptat termín</Link>
                </div>
            </section>
        </div>
    );
}

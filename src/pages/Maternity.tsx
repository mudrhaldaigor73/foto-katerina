import Hero from '../components/sections/Hero';
import Gallery from '../components/gallery/Gallery';
import { Link } from 'react-router-dom';

const maternityImages = [
    { id: 'm1', category: 'tehotenstvi', url: '/images/berczik1.webp', alt: 'Těhotenské focení' },
    { id: 'm2', category: 'tehotenstvi', url: '/images/berzcik2.webp', alt: 'Těhotenské focení' },
    { id: 'm3', category: 'tehotenstvi', url: '/images/berczik3.webp', alt: 'Těhotenské focení' },
];

export default function Maternity() {
    return (
        <div className="animate-fade-in">
            <Hero
                title="Těhotenské focení"
                subtitle="Oslava nového života. Elegantní a nadčasové fotografie vašeho očekávání."
                image="/images/tehotenstvi.webp"
            />

            <section className="section">
                <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
                    <div style={{ flex: '1 1 400px' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Oslava vás a nového života</h2>
                        <p style={{ color: 'var(--color-text-light)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                            Těhotenství je krásné a jedinečné období plné očekávání. Prostřednictvím mých fotografií chci zachytit tuto proměnu tak, abyste se cítila krásná, ženská a svá.
                        </p>
                        <p style={{ color: 'var(--color-text-light)', fontSize: '1.1rem', marginBottom: '2rem' }}>
                            Fotíme nejraději venku v přírodě při západu slunce nebo v pohodlí vašeho domova. Důraz kladu na propojení obou partnerů a přirozené láskyplné emoce mezi vámi.
                        </p>
                        <div style={{ backgroundColor: 'var(--color-primary-light)', padding: '1.5rem', borderLeft: '4px solid var(--color-primary)' }}>
                            <strong style={{ display: 'block', marginBottom: '0.5rem' }}>Cena:</strong> 250 Kč za jednu upravenou fotografii v elektronické podobě.<br />
                            <strong style={{ display: 'block', marginTop: '0.5rem', marginBottom: '0.5rem' }}>Ideální čas na focení:</strong> Mezi 28. a 34. týdnem těhotenství.
                        </div>
                    </div>
                </div>
            </section>

            <section className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Galerie</h2>
                    <Gallery images={maternityImages} />
                </div>
            </section>

            <section className="section" style={{ textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ marginBottom: '1.5rem' }}>Pojďme vytvořit krásné vzpomínky</h2>
                    <Link to="/rezervace" className="btn">Rezervovat termín</Link>
                </div>
            </section>
        </div>
    );
}

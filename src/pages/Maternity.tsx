import Hero from '../components/sections/Hero';
import Gallery from '../components/gallery/Gallery';
import { Link } from 'react-router-dom';

const maternityImages = [
    { id: 'm1', category: 'tehotenstvi', url: 'https://images.unsplash.com/photo-1510006851064-e6056cd0e3a8?auto=format&fit=crop&q=80&w=800', alt: 'Těhotná žena v přírodě' },
    { id: 'm2', category: 'tehotenstvi', url: 'https://images.unsplash.com/photo-1528699633788-424224dc89b5?auto=format&fit=crop&q=80&w=800', alt: 'Pár v očekávání' },
    { id: 'm3', category: 'tehotenstvi', url: 'https://images.unsplash.com/photo-1473280144955-46fd1b7ff9c6?auto=format&fit=crop&q=80&w=800', alt: 'Těhotenství silueta' },
];

export default function Maternity() {
    return (
        <div className="animate-fade-in">
            <Hero
                title="Těhotenské focení"
                subtitle="Oslava nového života. Elegantní a nadčasové fotografie vašeho očekávání."
                image="https://images.unsplash.com/photo-1528699633788-424224dc89b5?auto=format&fit=crop&q=80&w=1920"
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
                            <strong style={{ display: 'block', marginBottom: '0.5rem' }}>Cena:</strong> 140 Kč za jednu upravenou fotografii v elektronické podobě.<br />
                            <strong style={{ display: 'block', marginTop: '0.5rem', marginBottom: '0.5rem' }}>Ideální čas na focení:</strong> Mezi 28. a 34. týdnem těhotenství.
                        </div>
                    </div>
                    <div style={{ flex: '1 1 400px' }}>
                        <img src="https://images.unsplash.com/photo-1473280144955-46fd1b7ff9c6?auto=format&fit=crop&q=80&w=800" alt="Emotivní těhotenská fotografie" style={{ width: '100%', height: 'auto', borderRadius: '4px' }} />
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

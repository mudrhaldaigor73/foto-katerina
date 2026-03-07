import Hero from '../components/sections/Hero';
import Gallery from '../components/gallery/Gallery';
import { Link } from 'react-router-dom';

const portraitImages = [
    { id: 'p1', category: 'portrety', url: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=800', alt: 'Veselá rodinka v přírodě' },
    { id: 'p2', category: 'portrety', url: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=800', alt: 'Portrét ženy jemné světlo' },
    { id: 'p3', category: 'portrety', url: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&q=80&w=800', alt: 'Matka hrající si s dítětem' },
    { id: 'p4', category: 'portrety', url: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800', alt: 'Ženský portrét s úsměvem' },
];

export default function Portraits() {
    return (
        <div className="animate-fade-in">
            <Hero
                title="Rodinné a osobní portréty"
                subtitle="Upřímné, hravé a nestrojené snímky v přirozeném prostředí."
                image="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=1920"
                ctaText="Chci se vyfotit"
                ctaLink="/rezervace"
            />

            <section className="section" style={{ backgroundColor: '#fdfdfc' }}>
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                        <div style={{ padding: '2rem', backgroundColor: 'white', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 5px 20px rgba(0,0,0,0.02)' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Rodina a děti</h3>
                            <p style={{ color: 'var(--color-text-light)', lineHeight: 1.8 }}>
                                Zachyťme vaši rodinu přesně takovou, jaká je. Bez krkolomných póz – jen vaši vzájemnou radost, divokost vašich dětí a láskyplná objetí. Ideálně na louce při západu slunce nebo uprostřed vašeho domova.
                            </p>
                        </div>
                        <div style={{ padding: '2rem', backgroundColor: 'white', border: '1px solid rgba(0,0,0,0.05)', boxShadow: '0 5px 20px rgba(0,0,0,0.02)' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Ženský portrét</h3>
                            <p style={{ color: 'var(--color-text-light)', lineHeight: 1.8 }}>
                                Dovolte si zářit. Jemný lifestylový portrét plný sebelásky oslaví vaši přirozenou krásu. Věřte mi, že se najdeme v té správné poloze, abyste na fotky byla náležitě pyšná.
                            </p>
                        </div>
                        <div style={{ gridColumn: '1 / -1', padding: '1.5rem', backgroundColor: 'var(--color-primary-light)', borderLeft: '4px solid var(--color-primary)' }}>
                            <strong>Cena za portrétní i rodinné focení:</strong> 140 Kč za jednu upravenou fotografii v elektronické podobě.
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Galerie</h2>
                    <Gallery images={portraitImages} />
                </div>
            </section>

            <section className="section" style={{ backgroundColor: 'var(--color-primary-light)', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ marginBottom: '1rem' }}>Máte o sobě pochybnosti? Nemusíte!</h2>
                    <p style={{ color: 'var(--color-text-light)', marginBottom: '2rem', maxWidth: '600px', margin: '1rem auto 2rem' }}>
                        "Nejsem fotogenická" slýchám u focení velmi často. Mým úkolem je ukázat vám, že to není pravda! Focení se mnou je procházkou plnou smíchu a důvěry. Pojďme to zkusit.
                    </p>
                    <Link to="/kontakt" className="btn btn-outline">Spojme se</Link>
                </div>
            </section>
        </div>
    );
}

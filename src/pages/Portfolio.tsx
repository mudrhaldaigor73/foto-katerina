import Gallery, { type GalleryImage } from '../components/gallery/Gallery';

// Sample data for the portfolio
const portfolioImages: GalleryImage[] = [
    { id: '1', category: 'novorozenci', url: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=800', alt: 'Spící novorozenec' },
    { id: '2', category: 'svatby', url: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800', alt: 'Svatební pár přirozeně' },
    { id: '3', category: 'tehotenstvi', url: 'https://images.unsplash.com/photo-1510006851064-e6056cd0e3a8?auto=format&fit=crop&q=80&w=800', alt: 'Těhotenská silueta v přírodě' },
    { id: '4', category: 'portrety', url: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=800', alt: 'Rozevlátá jarní rodina' },
    { id: '5', category: 'svatby', url: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=800', alt: 'První polibek svatba' },
    { id: '6', category: 'novorozenci', url: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&q=80&w=800', alt: 'Novorozenec detail ručičky' },
    { id: '7', category: 'portrety', url: 'https://images.unsplash.com/photo-1609220136736-443140cffec6?auto=format&fit=crop&q=80&w=800', alt: 'Matka a dítě smích' },
    { id: '8', category: 'tehotenstvi', url: 'https://images.unsplash.com/photo-1528699633788-424224dc89b5?auto=format&fit=crop&q=80&w=800', alt: 'Těhotná s partnerem' },
    { id: '9', category: 'svatby', url: 'https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=800', alt: 'Nevěsta detail šaty' },
];

const galleryCategories = [
    { id: 'novorozenci', label: 'Novorozenci' },
    { id: 'tehotenstvi', label: 'Těhotenství' },
    { id: 'svatby', label: 'Svatby' },
    { id: 'portrety', label: 'Portréty a rodina' },
];

export default function Portfolio() {
    return (
        <div className="animate-fade-in">
            <section className="section" style={{ paddingBottom: 0 }}>
                <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
                    <h1 style={{ marginBottom: '1rem' }}>Světy mých příběhů</h1>
                    <p style={{ color: 'var(--color-text-light)' }}>
                        Prohlédněte si výběr z mé práce. Každá sekce vypráví jiný příběh, zachycený v přirozeném světle a plný skutečných emocí.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <Gallery images={portfolioImages} categories={galleryCategories} />
                </div>
            </section>

            <section className="section" style={{ backgroundColor: 'var(--color-primary-light)' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '1.5rem' }}>Líbí se vám můj styl?</h2>
                    <p style={{ marginBottom: '2rem', color: 'var(--color-text-light)' }}>
                        Napište mi a společně vymyslíme koncept pro vaše vysněné focení.
                    </p>
                    <a href="/rezervace" className="btn">Rezervovat termín</a>
                </div>
            </section>
        </div>
    );
}

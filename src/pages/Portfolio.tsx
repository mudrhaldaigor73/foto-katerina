import { Link } from 'react-router-dom';
import Gallery, { type GalleryImage } from '../components/gallery/Gallery';

// Sample data for the portfolio
const portfolioImages: GalleryImage[] = [
    { id: '1', category: 'novorozenci', url: '/images/newborn a spánek.webp', alt: 'Spící novorozenec' },
    { id: '2', category: 'novorozenci', url: '/images/newborn a ruce.webp', alt: 'Novorozenec detail ručičky' },
    { id: '3', category: 'novorozenci', url: '/images/newborn-brezen2026-019.webp', alt: 'Novorozenecké focení' },
    { id: '4', category: 'novorozenci', url: '/images/newborn-srpen2025-003.webp', alt: 'Novorozenecké focení' },
    { id: '5', category: 'novorozenci', url: '/images/newborn-rijen2025-044.webp', alt: 'Novorozenecké focení' },
    { id: '6', category: 'novorozenci', url: '/images/newborn-leden2026-015.webp', alt: 'Novorozenecké focení' },

    // Nové portréty a rodina
    { id: 'p0_new', category: 'portrety', url: '/images/portret starší muž.jpg', alt: 'Portrét staršího muže' },
    { id: 'p1_new', category: 'portrety', url: '/images/Vánoce.webp', alt: 'Vánoce rodina' },
    { id: 'p2_new', category: 'portrety', url: '/images/žena a pes.webp', alt: 'Žena a pes' },
    { id: 'p3_new', category: 'portrety', url: '/images/žena s koněm.webp', alt: 'Žena s koněm' },
    { id: 'p4_new', category: 'portrety', url: '/images/zena kocka.webp', alt: 'Žena a kočka' },
    { id: 'p5_new', category: 'portrety', url: '/images/sourozenci.webp', alt: 'Sourozenci' },
    { id: 'p6_new', category: 'portrety', url: '/images/žena u okna.webp', alt: 'Žena u okna' },
    { id: 'p7_new', category: 'portrety', url: '/images/portret.webp', alt: 'Portrét' },
    { id: 'p8_new', category: 'portrety', url: '/images/pár u moře.webp', alt: 'Pár u moře' },
    { id: 'p9_new', category: 'portrety', url: '/images/holka a sofa.webp', alt: 'Holka a sofa' },
    { id: 'p10_new', category: 'portrety', url: '/images/chlapec se spsem.webp', alt: 'Chlapec se psem' },

    // Zbytkové kategorie (zatím)
    { id: 's1', category: 'svatby', url: '/images/kniha-prsten1.webp', alt: 'Kniha a prsten' },
    { id: 's2', category: 'svatby', url: '/images/svatba.webp', alt: 'Svatba' },
    { id: 's3', category: 'svatby', url: '/images/svatebni-stul.webp', alt: 'Svatební stůl' },
    { id: 's4', category: 'svatby', url: '/images/kniha-prsteny2.webp', alt: 'Kniha a prsteny' },
    { id: 's5', category: 'svatby', url: '/images/dekorace-svatba.webp', alt: 'Svatební dekorace' },
    { id: 't1', category: 'tehotenstvi', url: '/images/tehotenstvi.webp', alt: 'Těhotenství' },
    { id: 't2', category: 'tehotenstvi', url: '/images/berczik1.webp', alt: 'Těhotenské focení' },
    { id: 't3', category: 'tehotenstvi', url: '/images/berczik3.webp', alt: 'Těhotenské focení' },
    { id: 't4', category: 'tehotenstvi', url: '/images/berzcik2.webp', alt: 'Těhotenské focení' },
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
                    <p style={{ margin: '0 auto 2rem', color: 'var(--color-text-light)' }}>
                        Napište mi a společně vymyslíme koncept pro vaše vysněné focení.
                    </p>
                    <Link to="/kontakt" className="btn">Napište mi</Link>
                </div>
            </section>
        </div>
    );
}

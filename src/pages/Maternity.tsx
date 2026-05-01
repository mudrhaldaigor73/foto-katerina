import { Helmet } from 'react-helmet-async';
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
            <Helmet>
                <title>Těhotenské focení | Foto Kateřina – Valašské Meziříčí a Zlínský kraj</title>
                <meta name="description" content="Přirozené těhotenské focení v přírodě nebo doma. Fotografka Kateřina, Valašské Meziříčí — Beskydy, řeka Bečva, louky. Ideální čas: 28.–34. týden. 250 Kč/foto." />
            </Helmet>
            <Hero
                title="Těhotenské focení"
                subtitle="Oslava nového života. Elegantní a nadčasové fotografie vašeho očekávání."
                image="/images/tehotenstvi.webp"
            />

            {/* Main intro */}
            <section className="section">
                <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
                    <div style={{ flex: '1 1 400px' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Oslava vás a nového života</h2>
                        <p style={{ color: 'var(--color-text-light)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                            Těhotenství je krásné a jedinečné období plné očekávání. Prostřednictvím mých fotografií chci zachytit tuto proměnu tak, abyste se cítila krásná, ženská a svá — bez ohledu na to, kde jste v tuto chvíli.
                        </p>
                        <p style={{ color: 'var(--color-text-light)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                            Fotíme nejraději venku v přírodě při zlaté hodince nebo v pohodlí vašeho domova. Jako fotografka z Valašského Meziříčí dobře znám nejkrásnější lokace v okolí — louky u řeky Bečvy, lesy v Beskydech nebo malebné zákoutí historického centra. Důraz kladu na přirozené emoce a propojení partnerů.
                        </p>
                        <div style={{ backgroundColor: 'var(--color-primary-light)', padding: '1.5rem', borderLeft: '4px solid var(--color-primary)' }}>
                            <strong style={{ display: 'block', marginBottom: '0.5rem' }}>Cena:</strong> 250 Kč za jednu upravenou fotografii v elektronické podobě.<br />
                            <strong style={{ display: 'block', marginTop: '0.5rem', marginBottom: '0.5rem' }}>Ideální čas na focení:</strong> Mezi 28. a 34. týdnem těhotenství.<br />
                            <strong style={{ display: 'block', marginTop: '0.5rem', marginBottom: '0.5rem' }}>Cestovné:</strong> 8 Kč/km mimo okolí Valašského Meziříčí.
                        </div>
                    </div>
                </div>
            </section>

            {/* What to expect */}
            <section className="section" style={{ backgroundColor: 'var(--color-primary-light)' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2rem' }}>Co od focení čekat</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: 'Příprava na míru', text: 'Před focením se domluvíme na lokaci, stylu a oblečení. Poradím vám, co na sebe — nebo si přečtěte můj článek na blogu.' },
                            { title: 'Délka focení', text: 'Počítejte s 1–2 hodinami. Bez spěchu, v tempu, které vám vyhovuje. Na jeden outfit nebo více variant.' },
                            { title: 'Dodání fotografií', text: 'Do 2–3 týdnů obdržíte online galerii. Vyberete si fotografie k plné retuši a dodám je ve vysokém rozlišení.' },
                            { title: 'Kombinace s newborn', text: 'Mnoho maminek volí těhotenské i novorozenecké focení — vznikne tak krásný příběh od očekávání po příchod miminka.' },
                        ].map(({ title, text }) => (
                            <div key={title} style={{ padding: '1.5rem 0' }}>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.6rem' }}>{title}</h3>
                                <p style={{ color: 'var(--color-text-light)', fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>{text}</p>
                            </div>
                        ))}
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
                        <Link to="/blog/co-si-vzit-na-tehotenske-foceni" className="btn btn-outline">Tipy na oblečení na focení →</Link>
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Galerie</h2>
                    <Gallery images={maternityImages} />
                </div>
            </section>

            {/* CTA */}
            <section className="section" style={{ textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: '600px' }}>
                    <h2 style={{ marginBottom: '1.5rem' }}>Pojďme vytvořit krásné vzpomínky</h2>
                    <p style={{ margin: '0 auto 2rem', color: 'var(--color-text-light)' }}>Napište mi a společně vymyslíme koncept pro vaše vysněné těhotenské focení.</p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/kontakt" className="btn">Napište mi</Link>
                        <Link to="/rezervace" className="btn btn-outline">Rezervovat termín</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

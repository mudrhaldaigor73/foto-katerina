import { Helmet } from 'react-helmet-async';
import Hero from '../components/sections/Hero';
import Gallery from '../components/gallery/Gallery';
import { Link } from 'react-router-dom';

const portraitImages = [
    { id: 'p1', category: 'portrety', url: '/images/portret.webp', alt: 'Portrét' },
    { id: 'p2', category: 'portrety', url: '/images/žena u okna.webp', alt: 'Žena u okna' },
    { id: 'p3', category: 'portrety', url: '/images/sourozenci.webp', alt: 'Sourozenci' },
    { id: 'p4', category: 'portrety', url: '/images/Vánoce.webp', alt: 'Rodinné focení' },
    { id: 'p5', category: 'portrety', url: '/images/holka a sofa.webp', alt: 'Portrét' },
    { id: 'p6', category: 'portrety', url: '/images/pár u moře.webp', alt: 'Párové focení' },
    { id: 'p7', category: 'portrety', url: '/images/žena a pes.webp', alt: 'Žena a pes' },
    { id: 'p8', category: 'portrety', url: '/images/chlapec se spsem.webp', alt: 'Chlapec se psem' },
];

export default function Portraits() {
    return (
        <div className="animate-fade-in">
            <Helmet>
                <title>Rodinné focení a portréty | Foto Kateřina – Valašské Meziříčí</title>
                <meta name="description" content="Rodinná fotografka Kateřina z Valašského Meziříčí. Přirozené rodinné focení, párové portréty a dětské fotografie v přírodě nebo ateliéru. 250 Kč/foto." />
            </Helmet>
            <Hero
                title="Rodinné focení a portréty"
                subtitle="Autentické okamžiky vaší rodiny — plné smíchu, objetí a skutečných emocí."
                image="/images/Katerina-hero.webp"
                ctaText="Chci se vyfotit"
                ctaLink="/rezervace"
            />

            {/* Intro */}
            <section className="section">
                <div className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>
                    <div style={{ flex: '1 1 400px' }}>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Vaše rodina taková, jaká opravdu je</h2>
                        <p style={{ color: 'var(--color-text-light)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                            Nejkrásnější rodinné fotografie nevznikají v tuhém pózování. Vznikají při hraní v trávě, při objetí, při smíchu — v momentech, které jsou vaše. Jako rodinná fotografka z Valašského Meziříčí nabízím focení, při kterém se nemusíte snažit vypadat "správně".
                        </p>
                        <p style={{ color: 'var(--color-text-light)', fontSize: '1.1rem', marginBottom: '2rem' }}>
                            Fotím rodiny, páry, jednotlivce i děti. V přírodě v okolí Valašska — u Bečvy, v Beskydech nebo na loukách — i v ateliéru. Dojíždím po celém Zlínském kraji a dále.
                        </p>
                        <div style={{ backgroundColor: 'var(--color-primary-light)', padding: '1.5rem', borderLeft: '4px solid var(--color-primary)' }}>
                            <strong style={{ display: 'block', marginBottom: '0.5rem' }}>Cena:</strong> 250 Kč za jednu upravenou fotografii v elektronické podobě.<br />
                            <strong style={{ display: 'block', marginTop: '0.5rem', marginBottom: '0.5rem' }}>Délka focení:</strong> Zpravidla 1–2 hodiny podle rozsahu.<br />
                            <strong style={{ display: 'block', marginTop: '0.5rem', marginBottom: '0.5rem' }}>Cestovné:</strong> 8 Kč/km mimo okolí Valašského Meziříčí.
                        </div>
                    </div>
                </div>
            </section>

            {/* Services grid */}
            <section className="section" style={{ backgroundColor: 'var(--color-primary-light)' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2rem' }}>Co nabízím</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: 'Rodinné focení', text: 'Rodiny s dětmi, prarodiče, velká rodinná setkání. V přírodě nebo doma — zachytím vaši rodinu přirozeně a s láskou.' },
                            { title: 'Párové portréty', text: 'Focení pro zamilované páry — výročí, zásnuby nebo prostě proto, že máte rádi krásné fotografie. Venku při zlatém světle.' },
                            { title: 'Individuální portréty', text: 'Profesionální portrét nebo osobní branding. Fotografie, které vám sedí — přirozené, stylové, vyjadřující vaši osobnost.' },
                            { title: 'Dětské focení', text: 'Děti v pohybu, ve hře, v jejich světě. Nenuceně a s trpělivostí — výsledkem jsou fotky, které vás jednou dojmou k slzám.' },
                        ].map(({ title, text }) => (
                            <div key={title} style={{ padding: '2rem', backgroundColor: 'white', borderRadius: '4px' }}>
                                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>{title}</h3>
                                <p style={{ color: 'var(--color-text-light)', fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>{text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section className="section">
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Ukázka mé práce</h2>
                    <Gallery images={portraitImages} />
                </div>
            </section>

            {/* FAQ */}
            <section className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2rem', color: 'white' }}>Časté otázky</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {[
                            { q: 'Kde focení probíhá?', a: 'Nejraději fotím v přírodě — louky, lesy a řeka Bečva v okolí Valašského Meziříčí nabízí nádherné kulisy. Dojíždím i na vámi vybranou lokaci v rámci celého Zlínského kraje a dál.' },
                            { q: 'Jak se připravit s dětmi?', a: 'Přijeďte odpočatí a dobře najedení. Přibalte oblíbenou svačinu jako motivaci. Zbytek nechte na mně — mám spoustu triků, jak děti zaujmout a rozesmát.' },
                            { q: 'Co si vzít na sebe?', a: 'Doporučuji jednoduché oblečení v neutrálních nebo pastelových tónech, které ladí dohromady. Vyhněte se výrazným logům a složitým vzorům.' },
                            { q: 'Jak dlouho čekat na fotky?', a: 'Hotové fotografie dodávám zpravidla do 2–3 týdnů. Nejprve obdržíte online galerii, ze které si vyberete snímky k plné retuši.' },
                        ].map(({ q, a }) => (
                            <div key={q} style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1.5rem' }}>
                                <h3 style={{ fontSize: '1.05rem', marginBottom: '0.5rem', color: 'white' }}>{q}</h3>
                                <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>{a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section" style={{ textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: '600px' }}>
                    <h2 style={{ marginBottom: '1.5rem' }}>Pojďme nafotit váš příběh</h2>
                    <p style={{ margin: '0 auto 2rem', color: 'var(--color-text-light)' }}>
                        Napište mi s představou o focení a domluvíme termín i lokaci na míru.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/kontakt" className="btn">Napište mi</Link>
                        <Link to="/rezervace" className="btn btn-outline">Rezervovat termín</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

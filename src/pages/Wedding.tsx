import { Helmet } from 'react-helmet-async';
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
            <Helmet>
                <title>Svatební fotografie | Foto Kateřina – Valašské Meziříčí, Beskydy, celá ČR</title>
                <meta name="description" content="Dokumentární svatební fotografka Kateřina z Valašského Meziříčí. Fotím svatby po celé ČR — Beskydy, Morava i Čechy. Balíčky od 6 000 Kč." />
            </Helmet>
            <Hero
                title="Svatební příběhy"
                subtitle="Upřímné zachycení vašeho dne D. Bez nucení, přirozeně a v jemných tónech."
                image="https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=1920"
            />

            {/* Philosophy */}
            <section className="section" style={{ backgroundColor: 'var(--color-primary-light)' }}>
                <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
                    <h2 style={{ marginBottom: '1.5rem', fontSize: '2.5rem' }}>Dokumentární přístup s nádechem romantiky</h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>
                        Váš svatební den je pro mě příběhem lásky, radosti a vzájemného spojení. Focení pojímám s respektem k dění okolo — mým cílem je nerušit, ale zachytávat drobné kouzelné okamžiky, které možná sami v té rychlosti přehlédnete.
                    </p>
                    <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)' }}>
                        Jako svatební fotografka z Valašského Meziříčí fotím po celé České republice — od Beskyd a Moravy přes jižní Čechy až po Prahu. Znám nádherné lokace na Valašsku, ale stejně ráda cestuji za vámi kamkoliv, kde se váš velký den odehraje.
                    </p>
                </div>
            </section>

            {/* Packages + image */}
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

            {/* How it works */}
            <section className="section" style={{ backgroundColor: 'var(--color-primary-light)' }}>
                <div className="container" style={{ maxWidth: '900px' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2rem' }}>Jak spolupráce probíhá</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                        {[
                            { num: '01', title: 'Nezávazná konzultace', text: 'Napište mi, povídáme si o vašich představách, termínu a lokaci. Osobní nebo online setkání.' },
                            { num: '02', title: 'Rezervace a smlouva', text: 'Po domluvě rezervuji váš termín. Pracuji vždy se smlouvou, která chrání obě strany.' },
                            { num: '03', title: 'Den svatby', text: 'Přijdu včas, neruším dění, zachytím váš příběh. Jsem součástí dne, ne jeho středem.' },
                            { num: '04', title: 'Dodání fotografií', text: 'Do 6–8 týdnů obdržíte online galerii s hotovými fotografiemi ve vysokém rozlišení.' },
                        ].map((step) => (
                            <div key={step.num} style={{ padding: '1.5rem 0' }}>
                                <div style={{ fontSize: '1.8rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '0.5rem', fontFamily: 'var(--font-heading)' }}>{step.num}</div>
                                <h3 style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>{step.title}</h3>
                                <p style={{ color: 'var(--color-text-light)', fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>{step.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Galerie</h2>
                    <Gallery images={weddingImages} />
                </div>
            </section>

            {/* CTA */}
            <section className="section" style={{ textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: '600px' }}>
                    <h2 style={{ marginBottom: '1.5rem' }}>Zajímá vás moje dostupnost pro váš den?</h2>
                    <p style={{ margin: '0 auto 2rem', color: 'var(--color-text-light)' }}>
                        Termíny se obsazují rychle — neváhejte se ozvat s předstihem. Ráda si s vámi popovídám o vašem velkém dni.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/kontakt" className="btn">Napište mi</Link>
                        <Link to="/blog/jak-vybrat-svatebniho-fotografa" className="btn btn-outline">Jak vybrat fotografa →</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

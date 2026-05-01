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

const steps = [
    {
        num: '01',
        title: 'Rezervace termínu',
        text: 'Ideálně ve 2.–3. trimestru těhotenství. Po porodu termín upřesníme podle skutečného data narození.'
    },
    {
        num: '02',
        title: 'Focení u vás doma',
        text: 'Přijedu za vámi. Focení trvá 2–4 hodiny, probíhá v klidu a bez spěchu — miminko diktuje tempo.'
    },
    {
        num: '03',
        title: 'Výběr fotografií',
        text: 'Do 2–3 týdnů obdržíte online galerii, ze které si vyberete fotografie k úpravě.'
    },
    {
        num: '04',
        title: 'Předání hotových fotek',
        text: 'Upravené fotografie doručím v elektronické podobě ve vysokém rozlišení — připravené k tisku.'
    },
];

export default function Newborn() {
    return (
        <div className="animate-fade-in">
            <Helmet>
                <title>Novorozenecké focení | Foto Kateřina – Valašské Meziříčí</title>
                <meta name="description" content="Jemné a bezpečné focení novorozenců v prvních dnech života. Fotografka Kateřina fotí u vás doma ve Valašském Meziříčí a okolí Zlínského kraje. 250 Kč/foto." />
            </Helmet>
            <Hero
                title="Novorozenecké focení"
                subtitle="Čistota, jemnost a bezpečnost. Ty nejkrásnější první momenty s vaším děťátkem."
                image="/images/newborn-unor2026-009.webp"
                textColor="#121212"
                textMarginTop={300}
            />

            {/* Intro + pricing */}
            <section className="section" style={{ backgroundColor: 'var(--color-surface)' }}>
                <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
                    <h2 style={{ marginBottom: '1.5rem', fontSize: '2.5rem' }}>Bezpečí a pohodlí na prvním místě</h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '1.5rem' }}>
                        První dny života vašeho miminka jsou neuvěřitelně rychle prchavé. Mým cílem je tyto momenty zachytit s maximálním ohledem na pohodlí maminky i miminka. Jako novorozenecká fotografka působím ve Valašském Meziříčí a dojíždím po celém Zlínském kraji — focení probíhá v klidu, bez spěchu, ideálně u vás doma v přirozeném prostředí.
                    </p>
                    <p style={{ fontSize: '1.1rem', color: 'var(--color-text-light)', marginBottom: '3rem' }}>
                        Mám zkušenosti také z focení novorozenců přímo v porodnici AGEL Valašské Meziříčí v rámci projektu Mimilens — takže znám potřeby miminek i rodičů od prvních hodin života.
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

            {/* Process steps */}
            <section className="section">
                <div className="container" style={{ maxWidth: '900px' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2rem' }}>Jak probíhá novorozenecké focení</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                        {steps.map((step) => (
                            <div key={step.num} style={{ padding: '2rem', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '4px' }}>
                                <div style={{ fontSize: '2rem', fontWeight: 700, color: 'var(--color-primary)', marginBottom: '0.75rem', fontFamily: 'var(--font-heading)' }}>{step.num}</div>
                                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.75rem' }}>{step.title}</h3>
                                <p style={{ color: 'var(--color-text-light)', fontSize: '0.95rem', lineHeight: 1.6 }}>{step.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="section" style={{ backgroundColor: 'var(--color-primary-light)' }}>
                <div className="container" style={{ maxWidth: '800px' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: '3rem', fontSize: '2rem' }}>Časté otázky</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {[
                            { q: 'Mohou být při focení přítomni sourozenci?', a: 'Ano — sourozenci jsou vítáni na rodinných záběrech na závěr focení. Samotné novorozenecké focení miminka ale probíhá klidněji s maminkou.' },
                            { q: 'Co když miminko nechce spát?', a: 'Trpělivost je základ. Neukvapujeme se, čekáme, nakrmíme, zabalíme — spánek přijde. Proto focení trvá 2–4 hodiny a není dobré mít po něm hned jiné plány.' },
                            { q: 'Fotíte i miminka narozená předčasně?', a: 'Ano. Předčasně narozená miminka fotíme s ohledem na jejich korigovaný věk. Termín vždy přizpůsobíme tak, aby bylo focení bezpečné a příjemné.' },
                            { q: 'Kam focení dojíždíte?', a: 'Fotím primárně ve Valašském Meziříčí a okolí. Dojíždím po celém Zlínském kraji i dále — cestovné mimo okolí Valašského Meziříčí je 8 Kč/km.' },
                        ].map(({ q, a }) => (
                            <div key={q} style={{ borderBottom: '1px solid rgba(0,0,0,0.07)', paddingBottom: '1.5rem' }}>
                                <h3 style={{ fontSize: '1.05rem', marginBottom: '0.5rem' }}>{q}</h3>
                                <p style={{ color: 'var(--color-text-light)', fontSize: '0.95rem', lineHeight: 1.7, margin: 0 }}>{a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Gallery */}
            <section className="section">
                <div className="container">
                    <h2 style={{ textAlign: 'center', marginBottom: '3rem' }}>Ukázka mé práce</h2>
                    <Gallery images={newbornImages} />
                </div>
            </section>

            {/* CTA */}
            <section className="section" style={{ backgroundColor: 'var(--color-surface)', textAlign: 'center' }}>
                <div className="container">
                    <h2 style={{ color: 'white', marginBottom: '1.5rem' }}>Zachyťme společně tento zázrak</h2>
                    <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
                        Doporučuji rezervovat termín ještě během těhotenství podle předpokládaného data porodu.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/kontakt" className="btn" style={{ backgroundColor: 'white', color: '#121212', borderColor: 'white' }}>Napište mi</Link>
                        <Link to="/rezervace" className="btn btn-outline" style={{ borderColor: 'rgba(255,255,255,0.5)', color: 'white' }}>Rezervovat termín</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

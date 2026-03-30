import Hero from '../components/sections/Hero';

const pricingItems = [
    {
        title: 'Portrétní fotografie',
        price: '250 Kč',
        description: 'cena za jednu upravenou fotografii v elektronické podobě'
    },
    {
        title: 'Těhotenské fotografie',
        price: '250 Kč',
        description: 'cena za jednu upravenou fotografii v elektronické podobě'
    },
    {
        title: 'Newborn fotografie',
        price: '250 Kč',
        description: 'cena za jednu upravenou fotografii v elektronické podobě'
    },
    {
        title: 'Svatební fotografie - balíček 1',
        price: '6000 Kč',
        description: '(do 3 hodin focení) obřad, společné focení po obřadu, portréty novomanželů cca 150 – 200 retušovaných fotografií v elektronické podobě'
    },
    {
        title: 'Svatební fotografie - balíček 2',
        price: '12000 Kč',
        description: '(do 6 hodin focení) předobřadní příprava, obřad, společné focení po obřadu, hostina, portréty novomanželů cca 200 – 300 retušovaných fotografií v elektronické podobě'
    },
    {
        title: 'Svatební fotografie - balíček 3',
        price: '16000 Kč',
        description: '(do 11 hodin focení) přípravy, obřad, společné focení po obřadu, hostina, portréty novomanželů, začátek zábavy cca 400 – 500 retušovaných fotografií v elektronické podobě'
    }
];

export default function Pricing() {
    return (
        <div className="animate-fade-in">
            <Hero
                title="Ceník"
                subtitle="Přehledné ceny bez skrytých poplatků."
                image="/images/Katerina-hero.webp"
            />

            <section className="section" style={{ backgroundColor: 'var(--color-surface)', paddingTop: '4rem', paddingBottom: '4rem' }}>
                <div className="container" style={{ maxWidth: '900px' }}>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
                        {pricingItems.map((item, index) => (
                            <div key={index} style={{
                                paddingBottom: '2rem',
                                borderBottom: index < pricingItems.length - 1 ? '1px dashed rgba(255, 255, 255, 0.2)' : 'none'
                            }}>
                                <div style={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'baseline',
                                    flexWrap: 'wrap',
                                    gap: '1rem',
                                    marginBottom: '0.8rem'
                                }}>
                                    <h3 style={{ fontSize: '1.4rem', color: 'var(--color-text)', margin: 0 }}>
                                        {item.title}
                                    </h3>
                                    <div style={{ flexGrow: 1, borderBottom: '1px dotted rgba(255, 255, 255, 0.4)', margin: '0 1rem', position: 'relative', top: '-6px' }} className="dotted-line"></div>
                                    <span style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--color-text)', whiteSpace: 'nowrap' }}>
                                        {item.price}
                                    </span>
                                </div>
                                <p style={{ color: 'var(--color-text-light)', margin: 0, fontSize: '1rem' }}>
                                    {item.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div style={{
                        marginTop: '4rem',
                        padding: '2rem',
                        backgroundColor: 'var(--color-background)',
                        border: '1px solid rgba(255, 255, 255, 0.05)',
                        borderRadius: '12px'
                    }}>
                        <h3 style={{ fontSize: '1.4rem', color: 'var(--color-text)', marginBottom: '1rem' }}>
                            Dodatečné objednávky
                        </h3>
                        <p style={{ color: 'var(--color-text-light)', fontSize: '1rem', margin: 0, lineHeight: 1.6 }}>
                            U každého svatebního balíčku je možnost si doplatit hodiny focení navíc + 1 600 Kč/hod.
                            U svatebního focení si fotografie k tisku vybíráte sami. Fotky k úpravě vybírám já.
                            Cestovné: 8 Kč/km po celé ČR.
                        </p>
                    </div>

                </div>
            </section>
        </div>
    );
}

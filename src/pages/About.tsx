import { Link } from 'react-router-dom';

export default function About() {
    return (
        <div className="animate-fade-in">
            <section className="section">
                <div className="container">
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4rem', alignItems: 'center' }}>

                        <div style={{ flex: '1 1 400px', position: 'relative' }}>
                            <div style={{ position: 'absolute', top: '-1rem', left: '-1rem', width: '100%', height: '100%', border: '2px solid var(--color-primary)', borderRadius: '24px', zIndex: '-1' }}></div>
                            <img
                                src="/images/Katerina.webp"
                                alt="Fotografka Kateřina před objektivem"
                                style={{ width: '100%', height: 'auto', display: 'block', objectFit: 'cover', aspectRatio: '3/4', borderRadius: '24px' }}
                            />
                        </div>

                        <div style={{ flex: '1 1 500px' }}>
                            <h1 style={{ marginBottom: '1rem', fontSize: '3rem' }}>Ahoj, já jsem Kateřina</h1>
                            <p style={{ fontSize: '1.2rem', color: 'var(--color-primary)', marginBottom: '2rem', fontFamily: 'var(--font-heading)', fontStyle: 'italic' }}>
                                Zachycuji světlo, lásku a vaše skutečné já.
                            </p>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--color-text-light)', marginBottom: '2.5rem' }}>
                                <p>
                                    Fotografie pro mě není jen o mačkání spouště. Nabízím širokou škálu fotografických služeb zaměřených na portréty, new-born, svatební a rodinné fotografie s více než osmiletou praxí. Věřím, že nejkrásnější snímky vznikají tehdy, když zapomenete, že jste foceni.
                                </p>
                                <p>
                                    Cílem každého mého focení je zachytit jedinečné okamžiky, které si budete chtít uchovat navždy. Osobní a profesionální přístup, smysl pro detail a ovládání moderní postprodukce (Lightroom/Photoshop) mi pomáhá vytvářet stylové vzpomínky s přesnou kompozicí i hrou světla a stínu.
                                </p>
                                <p>
                                    V současnosti se hodně věnuji také focení novorozenců v projektu rodinné porodnice v Nemocnici AGEL Valašské Meziříčí (Mimilens.cz). Můj rukopis je minimalistický, autentický a emotivní. Nesnažím se o dokonalé pózy, ale o upřímné radosti.
                                </p>
                            </div>

                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <Link to="/portfolio" className="btn">Mé portfolio</Link>
                                <Link to="/kontakt" className="btn btn-outline">Napište mi</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <section className="section" style={{ backgroundColor: 'var(--color-primary-light)' }}>
                <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
                    <h2 style={{ marginBottom: '2rem', fontStyle: 'italic', fontWeight: 400 }}>
                        "Mým cílem je vytvořit fotografie, které nejen vidíte, ale především cítíte."
                    </h2>
                </div>
            </section>

            <section className="section">
                <div className="container" style={{ textAlign: 'center' }}>
                    <h3 style={{ marginBottom: '3rem', fontSize: '2rem' }}>Můj přístup k focení</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                        <div style={{ padding: '2rem', border: '1px solid rgba(0,0,0,0.05)' }}>
                            <h4 style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>Přirozenost</h4>
                            <p style={{ color: 'var(--color-text-light)', fontSize: '0.95rem' }}>Zaměřuji se na to, abyste byli uvolnění a sví. Výsledkem jsou autentické emoce.</p>
                        </div>
                        <div style={{ padding: '2rem', border: '1px solid rgba(0,0,0,0.05)' }}>
                            <h4 style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>Jemné světlo</h4>
                            <p style={{ color: 'var(--color-text-light)', fontSize: '0.95rem' }}>Nejraději pracuji s přirozeným měkkým světlem, které lichotí a vytváří magickou atmosféru.</p>
                        </div>
                        <div style={{ padding: '2rem', border: '1px solid rgba(0,0,0,0.05)' }}>
                            <h4 style={{ marginBottom: '1rem', fontSize: '1.2rem' }}>Bez spěchu</h4>
                            <p style={{ color: 'var(--color-text-light)', fontSize: '0.95rem' }}>Zejména u focení miminek a dětí si dáváme na čas. Vše se přizpůsobuje jejich tempu.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

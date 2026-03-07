import BlogCard from '../components/blog/BlogCard';

const blogPosts = [
    {
        id: 'priprava-na-foceni-novorozencu',
        title: 'Jak se připravit na focení novorozenců u vás doma',
        excerpt: 'Focení miminka v prvních dnech jeho života je krásný, ale někdy stresující zážitek. Přečtěte si pár tipů, jak zajistit, aby vše proběhlo v klidu.',
        image: 'https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&q=80&w=800',
        date: '2023-10-15',
        category: 'Tipy'
    },
    {
        id: 'kdy-se-fotit-v-tehotenstvi',
        title: 'Kdy je nejlepší čas na těhotenské focení?',
        excerpt: 'Kdy je bříško tak akorát velké, ale vy se ještě cítíte plná energie? Odpověď pro fotky plné pohody.',
        image: 'https://images.unsplash.com/photo-1510006851064-e6056cd0e3a8?auto=format&fit=crop&q=80&w=800',
        date: '2023-09-22',
        category: 'Těhotenství'
    },
    {
        id: 'svatebni-pribeh-jana-a-petr',
        title: 'Svatební příběh: Jana a Petr, láska v srdci přírody',
        excerpt: 'Nahlédněte do emotivní letní svatby, která se odehrála pod širým nebem obklopená lesy a rodinou.',
        image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800',
        date: '2023-08-10',
        category: 'Svatby'
    },
    {
        id: 'co-si-obleci-na-rodinne-foceni',
        title: 'Co si obléci na rodinné lifestylové focení',
        excerpt: 'Lámete si hlavu s tím, jak sladit rodinu? Zde je návod, jak vybrat barvy a materiály, které vyniknou na každé fotce.',
        image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=800',
        date: '2023-07-05',
        category: 'Rodina'
    }
];

export default function Blog() {
    return (
        <div className="animate-fade-in">
            <section className="section" style={{ backgroundColor: 'var(--color-primary-light)' }}>
                <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
                    <h1 style={{ marginBottom: '1rem' }}>Zápisky a inspirace</h1>
                    <p style={{ color: 'var(--color-text-light)' }}>
                        Články, tipy na focení, ukázky z mých oblíbených svateb a střípky z mé fotografické cesty.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '3rem 2rem' }}>
                        {blogPosts.map((post, index) => (
                            <div key={post.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                                <BlogCard {...post} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

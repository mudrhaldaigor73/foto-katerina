import { Helmet } from 'react-helmet-async';
import BlogCard from '../components/blog/BlogCard';
import { blogPosts } from '../data/blogPosts';

export default function Blog() {
    return (
        <div className="animate-fade-in">
            <Helmet>
                <title>Blog | Foto Kateřina – tipy a inspirace</title>
                <meta name="description" content="Tipy na focení, příprava na novorozenecké a těhotenské focení, výběr oblečení pro rodiny a ukázky z mých oblíbených svateb." />
            </Helmet>

            <section className="section" style={{ backgroundColor: 'var(--color-primary-light)' }}>
                <div className="container" style={{ textAlign: 'center', maxWidth: '800px' }}>
                    <h1 style={{ marginBottom: '1rem' }}>Zápisky a inspirace</h1>
                    <p style={{ color: 'var(--color-text-light)' }}>
                        Články, tipy na focení a střípky z mé fotografické cesty.
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '3rem 2rem' }}>
                        {blogPosts.map((post, index) => (
                            <div key={post.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                                <BlogCard
                                    id={post.id}
                                    title={post.title}
                                    excerpt={post.excerpt}
                                    image={post.image}
                                    date={post.date}
                                    category={post.category}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

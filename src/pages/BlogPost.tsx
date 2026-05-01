import { useParams, Link, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../data/blogPosts';
import styles from './BlogPost.module.css';

export default function BlogPost() {
    const { slug } = useParams<{ slug: string }>();
    const post = blogPosts.find((p) => p.slug === slug);

    if (!post) return <Navigate to="/blog" replace />;

    const formattedDate = new Date(post.date).toLocaleDateString('cs-CZ', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    });

    return (
        <div className="animate-fade-in">
            <Helmet>
                <title>{post.title} | Foto Kateřina</title>
                <meta name="description" content={post.metaDescription} />
            </Helmet>

            {/* Hero */}
            <section style={{
                position: 'relative',
                height: '420px',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'flex-end',
            }}>
                <img
                    src={post.image}
                    alt={post.title}
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)',
                }} />
                <div className="container" style={{ position: 'relative', zIndex: 1, paddingBottom: '3rem' }}>
                    <span style={{
                        display: 'inline-block',
                        backgroundColor: 'var(--color-primary)',
                        color: 'white',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        padding: '0.3rem 0.75rem',
                        borderRadius: '2px',
                        marginBottom: '1rem',
                    }}>{post.category}</span>
                    <h1 style={{ color: 'white', fontSize: 'clamp(1.5rem, 4vw, 2.2rem)', maxWidth: '720px', lineHeight: 1.3 }}>
                        {post.title}
                    </h1>
                    <p style={{ color: 'rgba(255,255,255,0.7)', marginTop: '0.75rem', fontSize: '0.9rem' }}>
                        <time dateTime={post.date}>{formattedDate}</time>
                    </p>
                </div>
            </section>

            {/* Content */}
            <section className="section">
                <div className="container">
                    <div
                        className={styles.prose}
                        dangerouslySetInnerHTML={{ __html: post.contentHtml }}
                    />
                </div>
            </section>

            {/* Back + CTA */}
            <section className="section" style={{ backgroundColor: 'var(--color-primary-light)', textAlign: 'center' }}>
                <div className="container" style={{ maxWidth: '600px' }}>
                    <h2 style={{ marginBottom: '1rem' }}>Zaujalo vás téma?</h2>
                    <p style={{ color: 'var(--color-text-light)', marginBottom: '2rem' }}>
                        Napište mi — ráda vám poradím nebo rovnou domluvíme termín focení.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <Link to="/kontakt" className="btn">Napsat Kateřině</Link>
                        <Link to="/blog" className="btn btn-outline">Zpět na blog</Link>
                    </div>
                </div>
            </section>
        </div>
    );
}

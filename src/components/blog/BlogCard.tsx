import { Link } from 'react-router-dom';
import styles from './BlogCard.module.css';

interface BlogCardProps {
    id: string;
    title: string;
    excerpt: string;
    image: string;
    date: string;
    category: string;
}

export default function BlogCard({ id, title, excerpt, image, date, category }: BlogCardProps) {
    return (
        <article className={styles.card}>
            <Link to={`/blog/${id}`} className={styles.imageLink}>
                <div className={styles.imageWrapper}>
                    <img src={image} alt={title} className={styles.image} loading="lazy" />
                    <div className={styles.categoryBadge}>{category}</div>
                </div>
            </Link>
            <div className={styles.content}>
                <div className={styles.meta}>
                    <time dateTime={date}>{new Date(date).toLocaleDateString('cs-CZ')}</time>
                </div>
                <h3 className={styles.title}>
                    <Link to={`/blog/${id}`}>{title}</Link>
                </h3>
                <p className={styles.excerpt}>{excerpt}</p>
                <Link to={`/blog/${id}`} className={styles.readMore}>Číst více</Link>
            </div>
        </article>
    );
}

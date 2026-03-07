import { useState } from 'react';
import Lightbox from './Lightbox';
import styles from './Gallery.module.css';

export interface GalleryImage {
    id: string;
    url: string;
    category: string;
    alt: string;
}

interface GalleryProps {
    images: GalleryImage[];
    categories?: { id: string; label: string }[];
}

export default function Gallery({ images, categories }: GalleryProps) {
    const [activeCategory, setActiveCategory] = useState('vse');
    const [lightboxData, setLightboxData] = useState<{ isOpen: boolean; index: number }>({
        isOpen: false,
        index: 0,
    });

    const filteredImages = activeCategory === 'vse'
        ? images
        : images.filter(img => img.category === activeCategory);

    const openLightbox = (image: GalleryImage) => {
        // Find index in the ORIGINAL images array to allow scrolling through all or just filtered?
        // Let's allow scrolling through filtered images
        const index = filteredImages.findIndex(img => img.id === image.id);
        if (index !== -1) {
            setLightboxData({ isOpen: true, index });
        }
    };

    return (
        <div className={styles.wrapper}>
            {categories && categories.length > 0 && (
                <div className={styles.filters}>
                    <button
                        className={`${styles.filterBtn} ${activeCategory === 'vse' ? styles.active : ''}`}
                        onClick={() => setActiveCategory('vse')}
                    >
                        Vše
                    </button>
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            className={`${styles.filterBtn} ${activeCategory === cat.id ? styles.active : ''}`}
                            onClick={() => setActiveCategory(cat.id)}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>
            )}

            <div className={styles.grid}>
                {filteredImages.map((image, index) => (
                    <div
                        key={image.id}
                        className={`${styles.item} animate-fade-in`}
                        style={{ animationDelay: `${(index % 6) * 0.1}s` }}
                        onClick={() => openLightbox(image)}
                    >
                        <img src={image.url} alt={image.alt} className={styles.image} loading="lazy" />
                        <div className={styles.overlay}>
                            <span>Zvětšit</span>
                        </div>
                    </div>
                ))}
            </div>

            <Lightbox
                images={filteredImages}
                initialIndex={lightboxData.index}
                isOpen={lightboxData.isOpen}
                onClose={() => setLightboxData({ isOpen: false, index: 0 })}
            />
        </div>
    );
}

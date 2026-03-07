import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import styles from './Lightbox.module.css';

interface LightboxProps {
    images: { id: string; url: string; category: string; alt: string }[];
    initialIndex: number;
    isOpen: boolean;
    onClose: () => void;
}

export default function Lightbox({ images, initialIndex, isOpen, onClose }: LightboxProps) {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);

    if (!isOpen) return null;

    const handlePrevious = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const currentImage = images[currentIndex];

    return (
        <div className={styles.overlay} onClick={onClose}>
            <button className={styles.closeBtn} onClick={onClose} aria-label="Zavřít galerii">
                <X size={32} />
            </button>

            {images.length > 1 && (
                <button className={styles.navBtnPrev} onClick={handlePrevious} aria-label="Předchozí obrázek">
                    <ChevronLeft size={36} />
                </button>
            )}

            <div className={styles.content} onClick={(e) => e.stopPropagation()}>
                <img src={currentImage.url} alt={currentImage.alt} className={styles.image} />
                <p className={styles.counter}>{currentIndex + 1} / {images.length}</p>
            </div>

            {images.length > 1 && (
                <button className={styles.navBtnNext} onClick={handleNext} aria-label="Další obrázek">
                    <ChevronRight size={36} />
                </button>
            )}
        </div>
    );
}

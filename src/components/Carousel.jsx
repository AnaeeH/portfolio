import { useState } from 'react';
import { asset } from '../utils/asset';

export default function Carousel({ images }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    if (!images || images.length === 0) return null;

    const currentImage = images[currentIndex];
    const hasMultiple = images.length > 1;

    const goPrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <figure className="mb-10">
            <div className="relative aspect-video overflow-hidden rounded-2xl bg-surface-block">
                {currentImage.type === 'image' ? (
                    <img
                        src={asset(currentImage.src)}
                        alt={currentImage.alt}
                        className="h-full w-full object-contain"
                        loading={currentIndex === 0 ? 'eager' : 'lazy'}
                    />
                ) : (
                    <video
                        key={currentImage.src}
                        src={asset(currentImage.src)}
                        poster={currentImage.poster ? asset(currentImage.poster) : undefined}
                        className="h-full w-full object-contain"
                        controls
                        playsInline
                        preload="metadata"
                        aria-label={currentImage.alt}
                    >
                        Votre navigateur ne supporte pas la lecture de vidéos.
                    </video>
                )}

                {hasMultiple && (
                    <>
                        <button
                            type="button"
                            onClick={goPrevious}
                            aria-label="Image précédente"
                            className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-navy/80 text-white shadow-md backdrop-blur-sm transition-all hover:bg-navy hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2.5"
                                stroke="currentColor"
                                className="h-5 w-5"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>

                        <button
                            type="button"
                            onClick={goNext}
                            aria-label="Image suivante"
                            className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-navy/80 text-white shadow-md backdrop-blur-sm transition-all hover:bg-navy hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2.5"
                                stroke="currentColor"
                                className="h-5 w-5"
                                aria-hidden="true"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-navy/80 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                            {currentIndex + 1} / {images.length}
                        </div>
                    </>
                )}
            </div>

            {currentImage.caption && (
                <figcaption className="mt-3 text-center text-sm italic text-neutral-500">
                    {currentImage.caption}
                </figcaption>
            )}
        </figure>
    );
}
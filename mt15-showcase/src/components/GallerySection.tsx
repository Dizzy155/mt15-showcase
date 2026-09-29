import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import SectionHeading from './SectionHeading';


const IMAGES = [
  { src: '/assets/gallery/side.svg', alt: 'MT-15 V2 side profile' },
  { src: '/assets/gallery/front.svg', alt: 'MT-15 V2 front view with LED projector' },
  { src: '/assets/gallery/cockpit.svg', alt: 'MT-15 V2 cockpit and LCD display' },
  { src: '/assets/gallery/rear.svg', alt: 'MT-15 V2 compact rear' },
  { src: '/assets/gallery/headlight.svg', alt: 'MT-15 V2 bi-functional LED projector headlight' },
  { src: '/assets/gallery/engine.svg', alt: 'MT-15 V2 155cc engine' },
  { src: '/assets/gallery/wheel.svg', alt: 'MT-15 V2 17-inch wheel' },
  { src: '/assets/gallery/exhaust.svg', alt: 'MT-15 V2 exhaust detail' },
  { src: '/assets/gallery/tank.svg', alt: 'MT-15 V2 muscular fuel tank' },
];

export default function GallerySection() {
  const [index, setIndex] = useState<number | null>(null);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIndex(null);
      if (e.key === 'ArrowRight') setIndex((i) => ((i ?? 0) + 1) % IMAGES.length);
      if (e.key === 'ArrowLeft') setIndex((i) => ((i ?? 0) - 1 + IMAGES.length) % IMAGES.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [index]);

  const prev = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    setIndex((i) => ((i ?? 0) - 1 + IMAGES.length) % IMAGES.length);
  };
  const next = (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    setIndex((i) => ((i ?? 0) + 1) % IMAGES.length);
  };

  return (
    <section id="gallery" className="bg-surface relative border-y border-theme py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          label="Gallery"
          title="Every Angle. Zero Mercy."
          sub="Nine frames of the dark side. Hover to inspect, click to go fullscreen."
        />

        <div className="mt-12 grid auto-rows-[150px] grid-cols-2 gap-3 md:auto-rows-[190px] md:grid-cols-4 md:gap-4">
          {IMAGES.map((img, i) => (
            <figure
              key={img.src}
              className={`border-theme group relative overflow-hidden border ${i === 0 ? 'col-span-2 row-span-2' : ''}`}
            >
              <button
                type="button"
                className="h-full w-full"
                onClick={() => setIndex(i)}
                aria-label={`Open fullscreen: ${img.alt}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-3 text-left text-[9px] uppercase tracking-[0.3em] text-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {img.alt}
                </figcaption>
              </button>
            </figure>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {index !== null && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Image viewer"
            className="fixed inset-0 z-[90] flex items-center justify-center bg-black/95 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIndex(null)}
          >
            <button
              type="button"
              aria-label="Close viewer"
              onClick={() => setIndex(null)}
              className="absolute right-5 top-5 font-display text-3xl text-white/80 transition-colors hover:text-white"
            >
              ×
            </button>
            <button
              type="button"
              aria-label="Previous image"
              onClick={prev}
              className="absolute left-3 top-1/2 -translate-y-1/2 p-4 font-display text-4xl text-white/60 transition-colors hover:text-white md:left-8"
            >
              ‹
            </button>
            <motion.img
              key={index}
              src={IMAGES[index].src}
              alt={IMAGES[index].alt}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              onClick={(e) => e.stopPropagation()}
              className="border-theme max-h-[80vh] max-w-[90vw] border object-contain"
            />
            <button
              type="button"
              aria-label="Next image"
              onClick={next}
              className="absolute right-3 top-1/2 -translate-y-1/2 p-4 font-display text-4xl text-white/60 transition-colors hover:text-white md:right-8"
            >
              ›
            </button>
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-display text-lg tracking-[0.3em] text-white/70">
              {String(index + 1).padStart(2, '0')} / {String(IMAGES.length).padStart(2, '0')}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

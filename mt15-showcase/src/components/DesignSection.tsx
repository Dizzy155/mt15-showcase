import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import Reveal from './Reveal';

const ZONES = [
  'LED projector headlight',
  'Muscular fuel tank',
  'Compact tail',
  'Exposed mechanical design',
  'MT-inspired styling',
];

export default function DesignSection() {
  const ref = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref as React.RefObject<HTMLElement>,
    offset: ['start end', 'end start'],
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <section ref={ref} className="relative h-[82vh] overflow-hidden md:h-[92vh]" aria-label="Design showcase">
      <motion.div style={{ y: reduced ? 0 : y }} className="absolute inset-[-12%]">
        <img
          src="/assets/gallery/side.webp"
          alt="MT-15 V2 side profile cinematic view"
          loading="lazy"
          className="h-full w-full object-cover opacity-70"
        />
      </motion.div>
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, var(--c-background) 0%, transparent 30%, transparent 65%, var(--c-background) 100%)' }}
      />

      <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center">
        <Reveal>
          <p className="section-label">Design</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 font-display text-[clamp(44px,8vw,110px)] font-bold uppercase leading-[0.9] tracking-tight">
            Aggression, <span className="text-accent">Engineered.</span>
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {ZONES.map((z) => (
              <span key={z} className="border-theme flex items-center gap-2 border px-3 py-1.5 text-[9px] uppercase tracking-[0.25em] text-muted-theme">
                <span className="text-accent">▸</span> {z}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

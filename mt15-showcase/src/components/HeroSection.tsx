import type { MouseEvent as ReactMouseEvent } from 'react';
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';
import { useVariant } from '../context/VariantContext';
import BikeViewer from './BikeViewer';
import ColorSelector from './ColorSelector';

export default function HeroSection() {
  const { variant } = useVariant();
  const reduced = useReducedMotion();

  // Subtle mouse parallax: bike moves opposite the cursor (max ~13px),
  // decorative background moves even less.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 55, damping: 18 });
  const sy = useSpring(my, { stiffness: 55, damping: 18 });
  const bgX = useTransform(sx, (v) => v * 0.35);
  const bgY = useTransform(sy, (v) => v * 0.35);

  const onMove = (e: ReactMouseEvent<HTMLElement>) => {
    if (reduced) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width - 0.5) * -26);
    my.set(((e.clientY - r.top) / r.height - 0.5) * -14);
  };

  return (
    <section
      id="mt15"
      onMouseMove={onMove}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-[76px]"
    >
      {/* Ambient glow — crossfades to the selected variant's accent */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <AnimatePresence>
          <motion.div
            key={variant.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            className="absolute right-[-8%] top-1/2 h-[85vmin] w-[85vmin] -translate-y-1/2 rounded-full"
            style={{ background: 'radial-gradient(closest-side, var(--c-glow), transparent 72%)' }}
          />
        </AnimatePresence>
        <motion.div style={{ x: bgX, y: bgY }} aria-hidden="true" className="absolute inset-0">
          <div className="absolute left-[2%] top-[14%] select-none font-display text-[26vw] font-bold leading-none tracking-tighter text-white/[0.025]">
            MT
          </div>
          <div className="absolute bottom-[10%] left-[8%] h-px w-40 bg-[var(--c-border)]" />
          <div className="absolute bottom-[10%] left-[8%] h-24 w-px bg-[var(--c-border)]" />
        </motion.div>
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-5 md:px-8 lg:grid-cols-[1fr_1.25fr]">
        <div className="pt-10 lg:pt-0">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="section-label"
          >
            The Dark Side of Japan
          </motion.p>

          <h1 className="mt-4 font-display text-[clamp(64px,12vw,168px)] font-bold uppercase leading-[0.85] tracking-tight">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 44 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              MT<span className="text-accent">-15</span>
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-3 font-display text-xl uppercase tracking-[0.3em] text-muted-theme md:text-2xl"
          >
            The Dark Side of Japan
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.65 }}
            className="mt-6 max-w-md text-sm leading-relaxed text-muted-theme md:text-base"
          >
            Born from Yamaha&apos;s hyper-naked DNA. Compact. Aggressive. Unapologetic.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => document.getElementById('performance')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore MT-15
            </button>
            <button
              type="button"
              className="btn btn-ghost"
              onClick={() => document.getElementById('specifications')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Specs
            </button>
          </motion.div>

          {/* Data-driven hero stats with thin separators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.95 }}
            className="mt-10 flex items-stretch border-y border-theme py-4"
          >
            {variant.heroStats.map((s, i) => (
              <div
                key={s.label}
                className={`flex-1 ${i > 0 ? 'border-l border-theme pl-5' : ''} ${i < variant.heroStats.length - 1 ? 'pr-5' : ''}`}
              >
                <div className="font-display text-3xl font-bold leading-none md:text-4xl">{s.value}</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.3em] text-muted-theme">{s.label}</div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-8"
          >
            <ColorSelector />
          </motion.div>
        </div>

        <motion.div style={{ x: sx, y: sy }} className="relative pb-10 lg:pb-0">
          <BikeViewer />
        </motion.div>
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
      >
        <span className="text-[9px] uppercase tracking-[0.4em] text-muted-theme">Scroll</span>
        <motion.span
          animate={reduced ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="block h-8 w-px bg-gradient-to-b from-[var(--c-accent)] to-transparent"
        />
      </div>
    </section>
  );
}

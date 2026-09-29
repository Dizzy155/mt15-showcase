import { useState } from 'react';
import type { CSSProperties } from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';

const MIN = 1000;
const MAX = 11000;
/** Indicative crossover for Yamaha's 155 VVA design — not an official figure. */
const VVA_RPM = 7400;

export default function VVASection() {
  const [rpm, setRpm] = useState(3000);
  const active = rpm >= VVA_RPM;
  const pct = ((rpm - MIN) / (MAX - MIN)) * 100;
  const vvaPct = ((VVA_RPM - MIN) / (MAX - MIN)) * 100;
  const intensity = 0.4 + (rpm / MAX) * 1.4;

  return (
    <section id="technology" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-5xl px-5 md:px-8">
        <SectionHeading
          label="Technology"
          title="When VVA Kicks In"
          sub="Two intake cam profiles in one engine. Drag the throttle and feel the personality change."
          align="center"
        />

        <Reveal className="mt-12">
          <div className="bg-surface border-theme relative border p-6 md:p-10">
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <div className="font-display text-6xl font-bold leading-none tracking-tight md:text-7xl">
                  {rpm.toLocaleString('en-IN')}
                  <span className="text-accent ml-2 text-2xl md:text-3xl">RPM</span>
                </div>
                <div className="mt-2 text-[10px] uppercase tracking-[0.3em] text-muted-theme">
                  {active ? 'High-lift cam profile engaged' : 'Low-lift cam profile — torque first'}
                </div>
              </div>
              <div className="min-h-[28px]">
                {active && (
                  <motion.span
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-block border border-[var(--c-accent)] px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.3em] text-accent"
                    style={{ boxShadow: '0 0 22px var(--c-glow), inset 0 0 12px var(--c-glow)' }}
                  >
                    VVA Active
                  </motion.span>
                )}
              </div>
            </div>

            {/* RPM bar */}
            <div className="relative mt-10">
              <div
                className="absolute -top-8 -translate-x-1/2 text-[9px] uppercase tracking-[0.2em] text-muted-theme"
                style={{ left: `${vvaPct}%` }}
              >
                ≈ VVA crossover
              </div>
              <div className="absolute -top-2 bottom-0 w-px bg-[var(--c-accent)]/50" style={{ left: `${vvaPct}%` }} />
              <div className="h-2 w-full overflow-hidden bg-white/10">
                <div
                  className="h-full transition-[width] duration-150"
                  style={{
                    width: `${pct}%`,
                    background: 'var(--c-accent)',
                    boxShadow: `0 0 ${18 * intensity}px ${8 * intensity}px var(--c-glow)`,
                  }}
                />
              </div>
              <div className="mt-3 flex justify-between text-[10px] uppercase tracking-[0.3em] text-muted-theme">
                <span>Low rpm</span>
                <span className="text-accent">VVA</span>
                <span>High rpm</span>
              </div>
            </div>

            <input
              type="range"
              min={MIN}
              max={MAX}
              step={100}
              value={rpm}
              onChange={(e) => setRpm(Number(e.target.value))}
              aria-label="Engine speed in RPM"
              className="rpm-slider mt-8"
              style={{ '--fill': `${pct}%` } as CSSProperties}
            />
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="mt-6 text-center text-[11px] leading-relaxed text-muted-theme">
            Visualisation is conceptual. Crossover shown at an approximate 7,400 rpm typical of
            Yamaha&apos;s 155 VVA architecture — verify the exact figure against official documentation.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

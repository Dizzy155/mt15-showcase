import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const NODES = ['ENGINE', 'CLUTCH', 'GEARBOX', 'REAR WHEEL'];

/**
 * Conceptual mechanical visualisation — not an engineering simulator.
 * Shows torque flow lighting up, a normal downshift spike, then the
 * slipper clutch damping that spike.
 */
export default function SlipperClutch() {
  const [lit, setLit] = useState(0);
  const [stage, setStage] = useState(0); // 0 idle · 1 spike · 2 slipper
  const timers = useRef<number[]>([]);
  const running = lit > 0 && stage < 2;

  useEffect(() => () => timers.current.forEach(clearTimeout), []);

  const start = () => {
    timers.current.forEach(clearTimeout);
    timers.current = [];
    setLit(0);
    setStage(0);
    const t = (fn: () => void, ms: number) => timers.current.push(window.setTimeout(fn, ms));
    t(() => setLit(1), 150);
    t(() => setLit(2), 350);
    t(() => setStage(1), 500);
    t(() => setLit(3), 550);
    t(() => setLit(4), 750);
    t(() => setStage(2), 1700);
  };

  return (
    <div className="border-theme mt-14 border p-6 md:p-8">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h3 className="font-display text-2xl font-bold uppercase tracking-wide md:text-3xl">
          Aggressive downshift. <span className="text-accent">Tamed.</span>
        </h3>
        <button type="button" className="btn btn-ghost" onClick={start} disabled={running}>
          {running ? 'Running…' : stage === 2 ? 'Replay' : 'How It Works'}
        </button>
      </div>

      {/* Torque flow */}
      <div className="mt-8 flex items-center justify-between gap-2">
        {NODES.map((n, i) => (
          <div key={n} className="flex flex-1 items-center gap-2">
            <motion.div
              animate={{
                borderColor: lit > i ? 'var(--c-accent)' : 'var(--c-border)',
                color: lit > i ? 'var(--c-accent)' : 'var(--c-muted)',
                boxShadow: lit > i ? '0 0 18px -2px var(--c-glow)' : '0 0 0 rgba(0,0,0,0)',
              }}
              transition={{ duration: 0.4 }}
              className="border-theme bg-surface flex-1 border px-2 py-3 text-center text-[10px] font-semibold uppercase tracking-[0.2em]"
            >
              {n}
            </motion.div>
            {i < NODES.length - 1 && (
              <motion.span
                animate={{ color: lit > i + 1 ? 'var(--c-accent)' : 'var(--c-muted)' }}
                className="text-lg"
                aria-hidden="true"
              >
                →
              </motion.span>
            )}
          </div>
        ))}
      </div>

      {/* Torque chart */}
      <div className="mt-8 overflow-hidden">
        <svg viewBox="0 0 640 240" className="w-full" role="img" aria-label="Conceptual torque comparison chart">
          <line x1="20" y1="200" x2="620" y2="200" stroke="var(--c-border)" strokeWidth="1" />
          <line x1="20" y1="200" x2="20" y2="24" stroke="var(--c-border)" strokeWidth="1" />
          <text x="26" y="42" fontSize="10" letterSpacing="2" fill="var(--c-muted)">TORQUE</text>
          {/* Normal downshift: violent spike */}
          <motion.path
            d="M 24 196 L 150 196 C 185 196 195 40 230 40 C 260 40 266 196 300 196 L 616 196"
            fill="none"
            stroke="#8b9098"
            strokeWidth="2.5"
            strokeDasharray="6 5"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: stage >= 1 ? 1 : 0 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
          />
          {/* Slipper clutch: damped */}
          <motion.path
            d="M 24 196 L 350 196 C 385 196 395 128 430 128 C 460 128 466 196 500 196 L 616 196"
            fill="none"
            stroke="var(--c-accent)"
            strokeWidth="3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: stage >= 2 ? 1 : 0 }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
            style={{ filter: 'drop-shadow(0 0 6px var(--c-glow))' }}
          />
          <text x="300" y="226" fontSize="10" letterSpacing="3" fill="#8b9098">WITHOUT SLIPPER</text>
          <text x="470" y="120" fontSize="10" letterSpacing="3" fill="var(--c-accent)">WITH SLIPPER</text>
        </svg>
      </div>

      <p className="mt-4 text-[11px] leading-relaxed text-muted-theme">
        Conceptual visualisation. A slipper clutch lets the clutch slip momentarily on an aggressive
        downshift, absorbing the torque shock before it reaches the rear tyre — and the assist cam
        keeps lever effort light.
      </p>
    </div>
  );
}

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * Subtle custom cursor for fine-pointer (desktop) devices only.
 * Expands softly over interactive elements. Disabled with reduced motion.
 */
export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 500, damping: 45, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 500, damping: 45, mass: 0.4 });

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduced) return;
    setEnabled(true);
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement | null;
      setHovering(!!target?.closest('a, button, input, [data-cursor]'));
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[110]"
      style={{ x: sx, y: sy }}
    >
      <motion.div
        animate={{ scale: hovering ? 2 : 1, opacity: hovering ? 0.9 : 0.6 }}
        transition={{ duration: 0.25 }}
        className="-ml-3 -mt-3 h-6 w-6 rounded-full border border-[var(--c-accent)] bg-[var(--c-accent)]/10"
        style={{ mixBlendMode: 'difference' }}
      />
    </motion.div>
  );
}

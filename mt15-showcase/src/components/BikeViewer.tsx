import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { useVariant } from '../context/VariantContext';

/**
 * The hero motorcycle. On variant change the old render exits with a
 * fade + horizontal drift + scale while the new one enters from the
 * opposite side — a cinematic swap, not a hard cut.
 */
export default function BikeViewer() {
  const { variant } = useVariant();
  const reduced = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-[860px]">
      <div
        aria-hidden="true"
        className="absolute inset-x-[10%] bottom-[3%] h-10 rounded-[50%] bg-black/60 blur-2xl"
      />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={variant.id}
          className="relative"
          initial={{ opacity: 0, x: 80, scale: 0.96, filter: 'blur(6px)' }}
          animate={{ opacity: 1, x: 0, scale: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, x: -80, scale: 0.96, filter: 'blur(6px)' }}
          transition={{ duration: reduced ? 0 : 0.75, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.img
            src={variant.images.hero}
            alt={`Yamaha MT-15 V2 — ${variant.name}`}
            draggable={false}
            className="w-full drop-shadow-[0_30px_50px_rgba(0,0,0,0.55)]"
            animate={reduced ? undefined : { y: [0, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

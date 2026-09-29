import { motion } from 'framer-motion';

interface Props {
  progress: number;
}

/**
 * Premium loading screen. Progress is driven by real asset preloading in App —
 * it stays only as long as the hero renders need, with no artificial delay.
 */
export default function LoadingScreen({ progress }: Props) {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0b0d]"
      exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
      aria-hidden="true"
    >
      <div className="overflow-hidden">
        <motion.div
          initial={{ y: '110%' }}
          animate={{ y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-6xl font-bold tracking-[0.15em] md:text-8xl"
        >
          MT<span className="text-accent">-15</span>
        </motion.div>
      </div>
      <div className="mt-8 h-px w-64 overflow-hidden bg-white/10 md:w-80">
        <motion.div
          className="h-full bg-[var(--c-accent)]"
          initial={false}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
        />
      </div>
      <div className="mt-4 text-[10px] uppercase tracking-[0.45em] text-[#8b9098]">
        Loading experience · {Math.round(progress)}%
      </div>
    </motion.div>
  );
}

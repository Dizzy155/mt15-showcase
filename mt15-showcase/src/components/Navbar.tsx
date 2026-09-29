import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useVariant } from '../context/VariantContext';

const LINKS = [
  { id: 'mt15', label: 'MT-15' },
  { id: 'performance', label: 'Performance' },
  { id: 'technology', label: 'Technology' },
  { id: 'features', label: 'Features' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'specifications', label: 'Specifications' },
];

export default function Navbar() {
  const { variant } = useVariant();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('mt15');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Scroll-spy: highlight the nav item of the section in view.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    LINKS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 ${scrolled ? 'nav-scrolled' : ''}`}>
        <nav
          aria-label="Primary"
          className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 md:px-8"
        >
          <button type="button" onClick={() => go('mt15')} aria-label="Back to top" className="text-left">
            <span className="font-display text-2xl font-bold tracking-[0.2em]">
              YAMAHA<span className="text-accent">.</span>
            </span>
            <span className="block text-[9px] uppercase tracking-[0.5em] text-muted-theme">MT Series</span>
          </button>

          <ul className="hidden items-center gap-8 lg:flex">
            {LINKS.map((l) => (
              <li key={l.id}>
                <button
                  type="button"
                  onClick={() => go(l.id)}
                  className={`relative text-[11px] font-medium uppercase tracking-[0.25em] transition-colors duration-300 ${
                    active === l.id ? 'text-accent' : 'text-muted-theme hover:text-[var(--c-text)]'
                  }`}
                >
                  {l.label}
                  {active === l.id && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-2 left-0 right-0 h-px bg-[var(--c-accent)]"
                      transition={{ duration: 0.4 }}
                    />
                  )}
                </button>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <button
              type="button"
              className="btn btn-primary hidden !px-6 !py-2.5 md:inline-flex"
              onClick={() => go('specifications')}
            >
              Explore
            </button>
            <button
              type="button"
              className="p-2 lg:hidden"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
            >
              <span className="block h-px w-6 bg-[var(--c-text)]" />
              <span className="mt-1.5 block h-px w-6 bg-[var(--c-text)]" />
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setOpen(false)} />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="bg-surface absolute right-0 top-0 flex h-full w-72 flex-col border-l border-theme p-8"
              aria-label="Mobile menu"
            >
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="self-end text-[11px] uppercase tracking-[0.3em] text-muted-theme"
              >
                Close ×
              </button>
              <div className="mb-6 mt-6">
                <span className="font-display text-xl uppercase tracking-[0.15em]">{variant.name}</span>
              </div>
              {LINKS.map((l, i) => (
                <motion.button
                  key={l.id}
                  type="button"
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i }}
                  onClick={() => go(l.id)}
                  className={`py-3 text-left font-display text-2xl uppercase tracking-wider ${
                    active === l.id ? 'text-accent' : 'text-[var(--c-text)]'
                  }`}
                >
                  {l.label}
                </motion.button>
              ))}
            </motion.aside>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

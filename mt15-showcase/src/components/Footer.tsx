import { useVariant } from '../context/VariantContext';

const LINKS = [
  { id: 'mt15', label: 'Overview' },
  { id: 'performance', label: 'Performance' },
  { id: 'technology', label: 'Technology' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'specifications', label: 'Specifications' },
];

export default function Footer() {
  const { variant } = useVariant();
  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <footer className="border-theme border-t">
      <div className="mx-auto max-w-7xl px-5 py-14 md:px-8">
        <div className="flex flex-col justify-between gap-10 md:flex-row">
          <div>
            <div className="font-display text-4xl font-bold tracking-[0.1em]">
              MT-15 <span className="text-accent">V2</span>
            </div>
            <div className="mt-2 text-[10px] uppercase tracking-[0.4em] text-muted-theme">
              The Dark Side of Japan
            </div>
            <div className="mt-3 text-[10px] uppercase tracking-[0.25em] text-muted-theme">
              Current shade — {variant.name}
            </div>
          </div>
          <nav aria-label="Footer">
            <ul className="flex flex-col gap-3">
              {LINKS.map((l) => (
                <li key={l.id}>
                  <button
                    type="button"
                    onClick={() => go(l.id)}
                    className="text-[11px] uppercase tracking-[0.3em] text-muted-theme transition-colors duration-300 hover:text-[var(--c-accent)]"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="border-theme mt-12 flex flex-col gap-3 border-t pt-6 text-[11px] leading-relaxed text-muted-theme md:flex-row md:items-center md:justify-between">
          <p>
            This is an independent showcase concept and is not an official Yamaha Motor India
            website. Not affiliated with or endorsed by Yamaha Motor Co., Ltd.
          </p>
          <p className="shrink-0">© 2026 MT-15 V2 Showcase Concept</p>
        </div>
      </div>
    </footer>
  );
}

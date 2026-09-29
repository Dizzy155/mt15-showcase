import { useVariant } from '../context/VariantContext';
import { bikeVariants } from '../data/variants';

/**
 * Circular variant swatches. Selecting one re-themes the ENTIRE site:
 * background, accents, glows, borders, buttons, nav indicator, loading
 * animation — everything derives from the variant's CSS variables.
 */
export default function ColorSelector() {
  const { variant, selectVariant } = useVariant();

  return (
    <div>
      <div className="flex items-center gap-3 md:gap-4" role="radiogroup" aria-label="Motorcycle colour">
        {bikeVariants.map((v) => {
          const selected = v.id === variant.id;
          return (
            <button
              key={v.id}
              type="button"
              role="radio"
              aria-checked={selected}
              aria-label={v.name}
              onClick={() => selectVariant(v.id)}
              className="group relative p-1.5"
            >
              <span
                className="block h-9 w-9 rounded-full border border-white/25 transition-transform duration-300 group-hover:scale-110"
                style={{ background: `linear-gradient(135deg, ${v.swatch[0]} 0%, ${v.swatch[1]} 100%)` }}
              />
              {selected && (
                <span
                  className="pointer-events-none absolute inset-0 rounded-full border border-[var(--c-accent)]"
                  style={{ boxShadow: '0 0 16px var(--c-glow), inset 0 0 10px var(--c-glow)' }}
                />
              )}
              <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap bg-black/75 px-2 py-1 text-[9px] uppercase tracking-[0.25em] text-[var(--c-text)] opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                {v.name}
              </span>
            </button>
          );
        })}
      </div>
      <div className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <span className="font-display text-lg uppercase tracking-[0.2em] md:text-xl">{variant.name}</span>
        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-theme">
          <span className="text-accent">●</span> Selected
        </span>
      </div>
      <p className="mt-1 max-w-xs text-xs leading-relaxed text-muted-theme">{variant.short}</p>
    </div>
  );
}

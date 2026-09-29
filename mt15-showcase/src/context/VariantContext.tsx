import { createContext, useContext, useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import { bikeVariants, DEFAULT_VARIANT_ID } from '../data/variants';
import type { BikeVariant, VariantId } from '../data/variants';

interface VariantContextValue {
  variant: BikeVariant;
  selectVariant: (id: VariantId) => void;
}

const VariantContext = createContext<VariantContextValue | null>(null);

export function VariantProvider({ children }: { children: ReactNode }) {
  const [id, setId] = useState<VariantId>(DEFAULT_VARIANT_ID);
  const variant = bikeVariants.find((v) => v.id === id) ?? bikeVariants[0];

  // The whole site theme derives from these CSS custom properties.
  // Every themed component reads var(--c-*) and transitions on change.
  const cssVars = {
    '--c-primary': variant.colors.primary,
    '--c-secondary': variant.colors.secondary,
    '--c-accent': variant.colors.accent,
    '--c-background': variant.colors.background,
    '--c-surface': variant.colors.surface,
    '--c-text': variant.colors.text,
    '--c-muted': variant.colors.muted,
    '--c-glow': variant.colors.glow,
    '--c-btn-text': variant.colors.buttonText,
    '--c-border': variant.colors.border,
  } as CSSProperties;

  return (
    <VariantContext.Provider value={{ variant, selectVariant: setId }}>
      <div className="themed-root min-h-screen" style={cssVars}>
        {children}
      </div>
    </VariantContext.Provider>
  );
}

export function useVariant(): VariantContextValue {
  const ctx = useContext(VariantContext);
  if (!ctx) throw new Error('useVariant must be used inside <VariantProvider>');
  return ctx;
}

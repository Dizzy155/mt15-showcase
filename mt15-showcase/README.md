# MT-15 V2 — The Dark Side of Japan (Showcase Concept)

A cinematic, fully interactive product-experience site for the Yamaha MT-15 V2.
React 18 + TypeScript + Vite + Tailwind CSS + Framer Motion.

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build
```

## What's inside

- **Full-site theming from one config** — every variant in `src/data/variants.ts`
  carries a complete colour system (primary / secondary / accent / background /
  surface / text / muted / glow / button / border). Switching the variant swaps
  the motorcycle render *and* re-themes the entire site through CSS custom
  properties with ~750 ms ease-in-out transitions.
- **5 variants**: Metallic Black, Ice Storm, Cyan Storm, Racing Blue, and the
  Monster Energy Yamaha MotoGP Edition. Adding a colour = one entry in
  `bikeVariants` + assets in `public/assets/bikes/<id>/`.
- Hero with mouse parallax, ambient variant-coloured glow crossfade, floating
  bike, data-driven stats and a circular variant selector with animated ring.
- Interactive VVA RPM visualisation (conceptual — crossover marked approximate).
- Engine highlights, conceptual slipper-clutch torque animation, chassis
  hotspots over the silhouette, parallax design showcase, headlight on/off
  interaction with bloom.
- Gallery with 1 large + 8 supporting images, hover zoom, fullscreen lightbox
  with prev/next, keyboard support and a counter.
- Specifications laid out as minimal typography groups, using published Yamaha
  India BS6 figures (verify before shipping).
- Loading screen driven by real asset preloading (no artificial delay),
  desktop-only custom cursor, scroll-spy navbar with animated active indicator,
  animated mobile drawer.
- Accessibility: alt text, ARIA roles/labels, focus-visible outlines,
  keyboard-navigable lightbox and hotspots, `prefers-reduced-motion` support.
- Performance: lightweight SVG art, lazy-loaded gallery, no blocking media.

## Image assets

`public/assets/**` contains **clearly labelled concept placeholders** (stylised
silhouettes / technical illustrations marked "CONCEPT PLACEHOLDER"). No random
non-MT-15 photography is used. To go live, replace them with licensed official
renders using the same paths — no code changes required:

```
public/assets/bikes/<variant>/hero.svg   (transparent side render, ~1000×560)
public/assets/bikes/<variant>/side.svg   (framed panel)
public/assets/bikes/<variant>/front.svg  public/assets/bikes/<variant>/rear.svg
public/assets/engine/engine.svg
public/assets/gallery/{side,front,cockpit,rear,headlight,engine,wheel,exhaust,tank}.svg
```

## Disclaimer

Independent showcase concept. Not an official Yamaha Motor India website and
not affiliated with or endorsed by Yamaha Motor Co., Ltd. All trademarks belong
to their respective owners.

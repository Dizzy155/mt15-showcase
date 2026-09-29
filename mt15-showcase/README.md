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

`public/assets/**` now uses real MT-15 photography in `.webp` format:

```
public/assets/bikes/<variant>/hero.webp   (transparent side/3-4 render, 1000x640 — used for hero, chassis and performance)
public/assets/engine/engine.webp
public/assets/gallery/{side,front,cockpit,rear,headlight,engine,wheel,exhaust,tank}.webp
```

To replace an image, upload a file with the same name and path. Make sure you have
the right to use every photo you publish.

## Disclaimer

Independent showcase concept. Not an official Yamaha Motor India website and
not affiliated with or endorsed by Yamaha Motor Co., Ltd. All trademarks belong
to their respective owners.

import { useState } from 'react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { useVariant } from '../context/VariantContext';

const ITEMS = [
  { label: 'DELTABOX FRAME', text: 'Rigidity exactly where it matters, compliance where it helps.' },
  { label: '37MM USD FRONT FORK', text: 'Stiffer, sharper — front-end feedback you can trust.' },
  { label: 'LINKED-TYPE MONOCROSS', text: 'Progressive rear compliance over broken tarmac.' },
  { label: '141 KG KERB', text: 'Featherweight for a 155cc streetfighter.' },
];

interface HotspotDef {
  top: string;
  left: string;
  title: string;
  text: string;
}

const HOTSPOTS: HotspotDef[] = [
  { top: '38%', left: '68%', title: '37MM USD FRONT FORK', text: 'Upside-down stanchions for precise steering response.' },
    { top: '55%', left: '47%', title: 'DELTABOX FRAME', text: "Yamaha's proven perimeter frame architecture." },
  { top: '55%', left: '30%', title: 'LINKED-TYPE MONOCROSS', text: 'Single rear shock with progressive linkage.' },
];

function Hotspot({ h }: { h: HotspotDef }) {
  const [openTip, setOpenTip] = useState(false);
  return (
    <div className="absolute" style={{ top: h.top, left: h.left }}>
      <button
        type="button"
        aria-label={h.title}
        onMouseEnter={() => setOpenTip(true)}
        onMouseLeave={() => setOpenTip(false)}
        onFocus={() => setOpenTip(true)}
        onBlur={() => setOpenTip(false)}
        onClick={() => setOpenTip((v) => !v)}
        className="group relative -ml-3 -mt-3 flex h-6 w-6 items-center justify-center"
      >
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--c-accent)] opacity-30" />
        <span className="relative inline-flex h-3 w-3 rounded-full border border-[var(--c-accent)] bg-[var(--c-background)] transition-shadow duration-300 group-hover:shadow-[0_0_14px_var(--c-glow)]" />
      </button>
      {openTip && (
        <div className="bg-surface border-theme pointer-events-none absolute bottom-8 left-1/2 z-10 w-52 -translate-x-1/2 border p-3 shadow-2xl">
          <div className="text-accent text-[10px] font-semibold uppercase tracking-[0.2em]">{h.title}</div>
          <p className="mt-1 text-[11px] leading-relaxed text-muted-theme">{h.text}</p>
        </div>
      )}
    </div>
  );
}

export default function ChassisSection() {
  const { variant } = useVariant();
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <SectionHeading
          label="Chassis"
          title="Light. Precise. Agile."
          sub="A deltabox spine, fat USD forks and a kerb weight that disappears beneath you."
          align="center"
        />

        <Reveal className="relative mx-auto mt-12 max-w-4xl">
          <div className="relative">
            <img
              src={variant.images.hero}
              alt={`MT-15 V2 technical silhouette with highlighted chassis components — ${variant.name}`}
              loading="lazy"
              className="w-full"
              draggable={false}
            />
            {HOTSPOTS.map((h) => (
              <Hotspot key={h.title} h={h} />
            ))}
          </div>
        </Reveal>

        <div className="mx-auto mt-12 grid max-w-4xl gap-x-8 gap-y-6 sm:grid-cols-2">
          {ITEMS.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.06}>
              <div className="border-theme flex items-baseline justify-between gap-4 border-t pt-4">
                <span className="text-accent text-[11px] font-semibold uppercase tracking-[0.25em]">{item.label}</span>
                <span className="text-right text-xs text-muted-theme">{item.text}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

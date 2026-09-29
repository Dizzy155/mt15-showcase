import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import { useVariant } from '../context/VariantContext';

const STATS = [
  { value: '155', unit: 'cc', label: 'Liquid-cooled engine' },
  { value: '18.4', unit: 'PS', label: 'Maximum power @ 10,000 rpm' },
  { value: '14.1', unit: 'Nm', label: 'Maximum torque @ 7,500 rpm' },
  { value: '6', unit: 'speed', label: 'Constant-mesh transmission' },
  { value: 'VVA', unit: '', label: 'Variable Valve Actuation' },
  { value: 'FI', unit: '', label: 'Fuel injection' },
];

export default function PerformanceSection() {
  const { variant } = useVariant();
  return (
    <section id="performance" className="relative py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 md:px-8 lg:grid-cols-2">
        <Reveal className="order-2 lg:order-1">
          <div className="overflow-hidden border border-theme">
            <img
              src={variant.images.side}
              alt={`MT-15 V2 side profile — ${variant.name}`}
              loading="lazy"
              className="w-full"
            />
          </div>
        </Reveal>

        <div className="order-1 lg:order-2">
          <SectionHeading
            label="Performance"
            title="Built to Break the Ordinary"
            sub="Performance that feels alive. A 155cc VVA heart tuned for the street — tractable downtown, ferocious at the top end."
          />
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3">
            {STATS.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.08}>
                <div className="bg-surface border-theme h-full border-l-2 border-[var(--c-accent)] p-5">
                  <div className="font-display text-3xl font-bold leading-none md:text-4xl">
                    {s.value}
                    {s.unit && <span className="text-accent ml-1 text-xl md:text-2xl">{s.unit}</span>}
                  </div>
                  <div className="mt-2 text-[10px] uppercase tracking-[0.2em] text-muted-theme">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import SlipperClutch from './SlipperClutch';

const HIGHLIGHTS = [
  { label: 'LIQUID COOLING', text: 'Stable temperatures under sustained load — full power, for longer.' },
  { label: 'FUEL INJECTION', text: 'Precise metering for crisp, immediate throttle response.' },
  { label: 'VVA', text: 'Two intake cam profiles — torque down low, power up top.' },
  { label: 'SOHC 4-VALVE', text: 'Compact head with serious breathing for its displacement.' },
  { label: '6-SPEED BOX', text: 'Tight ratios keep the 155cc on the boil at any speed.' },
  {
    label: 'ASSIST & SLIPPER CLUTCH',
    text: 'Reduces rear-wheel hop during aggressive downshifts while keeping clutch operation light.',
  },
];

export default function EngineSection() {
  return (
    <section id="features" className="bg-surface relative border-y border-theme py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <SectionHeading
              label="Engine"
              title="155cc Pure Engineering"
              sub="A race-derived single with variable valve timing — technology from the R-series, detonated onto the street."
            />
            <div className="mt-10 grid gap-x-8 gap-y-7 sm:grid-cols-2">
              {HIGHLIGHTS.map((h, i) => (
                <Reveal key={h.label} delay={i * 0.06}>
                  <div className="border-theme border-t pt-4">
                    <h4 className="text-accent text-[11px] font-semibold uppercase tracking-[0.25em]">{h.label}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-theme">{h.text}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.1}>
            <div className="border-theme overflow-hidden border">
              <img
                src="/assets/engine/engine.svg"
                alt="MT-15 V2 155cc engine concept illustration"
                loading="lazy"
                className="w-full"
              />
            </div>
          </Reveal>
        </div>

        <SlipperClutch />
      </div>
    </section>
  );
}

import Reveal from './Reveal';
import { specGroups } from '../data/specs';

export default function SpecificationSection() {
  return (
    <section id="specifications" className="relative py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 md:px-8 lg:grid-cols-[1fr_1.6fr]">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <p className="section-label">Specifications</p>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight md:text-6xl">
              Technical <span className="text-accent">DNA</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-theme">
              No decoration. Just the numbers that make the MT-15 V2 what it is.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="mt-6 max-w-sm text-[11px] leading-relaxed text-muted-theme">
              Figures as published by Yamaha Motor India for the MT-15 V2 (BS6). Verify against
              official documentation before relying on them.
            </p>
          </Reveal>
        </div>

        <div>
          {specGroups.map((group, gi) => (
            <Reveal key={group.title} delay={gi * 0.05}>
              <div className="mb-10">
                <h3 className="border-theme flex items-center gap-3 border-b pb-3 font-display text-xl font-bold uppercase tracking-[0.15em]">
                  <span className="text-accent inline-block h-3 w-3 bg-[var(--c-accent)]" aria-hidden="true" />
                  {group.title}
                </h3>
                <dl>
                  {group.rows.map((row) => (
                    <div
                      key={row.label}
                      className="border-theme flex flex-col justify-between gap-1 border-b py-3 sm:flex-row sm:items-baseline"
                    >
                      <dt className="text-[11px] uppercase tracking-[0.2em] text-muted-theme">{row.label}</dt>
                      <dd className="text-sm font-medium sm:text-right">{row.value}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

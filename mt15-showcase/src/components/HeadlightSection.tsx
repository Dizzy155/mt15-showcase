import { useState } from 'react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

export default function HeadlightSection() {
  const [on, setOn] = useState(false);

  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-5 md:px-8 lg:grid-cols-2">
        <Reveal>
          <div className={`border-theme relative overflow-hidden border transition-opacity duration-700 ${on ? '' : 'opacity-90'}`}>
            <img
              src="/assets/gallery/headlight.webp"
              alt="MT-15 V2 bi-functional LED projector headlight"
              loading="lazy"
              className={`w-full transition-all duration-700 ${on ? 'opacity-100' : 'opacity-40 grayscale'}`}
            />
            {/* Light bloom */}
            <div
              aria-hidden="true"
              className={`pointer-events-none absolute inset-0 transition-opacity duration-700 ${on ? 'opacity-100' : 'opacity-0'}`}
              style={{ background: 'radial-gradient(ellipse at center, var(--c-glow), transparent 62%)' }}
            />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
              <span className={`text-[10px] uppercase tracking-[0.3em] transition-colors duration-700 ${on ? 'text-accent' : 'text-muted-theme'}`}>
                Bi-functional LED projector
              </span>
            </div>
          </div>
        </Reveal>

        <div>
          <SectionHeading
            label="Night Shift"
            title="Own the Dark"
            sub="One lens, two functions. A projector beam that carves the night with a single, ruthless signature."
          />
          <Reveal delay={0.15}>
            <div className="mt-8">
              <button type="button" className={on ? 'btn btn-ghost' : 'btn btn-primary'} onClick={() => setOn((v) => !v)} aria-pressed={on}>
                {on ? 'Turn Lights Off' : 'Turn Lights On'}
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

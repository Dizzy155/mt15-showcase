import Reveal from './Reveal';

interface Props {
  label: string;
  title: string;
  sub?: string;
  align?: 'left' | 'center';
}

export default function SectionHeading({ label, title, sub, align = 'left' }: Props) {
  const centered = align === 'center';
  return (
    <div className={centered ? 'text-center' : ''}>
      <Reveal>
        <p className="section-label">{label}</p>
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-3 font-display text-4xl font-bold uppercase leading-[0.95] tracking-tight md:text-6xl">
          {title}
        </h2>
      </Reveal>
      {sub && (
        <Reveal delay={0.16}>
          <p className={`mt-4 max-w-xl text-sm leading-relaxed text-muted-theme md:text-base ${centered ? 'mx-auto' : ''}`}>
            {sub}
          </p>
        </Reveal>
      )}
    </div>
  );
}

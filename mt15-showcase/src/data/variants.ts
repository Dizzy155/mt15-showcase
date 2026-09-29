export type VariantId = 'black' | 'ice-storm' | 'cyan-storm' | 'racing-blue' | 'monster';

export interface VariantColors {
  /** Body panel colour (used for swatches / renders) */
  primary: string;
  /** Secondary body / metallic colour */
  secondary: string;
  /** UI accent — glows, highlights, active states */
  accent: string;
  background: string;
  surface: string;
  text: string;
  muted: string;
  /** rgba() glow used for radial lighting */
  glow: string;
  button: string;
  buttonText: string;
  border: string;
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface BikeVariant {
  id: VariantId;
  name: string;
  short: string;
  /** two gradient stops used to paint the circular swatch */
  swatch: [string, string];
  colors: VariantColors;
  images: {
    hero: string;
    side: string;
    front: string;
    rear: string;
  };
  heroStats: HeroStat[];
}

const baseStats: HeroStat[] = [
  { value: '155', label: 'CC' },
  { value: '18.4', label: 'PS' },
  { value: '6', label: 'SPEED' },
];

const img = (id: string) => ({
  hero: `/assets/bikes/${id}/hero.svg`,
  side: `/assets/bikes/${id}/side.svg`,
  front: `/assets/bikes/${id}/front.svg`,
  rear: `/assets/bikes/${id}/rear.svg`,
});

/**
 * Centralized variant registry.
 * Add a new entry here (plus its assets under /public/assets/bikes/<id>/)
 * and every selector, theme and section picks it up automatically.
 */
export const bikeVariants: BikeVariant[] = [
  {
    id: 'black',
    name: 'Metallic Black',
    short: 'Stealth bodywork under cold silver light. The original dark side.',
    swatch: ['#3a3d44', '#0e0f12'],
    colors: {
      primary: '#2b2e34',
      secondary: '#585d66',
      accent: '#e8eaee',
      background: '#0b0c0e',
      surface: '#131418',
      text: '#eceef1',
      muted: '#8b9098',
      glow: 'rgba(232, 234, 238, 0.30)',
      button: '#e8eaee',
      buttonText: '#0b0c0e',
      border: 'rgba(255, 255, 255, 0.12)',
    },
    images: img('black'),
    heroStats: baseStats,
  },
  {
    id: 'ice-storm',
    name: 'Ice Storm',
    short: 'Frozen silver over deep arctic shadow. Cold, clean, clinical.',
    swatch: ['#e2e9f1', '#7e93a8'],
    colors: {
      primary: '#b7c1cc',
      secondary: '#e2e9f1',
      accent: '#a9d6ff',
      background: '#0c1015',
      surface: '#141a21',
      text: '#edf3f9',
      muted: '#8a97a6',
      glow: 'rgba(169, 214, 255, 0.32)',
      button: '#a9d6ff',
      buttonText: '#08131f',
      border: 'rgba(180, 210, 240, 0.14)',
    },
    images: img('ice-storm'),
    heroStats: baseStats,
  },
  {
    id: 'cyan-storm',
    name: 'Cyan Storm',
    short: 'Electric cyan ripping across storm-dark bodywork.',
    swatch: ['#22d3ee', '#0e3a44'],
    colors: {
      primary: '#1b4a56',
      secondary: '#2e7280',
      accent: '#22d3ee',
      background: '#050c0f',
      surface: '#0b161b',
      text: '#e4f7fb',
      muted: '#6f96a0',
      glow: 'rgba(34, 211, 238, 0.35)',
      button: '#22d3ee',
      buttonText: '#04222a',
      border: 'rgba(34, 211, 238, 0.18)',
    },
    images: img('cyan-storm'),
    heroStats: baseStats,
  },
  {
    id: 'racing-blue',
    name: 'Racing Blue',
    short: "Yamaha's factory racing DNA, straight off the paddock.",
    swatch: ['#2a5fd0', '#0a1e4d'],
    colors: {
      primary: '#123d9e',
      secondary: '#2a5fd0',
      accent: '#4d8dff',
      background: '#060a14',
      surface: '#0d1424',
      text: '#e9f0ff',
      muted: '#7286ad',
      glow: 'rgba(77, 141, 255, 0.35)',
      button: '#4d8dff',
      buttonText: '#06122e',
      border: 'rgba(90, 140, 255, 0.18)',
    },
    images: img('racing-blue'),
    heroStats: baseStats,
  },
  {
    id: 'monster',
    name: 'Monster Energy Yamaha MotoGP Edition',
    short: 'Race-bred black with electric Monster green — straight off the GP grid.',
    swatch: ['#9eee00', '#10131a'],
    colors: {
      primary: '#12161b',
      secondary: '#22344d',
      accent: '#9eee00',
      background: '#060806',
      surface: '#0d110c',
      text: '#edf5e4',
      muted: '#7d8a72',
      glow: 'rgba(158, 238, 0, 0.32)',
      button: '#9eee00',
      buttonText: '#101a02',
      border: 'rgba(158, 238, 0, 0.16)',
    },
    images: img('monster'),
    heroStats: baseStats,
  },
];

export const DEFAULT_VARIANT_ID: VariantId = 'black';

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
  };
  heroStats: HeroStat[];
}

const baseStats: HeroStat[] = [
  { value: '155', label: 'CC' },
  { value: '18.4', label: 'PS' },
  { value: '6', label: 'SPEED' },
];

// One transparent side-view render per colour, used for hero, chassis and performance panels.
const img = (id: string) => ({
  hero: `/assets/bikes/${id}/hero.webp`,
  side: `/assets/bikes/${id}/hero.webp`,
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
    short: 'Matte gunmetal bodywork with gold forks. The original dark side.',
    swatch: ['#4a4d53', '#101114'],
    colors: {
      primary: '#3a3d42',
      secondary: '#6a6e75',
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
    short: 'Frozen white-silver bodywork with electric-blue wheels and graphics.',
    swatch: ['#eef2f6', '#3b9cf0'],
    colors: {
      primary: '#dfe5ec',
      secondary: '#f4f7fa',
      accent: '#3b9cf0',
      background: '#0c1015',
      surface: '#141a21',
      text: '#edf3f9',
      muted: '#8a97a6',
      glow: 'rgba(59, 156, 240, 0.35)',
      button: '#3b9cf0',
      buttonText: '#04121f',
      border: 'rgba(90, 170, 240, 0.18)',
    },
    images: img('ice-storm'),
    heroStats: baseStats,
  },
  {
    id: 'cyan-storm',
    name: 'Cyan Storm',
    short: 'Slate-grey bodywork with icy cyan wheels and graphics.',
    swatch: ['#3fc2cc', '#3b4a55'],
    colors: {
      primary: '#3b4a55',
      secondary: '#5f9aa8',
      accent: '#2ccbd3',
      background: '#050c0f',
      surface: '#0b161b',
      text: '#e4f7fb',
      muted: '#6f96a0',
      glow: 'rgba(44, 203, 211, 0.35)',
      button: '#2ccbd3',
      buttonText: '#04222a',
      border: 'rgba(44, 203, 211, 0.18)',
    },
    images: img('cyan-storm'),
    heroStats: baseStats,
  },
  {
    id: 'racing-blue',
    name: 'Racing Blue',
    short: "Yamaha's factory racing DNA, straight off the paddock.",
    swatch: ['#3b4fb3', '#141c4d'],
    colors: {
      primary: '#1f2f80',
      secondary: '#3b4fb3',
      accent: '#5b86ff',
      background: '#060a14',
      surface: '#0d1424',
      text: '#e9f0ff',
      muted: '#7286ad',
      glow: 'rgba(91, 134, 255, 0.35)',
      button: '#5b86ff',
      buttonText: '#06122e',
      border: 'rgba(100, 140, 255, 0.18)',
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
      secondary: '#2b3a80',
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

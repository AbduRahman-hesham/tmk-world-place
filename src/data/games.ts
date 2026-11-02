export type GameArtKey =
  | 'catch-money'
  | 'happy-city'
  | 'currency-challenge'
  | 'bond-master'
  | 'business-deal'
  | 'chase-dream'
  | 'icy-tower'
  | 'doughnut-connect'
  | 'doughnut-box-sling'
  | 'coming-soon';

export interface Game {
  id: number;
  title: string;
  url: string | null;
  art: GameArtKey;
  accent: string;
  status: 'available' | 'coming-soon';
}

export const GAMES: Game[] = [
  {
    id: 1,
    title: 'Catch the Money',
    url: 'https://module-1-tmk.ai.studio',
    art: 'catch-money',
    accent: '#0D9488',
    status: 'available',
  },
  {
    id: 2,
    title: 'Happy City',
    url: 'https://module-2-tmk.vercel.app/',
    art: 'happy-city',
    accent: '#2563EB',
    status: 'available',
  },
  {
    id: 3,
    title: 'Currency Challenge',
    url: 'https://module-3.ai.studio',
    art: 'currency-challenge',
    accent: '#15803D',
    status: 'available',
  },
  {
    id: 4,
    title: 'Bond Master',
    url: 'https://module-4-tmk-qqqm.vercel.app/',
    art: 'bond-master',
    accent: '#C2410C',
    status: 'available',
  },
  {
    id: 5,
    title: 'The Best Business Deal',
    url: 'https://module-5-tmk.vercel.app/',
    art: 'business-deal',
    accent: '#B45309',
    status: 'available',
  },
  {
    id: 6,
    title: 'Chase Your Dream',
    url: 'https://osamaradwann22.github.io/zane-goldie/',
    art: 'chase-dream',
    accent: '#DB2777',
    status: 'available',
  },
  {
    id: 7,
    title: 'Icy Tower',
    url: 'https://osamaradwann22.github.io/Icy_Tower_Prototype/',
    art: 'icy-tower',
    accent: '#0284C7',
    status: 'available',
  },
  {
    id: 8,
    title: 'Doughnut Connect',
    url: 'https://osamaradwann22.github.io/doughnut-connect/',
    art: 'doughnut-connect',
    accent: '#7C3AED',
    status: 'available',
  },
  {
    id: 9,
    title: 'Doughnut Box Sling',
    url: 'https://osamaradwann22.github.io/Doughnut_box_sling/',
    art: 'doughnut-box-sling',
    accent: '#E11D48',
    status: 'available',
  },
  {
    id: 10,
    title: 'Coming Soon',
    url: null,
    art: 'coming-soon',
    accent: '#D97706',
    status: 'coming-soon',
  },
];

import type { ContentCategory } from '@/content';

/** Paleta e ícones das capas de notícia, compartilhados entre a página e a imagem de compartilhamento. */
export type CoverTheme = Readonly<{
  accent: string;
  from: string;
  icon: readonly string[];
  to: string;
}>;

export const coverThemes: Readonly<Record<ContentCategory, CoverTheme>> = {
  beneficios: {
    accent: '#8be0bf',
    from: '#0d3b3a',
    icon: [
      'M12 20.5s-7.5-4.6-9.3-9.4A5.2 5.2 0 0 1 12 7.6a5.2 5.2 0 0 1 9.3 3.5c-1.8 4.8-9.3 9.4-9.3 9.4Z',
    ],
    to: '#0a7a5c',
  },
  brasil: {
    accent: '#a8e3d0',
    from: '#14343a',
    icon: [
      'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z',
      'M3.6 9h16.8M3.6 15h16.8',
      'M12 3c2.5 2.6 3.7 5.6 3.7 9s-1.2 6.4-3.7 9c-2.5-2.6-3.7-5.6-3.7-9S9.5 5.6 12 3Z',
    ],
    to: '#2a6b62',
  },
  economia: {
    accent: '#9ee0f0',
    from: '#12303f',
    icon: ['M3 17l6-6 4 4 8-8', 'M15 7h6v6'],
    to: '#1f6a80',
  },
  financas: {
    accent: '#72d4b2',
    from: '#163c3f',
    icon: [
      'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z',
      'M12 7v10',
      'M9.6 9.7c0-1 1-1.6 2.4-1.6s2.4.7 2.4 1.8-1 1.5-2.4 1.7-2.4.7-2.4 1.8 1 1.7 2.4 1.7 2.4-.6 2.4-1.6',
    ],
    to: '#08785a',
  },
  mercado: {
    accent: '#9fdcc8',
    from: '#102b30',
    icon: ['M4 20V10', 'M10 20V4', 'M16 20v-7', 'M22 20H2'],
    to: '#155f5b',
  },
  politica: {
    accent: '#c3e8dc',
    from: '#1a3236',
    icon: [
      'M3 21h18',
      'M4 10h16',
      'M12 3 3 8v2h18V8l-9-5Z',
      'M6 10v8M10 10v8M14 10v8M18 10v8',
    ],
    to: '#3a6560',
  },
  trabalho: {
    accent: '#72d4b2',
    from: '#0f2f32',
    icon: [
      'M4 7h16a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z',
      'M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7',
      'M3 13h18',
    ],
    to: '#1b5b55',
  },
  utilidades: {
    accent: '#b6e6d6',
    from: '#243a3c',
    icon: [
      'M7 3h10a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z',
      'M8.5 7.5h7',
      'M9 12h.01M12 12h.01M15 12h.01M9 16h.01M12 16h.01M15 16h.01',
    ],
    to: '#46706a',
  },
};

import type { Author } from './types';

export const authors = [
  {
    id: 'equipe-editorial',
    name: 'Redação PortalFina',
    role: 'Conteúdo financeiro com apoio de IA e revisão de fontes oficiais',
    bio: 'A Redação PortalFina produz notícias, guias e calculadoras com apoio de inteligência artificial. Cada conteúdo é baseado em fontes oficiais, como Receita Federal, INSS, Banco Central, ministérios e o Diário Oficial, identificadas ao final da página.',
  },
] as const satisfies readonly Author[];

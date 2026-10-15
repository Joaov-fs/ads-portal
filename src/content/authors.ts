import type { Author } from './types';

export const authors = [
  {
    id: 'equipe-editorial',
    name: 'Redação PortalFina',
    role: 'Conteúdo financeiro com apoio de IA e revisão de fontes oficiais',
    bio: 'A Redação PortalFina produz notícias, guias e calculadoras com apoio de inteligência artificial. Cada conteúdo é baseado em fontes oficiais, como Receita Federal, INSS, Banco Central, ministérios e o Diário Oficial, identificadas ao final da página.',
  },
  {
    id: 'joao-vitor-ferreira',
    name: 'João Vitor Ferreira',
    role: 'Editor responsável pelo PortalFina',
    bio: 'João Vitor Ferreira é editor responsável pelo PortalFina e assina as notícias que publica. Os textos são produzidos com apoio de inteligência artificial, a partir de fontes oficiais e de veículos de referência, que aparecem com link ao final de cada página.',
  },
  {
    id: 'gustavo-xavier',
    name: 'Gustavo Xavier',
    role: 'Editor do PortalFina',
    bio: 'Gustavo Xavier é editor do PortalFina e assina as notícias que publica. Os textos são produzidos com apoio de inteligência artificial, a partir de fontes oficiais e de veículos de referência, que aparecem com link ao final de cada página.',
  },
] as const satisfies readonly Author[];

import type { Author } from './types';

export const authors = [
  {
    id: 'equipe-editorial',
    name: 'Redação PortalFina',
    role: 'Conteúdo financeiro com apoio de IA e revisão de fontes oficiais',
    bio: 'A Redação PortalFina produz notícias, guias e calculadoras com apoio de inteligência artificial. Cada conteúdo é baseado em fontes oficiais, como Receita Federal, INSS, Banco Central, ministérios e o Diário Oficial, identificadas ao final da página.',
  },
  {
    id: 'pedro-bueno-salvador',
    name: 'Pedro Bueno Salvador',
    role: 'Redator do PortalFina',
    bio: 'Pedro Bueno Salvador é redator do PortalFina e assina as notícias que publica. Os textos são produzidos com apoio de inteligência artificial, a partir de fontes oficiais e de veículos de referência, que aparecem com link ao final de cada página.',
  },
  {
    id: 'sara-souza',
    name: 'Sara Souza',
    role: 'Redatora do PortalFina',
    bio: 'Sara Souza é redatora do PortalFina e assina as notícias que publica. Os textos são produzidos com apoio de inteligência artificial, a partir de fontes oficiais e de veículos de referência, que aparecem com link ao final de cada página.',
  },
  {
    id: 'thales-xavier',
    name: 'Thales Xavier',
    role: 'Redator do PortalFina',
    bio: 'Thales Xavier é redator do PortalFina e assina as notícias que publica. Os textos são produzidos com apoio de inteligência artificial, a partir de fontes oficiais e de veículos de referência, que aparecem com link ao final de cada página.',
  },
] as const satisfies readonly Author[];

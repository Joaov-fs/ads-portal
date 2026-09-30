import type { Author } from './types';

export const authors = [
  {
    id: 'equipe-editorial',
    name: 'Equipe Editorial PortalFina',
    role: 'Curadoria de conteúdo educativo',
    bio: 'Equipe responsável pela pesquisa, organização das fontes e manutenção das páginas da plataforma.',
  },
] as const satisfies readonly Author[];

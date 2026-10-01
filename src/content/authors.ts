import type { Author } from './types';

export const authors = [
  {
    id: 'equipe-editorial',
    name: 'Equipe Editorial PortalFina',
    role: 'Curadoria de conteúdo educativo',
    bio: 'Equipe responsável pela pesquisa, organização das fontes e manutenção das páginas da plataforma.',
  },
  {
    id: 'rafael-oliveira',
    name: 'Rafael Oliveira',
    role: 'Especialista em Tributação, MEI, Empresas e Contabilidade',
    bio: 'Produz conteúdo sobre tributação, regularização e organização financeira para pequenos negócios.',
  },
  {
    id: 'mariana-costa',
    name: 'Mariana Costa',
    role: 'Especialista em Benefícios Sociais, Previdência e Programas Governamentais',
    bio: 'Produz conteúdo sobre benefícios sociais, previdência e programas governamentais.',
  },
] as const satisfies readonly Author[];

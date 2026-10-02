import type { NavigationItem } from '@/components/navigation/navigation';

export const primaryNavigationItems = [
  { href: '/calculadoras', label: 'Calculadoras' },
  { href: '/guias', label: 'Guias' },
  { href: '/categorias/financas', label: 'Finanças' },
  { href: '/categorias/trabalho', label: 'Trabalho' },
  { href: '/categorias/beneficios', label: 'Benefícios' },
  { href: '/noticias', label: 'Notícias' },
] as const satisfies readonly NavigationItem[];

export const footerNavigationGroups = [
  {
    label: 'Conteúdo',
    items: [
      { href: '/noticias', label: 'Notícias' },
      { href: '/guias', label: 'Guias' },
      { href: '/categorias/economia', label: 'Economia' },
    ],
  },
  {
    label: 'Ferramentas',
    items: [
      { href: '/calculadoras', label: 'Calculadoras' },
      { href: '/impostometro', label: 'Impostômetro' },
      { href: '/categorias/trabalho', label: 'Trabalho' },
      { href: '/categorias/financas', label: 'Finanças' },
    ],
  },
  {
    label: 'Institucional',
    items: [
      { href: '/sobre', label: 'Sobre' },
      { href: '/contato', label: 'Contato' },
      { href: '/autor', label: 'Autor' },
      { href: '/politica-de-privacidade', label: 'Privacidade' },
      { href: '/politica-de-cookies', label: 'Cookies' },
      { href: '/termos-de-uso', label: 'Termos de uso' },
    ],
  },
] as const;

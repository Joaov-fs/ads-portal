import type { NavigationItem } from '@/components/navigation/navigation';

export const primaryNavigationItems = [
  { editoria: 'financas', href: '/categorias/financas', label: 'Finanças' },
  { editoria: 'politica', href: '/categorias/politica', label: 'Política' },
  { editoria: 'economia', href: '/categorias/economia', label: 'Economia' },
  { editoria: 'mercado', href: '/categorias/mercado', label: 'Mercado' },
  { editoria: 'brasil', href: '/categorias/brasil', label: 'Brasil' },
  {
    editoria: 'beneficios',
    href: '/categorias/beneficios',
    label: 'Benefícios',
  },
] as const satisfies readonly NavigationItem[];

export const footerNavigationGroups = [
  {
    label: 'Conteúdo',
    items: [
      { href: '/noticias', label: 'Notícias' },
      { href: '/guias', label: 'Guias' },
      { href: '/categorias/politica', label: 'Política' },
      { href: '/categorias/economia', label: 'Economia' },
      { href: '/categorias/mercado', label: 'Mercado' },
      { href: '/categorias/brasil', label: 'Brasil' },
      { href: '/categorias/beneficios', label: 'Benefícios' },
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

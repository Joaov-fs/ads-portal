export type CategorySlug =
  | 'financas'
  | 'trabalho'
  | 'beneficios'
  | 'economia'
  | 'politica'
  | 'guias'
  | 'utilidades';

export type Category = Readonly<{
  description: string;
  icon: string;
  label: string;
  slug: CategorySlug;
}>;

export type Tool = Readonly<{
  category: CategorySlug;
  description: string;
  href: string;
  title: string;
}>;

export type NewsItem = Readonly<{
  category: CategorySlug;
  date: string;
  description: string;
  href: string;
  readingTime: string;
  title: string;
}>;

export type Guide = Readonly<{
  category: CategorySlug;
  description: string;
  href: string;
  readingTime: string;
  title: string;
}>;

export type Indicator = Readonly<{
  change: string;
  label: string;
  note: string;
  trend: 'up' | 'down' | 'neutral';
  value: string;
}>;

export type SearchResult = Readonly<{
  category: string;
  description: string;
  href: string;
  title: string;
  type: 'categoria' | 'ferramenta' | 'guia' | 'indicador' | 'noticia';
}>;

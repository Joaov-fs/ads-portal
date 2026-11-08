import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { Container } from '@/components/layout/container';
import { Breadcrumb } from '@/components/navigation/breadcrumb';
import { Card } from '@/components/ui/card';
import { Search } from '@/components/ui/search';
import { categories, searchPublicContent } from '@/features/public-content';
import type { SearchResult } from '@/features/public-content';

export const metadata: Metadata = {
  title: 'Resultados da busca',
  description: 'Encontre calculadoras, notícias, guias e categorias.',
  alternates: { canonical: '/pesquisa' },
  robots: { index: false, follow: true },
  openGraph: {
    title: 'Resultados da busca | PortalFina',
    description: 'Encontre ferramentas e informação clara em poucos segundos.',
    url: '/pesquisa',
  },
};

type SearchPageProps = Readonly<{
  searchParams: Promise<{ q?: string | string[]; tipo?: string | string[] }>;
}>;

/** Abas da busca, na ordem em que aparecem. A primeira reúne tudo. */
const tabs = [
  { slug: 'tudo', label: 'Tudo', types: null },
  { slug: 'noticias', label: 'Notícias', types: ['noticia'] },
  { slug: 'calculadoras', label: 'Calculadoras', types: ['ferramenta'] },
  { slug: 'guias', label: 'Guias', types: ['guia'] },
] as const;

type TabSlug = (typeof tabs)[number]['slug'];

/** Quantos itens de cada grupo aparecem na aba "Tudo". */
const previewSize = { noticia: 5, ferramenta: 4, guia: 4 } as const;

const popularSearches = [
  'Selic',
  'Bolsa Família',
  '13º salário',
  'INSS',
  'dólar',
  'férias',
  'FGTS',
  'Imposto de Renda',
];

const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'short',
  year: 'numeric',
  timeZone: 'UTC',
});

function formatDate(value: string) {
  return dateFormatter.format(new Date(`${value}T00:00:00Z`));
}

function firstValue(value: string | string[] | undefined) {
  return (Array.isArray(value) ? value[0] : value)?.trim() ?? '';
}

function searchHref(query: string, tab: TabSlug = 'tudo') {
  const params = new URLSearchParams({ q: query });
  if (tab !== 'tudo') params.set('tipo', tab);
  return `/pesquisa?${params.toString()}`;
}

/** Notícia: miniatura, editoria na cor dela, título e data. */
function NewsResult({ result }: Readonly<{ result: SearchResult }>) {
  return (
    <Link
      className={`editoria-${result.editoria} group flex items-start gap-4 py-4 sm:gap-5`}
      href={result.href}
    >
      {result.image ? (
        <span className="relative size-20 shrink-0 overflow-hidden rounded-ads-medium bg-ads-secondary sm:h-24 sm:w-40">
          <Image
            alt=""
            className="object-cover transition duration-500 group-hover:scale-[1.04]"
            fill
            sizes="(min-width: 640px) 160px, 80px"
            src={result.image}
          />
        </span>
      ) : null}
      <span className="grid min-w-0 gap-1">
        <span className="flex items-center gap-1.5 text-[0.7rem] font-bold uppercase tracking-[0.1em] text-ads-primary-strong">
          <span
            aria-hidden="true"
            className="size-2 rounded-full bg-ads-primary"
          />
          {result.category}
          {result.date ? (
            <span className="font-semibold normal-case tracking-normal text-ads-subtle">
              · {formatDate(result.date)}
            </span>
          ) : null}
        </span>
        <strong className="font-semibold leading-snug text-ads-secondary group-hover:text-ads-primary-strong sm:text-lg">
          {result.title}
        </strong>
        <span className="hidden text-sm leading-6 text-ads-muted sm:line-clamp-2">
          {result.description}
        </span>
      </span>
    </Link>
  );
}

/** Calculadora: card curto, com a editoria e a chamada para calcular. */
function ToolResult({ result }: Readonly<{ result: SearchResult }>) {
  return (
    <Link
      className={`editoria-${result.editoria} group grid h-full content-start gap-1.5 rounded-ads-large border border-ads-border bg-white p-4 transition hover:border-ads-primary hover:bg-ads-primary-soft sm:p-5`}
      href={result.href}
    >
      <span className="text-[0.7rem] font-bold uppercase tracking-[0.1em] text-ads-primary-strong">
        Calculadora · {result.category}
      </span>
      <strong className="leading-snug text-ads-secondary">
        {result.title}
      </strong>
      <span className="line-clamp-2 text-sm leading-6 text-ads-muted">
        {result.description}
      </span>
      <span className="mt-1 text-sm font-bold text-ads-primary-strong">
        Calcular →
      </span>
    </Link>
  );
}

/** Guia: linha de texto, como num índice. */
function GuideResult({ result }: Readonly<{ result: SearchResult }>) {
  return (
    <Link className="group grid gap-1 py-4" href={result.href}>
      <span className="text-[0.7rem] font-bold uppercase tracking-[0.1em] text-ads-primary-strong">
        Guia
      </span>
      <strong className="font-semibold leading-snug text-ads-secondary group-hover:text-ads-primary-strong">
        {result.title}
      </strong>
      <span className="line-clamp-2 text-sm leading-6 text-ads-muted">
        {result.description}
      </span>
    </Link>
  );
}

function ResultGroup({
  items,
  moreHref,
  moreLabel,
  title,
  type,
}: Readonly<{
  items: readonly SearchResult[];
  moreHref?: string;
  moreLabel?: string;
  title?: string;
  type: SearchResult['type'];
}>) {
  if (items.length === 0) return null;

  return (
    <section className="grid gap-3">
      {title ? (
        <h3 className="font-ads-display text-xl font-extrabold tracking-tight text-ads-secondary">
          {title}
        </h3>
      ) : null}
      {type === 'ferramenta' ? (
        <ul className="grid gap-3 sm:grid-cols-2">
          {items.map((result) => (
            <li key={result.href}>
              <ToolResult result={result} />
            </li>
          ))}
        </ul>
      ) : (
        <ul className="divide-y divide-ads-border rounded-ads-xlarge border border-ads-border bg-white px-4 sm:px-6">
          {items.map((result) => (
            <li key={result.href}>
              {type === 'noticia' ? (
                <NewsResult result={result} />
              ) : (
                <GuideResult result={result} />
              )}
            </li>
          ))}
        </ul>
      )}
      {moreHref && moreLabel ? (
        <Link
          className="text-sm font-bold text-ads-primary-strong hover:underline"
          href={moreHref}
        >
          {moreLabel} →
        </Link>
      ) : null}
    </section>
  );
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const params = await searchParams;
  const query = firstValue(params.q);
  const requestedTab = firstValue(params.tipo);
  const activeTab: TabSlug =
    tabs.find((tab) => tab.slug === requestedTab)?.slug ?? 'tudo';
  const results = searchPublicContent(query);
  const byType = (type: SearchResult['type']) =>
    results.filter((result) => result.type === type);
  const news = byType('noticia');
  const tools = byType('ferramenta');
  const guides = byType('guia');
  const matchedEditorias = byType('categoria');
  const counts: Record<TabSlug, number> = {
    tudo: news.length + tools.length + guides.length,
    noticias: news.length,
    calculadoras: tools.length,
    guias: guides.length,
  };
  const total = counts.tudo + matchedEditorias.length;

  return (
    <main>
      <section className="border-b border-ads-border bg-ads-surface py-8 sm:py-12">
        <Container>
          <Breadcrumb
            items={[{ href: '/', label: 'Início' }, { label: 'Pesquisa' }]}
          />
          <div className="mt-6 grid max-w-3xl grid-cols-[minmax(0,1fr)] gap-4">
            <h1 className="font-ads-display text-3xl font-extrabold tracking-tight text-ads-secondary sm:text-ads-title">
              Buscar no PortalFina
            </h1>
            <Search className="shadow-ads-soft" inputValue={query} />
            {!query ? (
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-xs font-semibold text-ads-subtle">
                  Mais buscados:
                </span>
                {popularSearches.map((term) => (
                  <Link
                    className="rounded-ads-full border border-ads-border bg-ads-background px-3 py-1 text-sm font-semibold text-ads-secondary transition hover:border-ads-primary hover:text-ads-primary-strong"
                    href={searchHref(term)}
                    key={term}
                  >
                    {term}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        </Container>
      </section>

      <section aria-labelledby="resultados-title" className="py-8 sm:py-12">
        <Container>
          <div className="grid max-w-4xl grid-cols-[minmax(0,1fr)] gap-6">
            <h2
              className="text-lg font-bold text-ads-secondary sm:text-xl"
              id="resultados-title"
            >
              {query
                ? `${total} resultado${total === 1 ? '' : 's'} para “${query}”`
                : 'Digite um termo para começar'}
            </h2>

            {query && total > 0 ? (
              <>
                <nav
                  aria-label="Filtrar resultados"
                  className="-mx-4 flex gap-2 overflow-x-auto border-b border-ads-border px-4 [scrollbar-width:none] sm:mx-0 sm:px-0"
                >
                  {tabs.map((tab) => {
                    const active = tab.slug === activeTab;

                    return (
                      <Link
                        aria-current={active ? 'page' : undefined}
                        className={`-mb-px flex shrink-0 items-center gap-1.5 border-b-2 px-3 pb-3 pt-1 text-sm font-semibold transition ${
                          active
                            ? 'border-ads-primary text-ads-primary-strong'
                            : 'border-transparent text-ads-muted hover:text-ads-secondary'
                        }`}
                        href={searchHref(query, tab.slug)}
                        key={tab.slug}
                      >
                        {tab.label}
                        <span className="rounded-ads-full bg-ads-background px-1.5 text-xs tabular-nums">
                          {counts[tab.slug]}
                        </span>
                      </Link>
                    );
                  })}
                </nav>

                {activeTab === 'tudo' && matchedEditorias.length > 0 ? (
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-xs font-semibold text-ads-subtle">
                      Editorias:
                    </span>
                    {matchedEditorias.map((result) => (
                      <Link
                        className={`editoria-${result.editoria} flex items-center gap-2 rounded-ads-full border border-ads-border bg-white px-3 py-1 text-sm font-semibold text-ads-secondary transition hover:border-ads-primary hover:text-ads-primary-strong`}
                        href={result.href}
                        key={result.href}
                      >
                        <span
                          aria-hidden="true"
                          className="size-2 rounded-full bg-ads-primary"
                        />
                        {result.title}
                      </Link>
                    ))}
                  </div>
                ) : null}

                {activeTab === 'tudo' ? (
                  <div className="grid gap-10">
                    <ResultGroup
                      items={news.slice(0, previewSize.noticia)}
                      moreHref={
                        news.length > previewSize.noticia
                          ? searchHref(query, 'noticias')
                          : undefined
                      }
                      moreLabel={`Ver as ${news.length} notícias`}
                      title="Notícias"
                      type="noticia"
                    />
                    <ResultGroup
                      items={tools.slice(0, previewSize.ferramenta)}
                      moreHref={
                        tools.length > previewSize.ferramenta
                          ? searchHref(query, 'calculadoras')
                          : undefined
                      }
                      moreLabel={`Ver as ${tools.length} calculadoras`}
                      title="Calculadoras"
                      type="ferramenta"
                    />
                    <ResultGroup
                      items={guides.slice(0, previewSize.guia)}
                      moreHref={
                        guides.length > previewSize.guia
                          ? searchHref(query, 'guias')
                          : undefined
                      }
                      moreLabel={`Ver os ${guides.length} guias`}
                      title="Guias"
                      type="guia"
                    />
                  </div>
                ) : (
                  <ResultGroup
                    items={
                      activeTab === 'noticias'
                        ? news
                        : activeTab === 'calculadoras'
                          ? tools
                          : guides
                    }
                    type={
                      activeTab === 'noticias'
                        ? 'noticia'
                        : activeTab === 'calculadoras'
                          ? 'ferramenta'
                          : 'guia'
                    }
                  />
                )}

                {activeTab !== 'tudo' && counts[activeTab] === 0 ? (
                  <p className="text-ads-muted">
                    Nada nesta aba.{' '}
                    <Link
                      className="font-semibold text-ads-primary-strong underline"
                      href={searchHref(query)}
                    >
                      Ver todos os resultados
                    </Link>
                  </p>
                ) : null}
              </>
            ) : (
              <Card className="grid gap-4 p-6 sm:p-8">
                <h3 className="text-xl font-bold text-ads-secondary">
                  {query
                    ? 'Nenhum resultado encontrado'
                    : 'Uma busca, vários caminhos'}
                </h3>
                <p className="leading-7 text-ads-muted">
                  {query
                    ? 'Tente um termo mais simples, como salário, juros, benefícios ou dólar. Ou navegue pelas editorias:'
                    : 'Busque por uma notícia, uma calculadora ou um guia. Ou comece por uma editoria:'}
                </p>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Link
                      className={`editoria-${category.slug} flex items-center gap-2 rounded-ads-full border border-ads-border bg-white px-3 py-1.5 text-sm font-semibold text-ads-secondary transition hover:border-ads-primary hover:text-ads-primary-strong`}
                      href={`/categorias/${category.slug}`}
                      key={category.slug}
                    >
                      <span
                        aria-hidden="true"
                        className="size-2 rounded-full bg-ads-primary"
                      />
                      {category.label}
                    </Link>
                  ))}
                </div>
              </Card>
            )}
          </div>
        </Container>
      </section>
    </main>
  );
}

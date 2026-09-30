import type { Metadata } from 'next';
import Link from 'next/link';

import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Breadcrumb } from '@/components/navigation/breadcrumb';
import { Card } from '@/components/ui/card';
import { Search } from '@/components/ui/search';
import { searchPublicContent } from '@/features/public-content';

export const metadata: Metadata = {
  title: 'Pesquisa',
  description: 'Encontre calculadoras, notícias, guias e categorias.',
  alternates: { canonical: '/pesquisa' },
  robots: { index: false, follow: true },
  openGraph: {
    title: 'Pesquisa | PortalFina',
    description: 'Encontre ferramentas e informação clara em poucos segundos.',
    url: '/pesquisa',
  },
};

type SearchPageProps = Readonly<{
  searchParams: Promise<{ q?: string | string[] }>;
}>;

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const rawQuery = (await searchParams).q;
  const query =
    (Array.isArray(rawQuery) ? rawQuery[0] : rawQuery)?.trim() ?? '';
  const results = searchPublicContent(query);

  return (
    <main>
      <section className="border-b border-ads-border bg-ads-surface py-12 sm:py-16">
        <Container>
          <Breadcrumb
            items={[{ href: '/', label: 'Início' }, { label: 'Pesquisa' }]}
          />
          <div className="mt-8 grid max-w-3xl gap-5">
            <h1 className="text-ads-title font-bold tracking-tight text-ads-secondary">
              Encontre o que precisa
            </h1>
            <p className="leading-7 text-ads-muted">
              Pesquise entre calculadoras, notícias, guias e categorias.
            </p>
            <Search className="shadow-ads-soft" inputValue={query} />
          </div>
        </Container>
      </section>

      <Section aria-labelledby="resultados-title">
        <Container>
          <div className="mb-8 grid gap-2">
            <span className="text-ads-eyebrow font-bold uppercase tracking-[0.14em] text-ads-primary-strong">
              Resultados
            </span>
            <h2
              className="text-2xl font-bold text-ads-secondary"
              id="resultados-title"
            >
              {query
                ? `${results.length} resultado${results.length === 1 ? '' : 's'} para “${query}”`
                : 'Digite um termo para começar'}
            </h2>
          </div>

          {query && results.length > 0 ? (
            <ul className="grid overflow-hidden rounded-ads-xlarge border border-ads-border bg-ads-surface md:grid-cols-2">
              {results.map((result) => (
                <li
                  className="border-b border-ads-border md:border-r"
                  key={`${result.type}-${result.title}`}
                >
                  <Link
                    className="group grid min-h-36 content-center gap-2 p-5 transition hover:bg-ads-primary-soft sm:p-6"
                    href={result.href}
                  >
                    <span className="text-xs font-bold uppercase tracking-[0.12em] text-ads-primary-strong">
                      {result.type === 'ferramenta'
                        ? `Calculadora · ${result.category}`
                        : result.category}
                    </span>
                    <strong className="text-lg text-ads-secondary group-hover:text-ads-primary-strong">
                      {result.title}
                    </strong>
                    <span className="text-sm leading-6 text-ads-muted">
                      {result.description}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <Card className="grid max-w-2xl gap-3 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-ads-secondary">
                {query
                  ? 'Nenhum resultado encontrado'
                  : 'Uma busca, vários caminhos'}
              </h3>
              <p className="leading-7 text-ads-muted">
                {query
                  ? 'Tente um termo mais simples, como salário, juros, benefícios ou dólar.'
                  : 'Experimente buscar por salário, férias, juros, benefícios ou algum indicador econômico.'}
              </p>
            </Card>
          )}
        </Container>
      </Section>
    </main>
  );
}

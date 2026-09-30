import type { Metadata } from 'next';
import Link from 'next/link';

import { AdSlot } from '@/components/advertising/ad-slot';
import { CalculatorCard, GuideCard, NewsCard } from '@/components/cards';
import { Container } from '@/components/layout/container';
import { Grid } from '@/components/layout/grid';
import { Section } from '@/components/layout/section';
import { Card } from '@/components/ui/card';
import { Search } from '@/components/ui/search';
import { siteConfig } from '@/config/site';
import {
  categories,
  featuredGuides,
  latestNews,
  popularTools,
} from '@/features/public-content';

export const metadata: Metadata = {
  title: 'Calculadoras financeiras e informação para decidir melhor',
  description: siteConfig.description,
  alternates: { canonical: '/' },
  openGraph: {
    title: 'PortalFina — Informação clara para decisões melhores',
    description: siteConfig.description,
    url: '/',
    type: 'website',
  },
};

const highlightedToolPaths = new Set([
  '/calculadoras/salario-liquido',
  '/calculadoras/ferias',
  '/calculadoras/juros-compostos',
  '/calculadoras/simulador-de-emprestimo',
  '/calculadoras/rescisao-clt',
  '/calculadoras/porcentagem',
]);

const highlightedTools = popularTools
  .filter((tool) => highlightedToolPaths.has(tool.href))
  .slice(0, 3);

const featuredCategories = categories.filter(
  (category) => category.slug !== 'politica',
);

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden bg-ads-secondary py-16 text-white sm:py-22 lg:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_16%,rgb(8_120_90_/_42%),transparent_36%),linear-gradient(135deg,transparent_45%,rgb(255_255_255_/_3%))]" />
        <Container className="relative grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div className="grid gap-8">
            <div className="grid gap-5">
              <span className="text-ads-eyebrow font-bold uppercase tracking-[0.18em] text-emerald-200">
                Finanças sem complicação
              </span>
              <h1 className="max-w-[11ch] font-ads-display text-ads-hero font-bold tracking-[-0.045em] text-white">
                Entenda. Calcule. Decida melhor.
              </h1>
              <p className="max-w-xl text-ads-lead leading-8 text-white/75">
                Informação financeira traduzida para a vida real, com contas
                explicadas, contexto e fontes que você pode conferir.
              </p>
            </div>

            <Search
              className="max-w-2xl shadow-ads-soft"
              placeholder="O que você precisa resolver hoje?"
            />

            <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/65">
              <span className="font-semibold text-white">
                Buscas populares:
              </span>
              <Link
                className="transition hover:text-white"
                href="/pesquisa?q=salario+liquido"
              >
                salário líquido
              </Link>
              <Link
                className="transition hover:text-white"
                href="/pesquisa?q=ferias"
              >
                férias
              </Link>
              <Link
                className="transition hover:text-white"
                href="/pesquisa?q=juros"
              >
                juros
              </Link>
            </div>
          </div>

          <Card className="relative overflow-hidden border-white/10 p-6 shadow-ads-raised sm:p-8">
            <div className="absolute right-0 top-0 h-1 w-28 bg-ads-primary" />
            <div className="grid gap-7">
              <div className="grid gap-2">
                <span className="text-xs font-bold uppercase tracking-[0.16em] text-ads-primary-strong">
                  Ferramenta em destaque
                </span>
                <h2 className="font-ads-display text-3xl font-bold leading-tight text-ads-secondary">
                  Quanto realmente cai na sua conta?
                </h2>
                <p className="text-sm leading-6 text-ads-muted">
                  Estime seu salário líquido e entenda cada desconto, sem
                  precisar interpretar uma planilha.
                </p>
              </div>
              <ol
                className="grid gap-3 text-sm"
                aria-label="Como usar a plataforma"
              >
                {[
                  'Informe seu salário e descontos',
                  'Veja a estimativa e a memória da conta',
                  'Entenda o resultado e o próximo passo',
                ].map((step, index) => (
                  <li className="flex items-center gap-3" key={step}>
                    <span className="grid size-7 shrink-0 place-items-center rounded-ads-full bg-ads-primary-soft text-xs font-bold text-ads-primary-strong">
                      {index + 1}
                    </span>
                    <span className="text-ads-muted">{step}</span>
                  </li>
                ))}
              </ol>
              <Link
                className="inline-flex min-h-12 items-center justify-center rounded-ads-medium bg-ads-primary px-5 text-sm font-bold text-white transition hover:bg-ads-primary-strong"
                href="/calculadoras/salario-liquido"
              >
                Calcular salário líquido
                <span aria-hidden="true" className="ml-2">
                  →
                </span>
              </Link>
            </div>
          </Card>
        </Container>
      </section>

      <div className="border-b border-ads-border bg-ads-background">
        <Container className="grid gap-5 py-6 text-sm text-ads-muted sm:grid-cols-3 sm:gap-8">
          {[
            ['50 calculadoras', 'para situações reais do dia a dia'],
            ['Fontes oficiais', 'indicadas em cada conteúdo'],
            ['Método explicado', 'com premissas e alertas visíveis'],
          ].map(([title, description]) => (
            <div className="flex items-start gap-3" key={title}>
              <span
                aria-hidden="true"
                className="mt-0.5 text-base font-bold text-ads-primary"
              >
                ✓
              </span>
              <p>
                <strong className="block text-ads-secondary">{title}</strong>
                {description}
              </p>
            </div>
          ))}
        </Container>
      </div>

      <Section aria-labelledby="categorias-title" id="categorias">
        <Container>
          <div className="mb-9 grid max-w-2xl gap-2">
            <span className="text-ads-eyebrow font-bold uppercase tracking-[0.14em] text-ads-primary-strong">
              Explore por tema
            </span>
            <h2
              className="font-ads-display text-ads-title font-bold tracking-tight text-ads-secondary"
              id="categorias-title"
            >
              Comece pelo que importa para você
            </h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-ads-xlarge bg-ads-border shadow-ads-subtle sm:grid-cols-2 lg:grid-cols-3">
            {featuredCategories.map((category) => (
              <Link
                className="group flex min-h-36 items-start gap-4 bg-ads-surface p-6 transition duration-200 hover:bg-ads-primary-soft"
                href={`/categorias/${category.slug}`}
                key={category.slug}
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-ads-large bg-ads-primary-soft text-lg font-bold text-ads-primary-strong transition group-hover:bg-ads-primary group-hover:text-white">
                  {category.icon}
                </span>
                <span className="grid gap-1">
                  <strong className="text-lg text-ads-secondary group-hover:text-ads-primary-strong">
                    {category.label}
                  </strong>
                  <span className="text-sm leading-6 text-ads-muted">
                    {category.description}
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Container>
        <AdSlot
          format="horizontal"
          label="Publicidade entre categorias e ferramentas"
          placementId="home-after-categories"
          size="banner"
        />
      </Container>

      <Section
        aria-labelledby="ferramentas-title"
        className="border-y border-ads-border bg-ads-surface"
        id="ferramentas"
      >
        <Container>
          <div className="mb-9 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div className="grid max-w-2xl gap-2">
              <span className="text-ads-eyebrow font-bold uppercase tracking-[0.14em] text-ads-primary-strong">
                Mais utilizadas
              </span>
              <h2
                className="font-ads-display text-ads-title font-bold tracking-tight text-ads-secondary"
                id="ferramentas-title"
              >
                Ferramentas populares
              </h2>
              <p className="leading-7 text-ads-muted">
                Simulações rápidas para transformar dúvidas em próximos passos.
              </p>
            </div>
            <Link
              className="text-sm font-semibold text-ads-primary-strong hover:underline"
              href="/calculadoras"
            >
              Ver todas as calculadoras →
            </Link>
          </div>
          <Grid columns={3}>
            {highlightedTools.map((tool) => (
              <CalculatorCard
                category={
                  categories.find((category) => category.slug === tool.category)
                    ?.label ?? 'Ferramenta'
                }
                description={tool.description}
                href={tool.href}
                key={tool.title}
                title={tool.title}
              />
            ))}
          </Grid>
        </Container>
      </Section>

      <Section aria-labelledby="noticias-title" id="noticias">
        <Container>
          <div className="mb-9 grid max-w-2xl gap-2">
            <span className="text-ads-eyebrow font-bold uppercase tracking-[0.14em] text-ads-primary-strong">
              Contexto para decidir
            </span>
            <h2
              className="font-ads-display text-ads-title font-bold tracking-tight text-ads-secondary"
              id="noticias-title"
            >
              Notícias e análises
            </h2>
            <p className="leading-7 text-ads-muted">
              O que mudou, por que importa e como isso pode afetar sua vida.
            </p>
          </div>
          <Grid columns={3}>
            {latestNews.map((news) => (
              <NewsCard
                category={
                  categories.find((category) => category.slug === news.category)
                    ?.label ?? 'Notícia'
                }
                date={news.date}
                description={news.description}
                href={news.href}
                key={news.title}
                readingTime={news.readingTime}
                title={news.title}
              />
            ))}
          </Grid>
        </Container>
      </Section>

      <Container>
        <AdSlot
          format="horizontal"
          label="Publicidade entre notícias e guias"
          placementId="home-after-news"
          size="banner"
        />
      </Container>

      <Section
        aria-labelledby="guias-title"
        className="border-t border-ads-border bg-ads-surface"
        id="guias"
      >
        <Container>
          <div className="mb-9 grid max-w-2xl gap-2">
            <span className="text-ads-eyebrow font-bold uppercase tracking-[0.14em] text-ads-primary-strong">
              Aprenda no seu ritmo
            </span>
            <h2
              className="font-ads-display text-ads-title font-bold tracking-tight text-ads-secondary"
              id="guias-title"
            >
              Guias em destaque
            </h2>
            <p className="leading-7 text-ads-muted">
              Explicações que continuam úteis quando você precisar consultar
              novamente.
            </p>
          </div>
          <Grid columns={3}>
            {featuredGuides.map((guide) => (
              <GuideCard
                category="Guia"
                description={guide.description}
                href={guide.href}
                key={guide.title}
                readingTime={guide.readingTime}
                title={guide.title}
              />
            ))}
          </Grid>
        </Container>
      </Section>
    </main>
  );
}

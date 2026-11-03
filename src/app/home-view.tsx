import Link from 'next/link';

import { AdSlot } from '@/components/advertising/ad-slot';
import {
  CompactStoryCard,
  LeadStoryCard,
  MomentShortcuts,
  Reveal,
  SecondaryStoryCard,
  calculatorShowcase,
} from '@/components/home';
import { Container } from '@/components/layout/container';
import {
  categories,
  featuredGuides,
  indicators,
  latestNews,
  popularTools,
} from '@/features/public-content';
import type { Indicator } from '@/features/public-content';

type HomeNews = (typeof latestNews)[number];

/**
 * Editorias da home, na ordem em que aparecem. Cada bloco usa a cor da sua
 * editoria (classes .editoria-<slug> em globals.css) e pode reunir mais de uma
 * categoria de conteúdo.
 */
const editoriaBlocks = [
  {
    slug: 'politica',
    title: 'Política',
    intro:
      'Congresso, governo e STF, com o que cada decisão muda no salário, nos impostos e nos benefícios.',
    categories: ['politica'],
  },
  {
    slug: 'economia',
    title: 'Economia',
    intro:
      'Inflação, emprego, impostos e preços: a ponte entre Brasília e o seu bolso.',
    categories: ['economia'],
  },
  {
    slug: 'mercado',
    title: 'Mercado',
    intro: 'Bolsa, dólar, Petrobras, juros e investimentos.',
    categories: ['mercado'],
  },
  {
    slug: 'brasil',
    title: 'Brasil',
    intro:
      'Prazos, calendários, consumo e serviços que valem para todo o país.',
    categories: ['brasil'],
  },
  {
    slug: 'financas',
    title: 'Finanças',
    intro: 'Dívidas, Pix, impostos, MEI e o que fazer com o seu dinheiro.',
    categories: ['financas', 'utilidades'],
  },
  {
    slug: 'beneficios',
    title: 'Benefícios e trabalho',
    intro: 'INSS, FGTS, Bolsa Família e os direitos de quem trabalha.',
    categories: ['beneficios', 'trabalho'],
  },
] as const;

const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  day: 'numeric',
  month: 'short',
  timeZone: 'UTC',
});

const longDateFormatter = new Intl.DateTimeFormat('pt-BR', {
  dateStyle: 'full',
  timeZone: 'UTC',
});

function formatDate(value: string, formatter = dateFormatter) {
  return formatter.format(new Date(`${value}T00:00:00Z`));
}

function categoryLabel(slug: string) {
  return categories.find((item) => item.slug === slug)?.label ?? 'Notícia';
}

/** Linha de notícia só com texto: selo da editoria, título e data. */
function HeadlineRow({ news }: Readonly<{ news: HomeNews }>) {
  return (
    <Link
      className={`editoria-${news.category} group grid gap-1.5 py-4 transition`}
      href={news.href}
    >
      <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-ads-primary-strong">
        <span
          aria-hidden="true"
          className="size-2 rounded-full bg-ads-primary"
        />
        {categoryLabel(news.category)}
        <span className="font-semibold normal-case tracking-normal text-ads-subtle">
          · {formatDate(news.date)}
        </span>
      </span>
      <span className="font-semibold leading-snug text-ads-secondary transition group-hover:text-ads-primary-strong">
        {news.title}
      </span>
    </Link>
  );
}

/** Bloco de editoria: faixa na cor do tema, uma notícia com capa e mais três em lista. */
function EditoriaBlock({
  block,
  items,
}: Readonly<{
  block: (typeof editoriaBlocks)[number];
  items: readonly HomeNews[];
}>) {
  const [featured, ...rest] = items;

  if (!featured) {
    return null;
  }

  return (
    <section
      aria-labelledby={`${block.slug}-title`}
      className={`editoria-${block.slug} py-10 sm:py-12`}
      id={block.slug}
    >
      <Container>
        <Reveal>
          <div className="mb-7 flex flex-col gap-3 border-t-4 border-ads-primary pt-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="grid gap-1.5">
              <h2
                className="font-ads-display text-3xl font-extrabold tracking-tight text-ads-primary-strong"
                id={`${block.slug}-title`}
              >
                {block.title}
              </h2>
              <p className="max-w-2xl text-sm leading-6 text-ads-muted">
                {block.intro}
              </p>
            </div>
            <Link
              className="shrink-0 text-sm font-bold text-ads-primary-strong hover:underline"
              href={`/categorias/${block.slug}`}
            >
              Tudo de {block.title} →
            </Link>
          </div>
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-[1.25fr_1fr]">
          <Reveal className="h-full">
            <SecondaryStoryCard news={featured} />
          </Reveal>
          <Reveal className="h-full" delay={80}>
            <ul className="grid h-full content-start divide-y divide-ads-border rounded-ads-xlarge border border-ads-border bg-white px-6">
              {rest.map((news) => (
                <li key={news.href}>
                  <Link
                    className="group grid grid-cols-[6.5rem_1fr] items-center gap-5 py-5"
                    href={news.href}
                  >
                    <span className="grid gap-0.5">
                      <strong className="font-ads-display text-2xl font-extrabold leading-none tracking-tight text-ads-primary tabular-nums">
                        {news.highlight?.value ?? '→'}
                      </strong>
                      <span className="line-clamp-2 text-[0.7rem] font-semibold leading-4 text-ads-muted">
                        {news.highlight?.label}
                      </span>
                    </span>
                    <span className="grid gap-1">
                      <span className="font-semibold leading-snug text-ads-secondary transition group-hover:text-ads-primary-strong">
                        {news.title}
                      </span>
                      <span className="text-xs text-ads-subtle">
                        {formatDate(news.date)} · {news.readingTime}
                      </span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export function HomeView({
  marketIndicators = indicators,
}: Readonly<{ marketIndicators?: readonly Indicator[] }>) {
  const [leadNews, ...otherNews] = latestNews;
  const secondaryNews = otherNews.slice(0, 2);
  const latestList = otherNews.slice(2, 10);
  const moreNews = otherNews.slice(10, 14);
  const featuredHrefs = new Set(
    [leadNews, ...secondaryNews, ...moreNews].map((news) => news?.href),
  );
  const blockItems = (slugs: readonly string[]) => {
    const inTopic = latestNews.filter((news) => slugs.includes(news.category));
    const fresh = inTopic.filter((news) => !featuredHrefs.has(news.href));
    return (fresh.length >= 2 ? fresh : inTopic).slice(0, 4);
  };
  const guides = featuredGuides.slice(0, 5);
  const [leadGuide, ...otherGuides] = guides;
  const newsHref = (slug: string) =>
    latestNews.find((news) => news.href.endsWith(`/${slug}`))?.href;
  const shortcuts = [
    { label: 'Salário líquido', href: '/calculadoras/salario-liquido' },
    {
      label: 'Calendário do INSS',
      href: newsHref(
        'inss-novembro-2026-calendario-24-de-novembro-e-13o-para-quem-comecou-em-maio',
      ),
    },
    {
      label: 'Bolsa Família',
      href: newsHref(
        'bolsa-familia-novembro-16-17-e-18-dezembro-10-11-e-14-calendario-do-nis',
      ),
    },
    {
      label: '13º salário',
      href: newsHref(
        '13o-salario-2026-primeira-parcela-ate-30-de-novembro-e-segunda-ate-18-de-dezembro',
      ),
    },
    {
      label: 'Copom e Selic',
      href: newsHref(
        'copom-4-de-novembro-selic-13-75-focus-preve-13-25-no-fim-de-2026',
      ),
    },
    {
      label: 'Enem 2026',
      href: newsHref(
        'enem-2026-provas-8-e-15-de-novembro-portoes-fecham-as-13h-e-pe-de-meia-paga-r-200',
      ),
    },
    {
      label: 'IR zero até R$ 5 mil',
      href: '/guias/tabela-do-imposto-de-renda-2026-na-folha',
    },
  ].flatMap((item) =>
    item.href ? [{ label: item.label, href: item.href }] : [],
  );
  const toolBySlug = new Map(
    popularTools.map((tool) => [tool.href.split('/').pop(), tool]),
  );
  const trendClass = {
    down: 'text-emerald-300',
    neutral: 'text-white/60',
    up: 'text-amber-300',
  } as const;

  return (
    <main>
      <section
        aria-label="Indicadores econômicos"
        className="home-marquee overflow-hidden bg-ads-secondary-strong py-2.5 text-white"
      >
        <div className="home-marquee-track flex gap-12 pr-12">
          {[0, 1].map((copy) => (
            <ul
              aria-hidden={copy === 1}
              className="flex shrink-0 items-center gap-12"
              key={copy}
            >
              {marketIndicators.map((item) => {
                const content = (
                  <>
                    <span className="text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-white/60">
                      {item.label}
                    </span>
                    <strong className="text-sm tabular-nums">
                      {item.value}
                    </strong>
                    <span
                      className={`text-xs font-semibold ${trendClass[item.trend]}`}
                    >
                      {item.trend === 'down'
                        ? '↓'
                        : item.trend === 'up'
                          ? '↑'
                          : '•'}{' '}
                      {item.change}
                    </span>
                  </>
                );

                return (
                  <li key={item.label}>
                    {'href' in item && item.href ? (
                      <Link
                        className="flex items-baseline gap-3 transition hover:text-emerald-200"
                        href={item.href}
                        tabIndex={copy === 1 ? -1 : undefined}
                      >
                        {content}
                      </Link>
                    ) : (
                      <span className="flex items-baseline gap-3">
                        {content}
                      </span>
                    )}
                  </li>
                );
              })}
            </ul>
          ))}
        </div>
      </section>

      <MomentShortcuts items={shortcuts} />

      <section
        aria-labelledby="manchetes-title"
        className="bg-ads-background pb-10 pt-8 sm:pb-14 sm:pt-10"
        id="noticias"
      >
        <Container>
          <div className="mb-7 flex flex-col gap-2 border-b border-ads-border pb-5 sm:flex-row sm:items-end sm:justify-between">
            <div className="grid gap-1">
              <span className="text-xs font-semibold uppercase tracking-[0.14em] text-ads-subtle">
                {leadNews
                  ? `Atualizado em ${formatDate(leadNews.date, longDateFormatter)}`
                  : 'Notícias'}
              </span>
              <h1
                className="font-ads-display text-[clamp(1.9rem,3.6vw,2.75rem)] font-extrabold leading-tight tracking-[-0.03em] text-ads-secondary"
                id="manchetes-title"
              >
                Notícias que mexem no seu bolso
              </h1>
            </div>
            <Link
              className="text-sm font-bold text-ads-primary-strong hover:underline"
              href="/noticias"
            >
              Todas as notícias →
            </Link>
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_21rem]">
            <div className="grid content-start gap-5">
              {leadNews ? (
                <Reveal variant="fade-left">
                  <LeadStoryCard
                    categoryLabel={categoryLabel(leadNews.category)}
                    news={leadNews}
                  />
                </Reveal>
              ) : null}
              <div className="grid gap-5 sm:grid-cols-2">
                {secondaryNews.map((news, index) => (
                  <Reveal
                    className="h-full"
                    delay={(index + 1) * 80}
                    key={news.href}
                  >
                    <SecondaryStoryCard news={news} />
                  </Reveal>
                ))}
              </div>
            </div>

            <aside
              aria-labelledby="ultimas-title"
              className="grid content-start gap-6"
            >
              <div className="rounded-ads-xlarge border border-ads-border bg-white px-6 pb-2 pt-5">
                <h2
                  className="flex items-center gap-2 font-ads-display text-lg font-extrabold text-ads-secondary"
                  id="ultimas-title"
                >
                  <span className="home-live-dot size-2 rounded-full bg-ads-primary" />
                  Últimas notícias
                </h2>
                <ol className="divide-y divide-ads-border">
                  {latestList.map((news) => (
                    <li key={news.href}>
                      <HeadlineRow news={news} />
                    </li>
                  ))}
                </ol>
              </div>
              <AdSlot
                format="rectangle"
                label="Publicidade ao lado das manchetes"
                placementId="home-headlines-side"
              />
            </aside>
          </div>

          {moreNews.length > 0 ? (
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {moreNews.map((news, index) => (
                <Reveal className="h-full" delay={index * 60} key={news.href}>
                  <CompactStoryCard news={news} />
                </Reveal>
              ))}
            </div>
          ) : null}
        </Container>
      </section>

      <nav
        aria-label="Editorias"
        className="sticky top-[4.5rem] z-30 border-y border-ads-border bg-white/95 backdrop-blur"
      >
        <Container className="flex items-center gap-2 overflow-x-auto py-3 [scrollbar-width:none]">
          {editoriaBlocks.map((block) => (
            <a
              className={`editoria-${block.slug} flex shrink-0 items-center gap-2 rounded-ads-full border border-ads-border px-4 py-1.5 text-sm font-semibold text-ads-secondary transition hover:border-ads-primary hover:bg-ads-primary-soft hover:text-ads-primary-strong`}
              href={`#${block.slug}`}
              key={block.slug}
            >
              <span
                aria-hidden="true"
                className="size-2 rounded-full bg-ads-primary"
              />
              {block.title}
            </a>
          ))}
        </Container>
      </nav>

      <div className="bg-ads-background">
        {editoriaBlocks.slice(0, 3).map((block) => (
          <EditoriaBlock
            block={block}
            items={blockItems(block.categories)}
            key={block.slug}
          />
        ))}

        <Container className="py-4">
          <AdSlot
            format="horizontal"
            label="Publicidade entre editorias"
            placementId="home-after-topics"
            size="banner"
          />
        </Container>

        {editoriaBlocks.slice(3).map((block) => (
          <EditoriaBlock
            block={block}
            items={blockItems(block.categories)}
            key={block.slug}
          />
        ))}
      </div>

      <section
        aria-labelledby="calcule-agora-title"
        className="bg-ads-secondary-strong py-14 text-white sm:py-16"
        id="calculadoras"
      >
        <Container>
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="grid max-w-2xl gap-2">
              <span className="text-ads-eyebrow font-bold uppercase tracking-[0.16em] text-emerald-300">
                Calculadoras
              </span>
              <h2
                className="font-ads-display text-ads-title font-extrabold tracking-tight"
                id="calcule-agora-title"
              >
                Calcule agora
              </h2>
              <p className="leading-7 text-white/70">
                Toda notícia leva para a calculadora do assunto. Aqui estão as
                mais usadas.
              </p>
            </div>
            <Link
              className="shrink-0 text-sm font-bold text-emerald-300 hover:underline"
              href="/calculadoras"
            >
              Ver as {popularTools.length} calculadoras →
            </Link>
          </div>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {calculatorShowcase.map((item) => {
              const tool = toolBySlug.get(item.slug);

              return tool ? (
                <li key={item.slug}>
                  <Link
                    className="group grid h-full gap-1 rounded-ads-large border border-white/10 bg-white/5 p-5 transition hover:-translate-y-0.5 hover:border-emerald-300/60 hover:bg-white/10"
                    href={tool.href}
                  >
                    <span className="flex items-center justify-between font-bold">
                      {item.title}
                      <span
                        aria-hidden="true"
                        className="text-emerald-300 transition group-hover:translate-x-1"
                      >
                        →
                      </span>
                    </span>
                    <span className="text-sm leading-6 text-white/65">
                      {item.promise}
                    </span>
                  </Link>
                </li>
              ) : null;
            })}
          </ul>
        </Container>
      </section>

      <section
        aria-labelledby="guias-title"
        className="bg-white py-14 sm:py-20"
        id="guias"
      >
        <Container>
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="grid max-w-2xl gap-2">
              <span className="text-ads-eyebrow font-bold uppercase tracking-[0.16em] text-ads-primary-strong">
                Guias
              </span>
              <h2
                className="font-ads-display text-ads-title font-extrabold tracking-tight text-ads-secondary"
                id="guias-title"
              >
                Guias para consultar quando precisar
              </h2>
            </div>
            <Link
              className="shrink-0 text-sm font-bold text-ads-primary-strong hover:underline"
              href="/guias"
            >
              Ver todos os guias →
            </Link>
          </div>
          <div className="grid gap-5 lg:grid-cols-[1.1fr_1fr]">
            {leadGuide ? (
              <Reveal className="h-full" variant="fade-left">
                <article className="group relative grid h-full content-between gap-8 overflow-hidden rounded-ads-xlarge bg-ads-primary-soft p-8 transition duration-300 hover:-translate-y-1 hover:shadow-ads-soft sm:p-10">
                  <div className="grid gap-4">
                    <span className="w-fit rounded-ads-full bg-white px-3 py-1 text-xs font-bold text-ads-primary-strong">
                      Guia em destaque · {leadGuide.readingTime}
                    </span>
                    <h3 className="font-ads-display text-2xl font-extrabold leading-tight text-ads-secondary sm:text-3xl">
                      <Link
                        className="after:absolute after:inset-0"
                        href={leadGuide.href}
                      >
                        {leadGuide.title}
                      </Link>
                    </h3>
                    <p className="leading-7 text-ads-muted">
                      {leadGuide.description}
                    </p>
                  </div>
                  <span className="text-sm font-bold text-ads-primary-strong">
                    Ler o guia →
                  </span>
                </article>
              </Reveal>
            ) : null}
            <Reveal className="h-full" variant="fade-right">
              <ul className="grid h-full divide-y divide-ads-border overflow-hidden rounded-ads-xlarge border border-ads-border bg-white">
                {otherGuides.map((guide) => (
                  <li key={guide.href}>
                    <Link
                      className="group grid h-full gap-1 p-5 transition hover:bg-ads-primary-soft sm:px-6"
                      href={guide.href}
                    >
                      <span className="text-xs font-bold text-ads-primary-strong">
                        Guia · {guide.readingTime}
                      </span>
                      <span className="flex items-start justify-between gap-3 font-semibold leading-6 text-ads-secondary">
                        {guide.title}
                        <span
                          aria-hidden="true"
                          className="text-ads-primary transition group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      <Container className="py-8">
        <AdSlot
          format="horizontal"
          label="Publicidade antes do rodapé"
          placementId="home-before-footer"
          size="banner"
        />
      </Container>

      <section
        aria-labelledby="confianca-title"
        className="relative overflow-hidden bg-ads-secondary-strong py-14 text-white sm:py-20"
      >
        <Container className="relative">
          <div className="mb-10 grid max-w-2xl gap-3">
            <span className="text-ads-eyebrow font-bold uppercase tracking-[0.16em] text-emerald-200">
              Por que confiar
            </span>
            <h2
              className="font-ads-display text-ads-title font-extrabold tracking-tight"
              id="confianca-title"
            >
              Números oficiais, método à vista e correção quando erramos
            </h2>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Fontes oficiais',
                text: 'Receita Federal, INSS, Banco Central, Congresso e ministérios, citados ao final de cada página.',
              },
              {
                title: 'Conta à vista',
                text: 'Cada notícia traz um exemplo em reais e a calculadora para refazer a conta com os seus dados.',
              },
              {
                title: 'Sem cadastro',
                text: 'Os valores que você digita nas calculadoras ficam no seu navegador e não são enviados a ninguém.',
              },
              {
                title: 'Correção com data',
                text: 'Achou um erro? Avise pelo contato e a correção é publicada com a data.',
              },
            ].map((item) => (
              <div
                className="grid h-full content-start gap-3 rounded-ads-xlarge border border-white/10 bg-white/5 p-6"
                key={item.title}
              >
                <strong className="font-ads-display text-2xl font-extrabold tracking-tight text-emerald-300">
                  {item.title}
                </strong>
                <p className="text-sm leading-6 text-white/70">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 max-w-3xl text-sm leading-7 text-white/70">
            O conteúdo é produzido pela Redação PortalFina com apoio de
            inteligência artificial e baseado em fontes oficiais, que aparecem
            ao final de cada página. Achou um erro? Escreva em{' '}
            <Link
              className="font-semibold text-emerald-200 underline"
              href="/contato"
            >
              contato
            </Link>{' '}
            e a correção é publicada com a data.{' '}
            <Link
              className="font-semibold text-emerald-200 underline"
              href="/sobre"
            >
              Saiba como trabalhamos
            </Link>
            .
          </p>
        </Container>
      </section>

      <section
        aria-labelledby="categorias-title"
        className="border-t border-ads-border bg-ads-background py-14 sm:py-16"
        id="categorias"
      >
        <Container>
          <h2
            className="mb-7 font-ads-display text-2xl font-extrabold tracking-tight text-ads-secondary"
            id="categorias-title"
          >
            Explore por tema
          </h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Link
                className={`editoria-${category.slug} group flex items-center gap-3 rounded-ads-full border border-ads-border bg-white py-2.5 pl-3 pr-5 text-sm font-semibold text-ads-secondary transition hover:border-ads-primary hover:bg-ads-primary-soft`}
                href={`/categorias/${category.slug}`}
                key={category.slug}
              >
                <span className="grid size-8 place-items-center rounded-full bg-ads-primary-soft text-ads-primary-strong transition group-hover:bg-ads-primary group-hover:text-white">
                  {category.icon}
                </span>
                {category.label}
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}

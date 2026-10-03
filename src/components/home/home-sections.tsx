import Link from 'next/link';
import type { CSSProperties, ReactNode } from 'react';

import { NewsCover } from '@/components/content/news-cover';
import { Container } from '@/components/layout/container';
import type { latestNews } from '@/features/public-content';

/** Notícia como a home a recebe: a categoria já é a do conteúdo, usada pela capa. */
type NewsItem = (typeof latestNews)[number];

import { Reveal } from './reveal';

const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  dateStyle: 'long',
  timeZone: 'UTC',
});

function formatDate(value: string) {
  return dateFormatter.format(new Date(`${value}T00:00:00Z`));
}

/** Cabeçalho padrão das seções da home: marcador, título e link opcional. */
export function SectionHeading({
  action,
  eyebrow,
  id,
  intro,
  title,
  tone = 'light',
}: Readonly<{
  action?: ReactNode;
  eyebrow: string;
  id: string;
  intro?: string;
  title: string;
  tone?: 'dark' | 'light';
}>) {
  const dark = tone === 'dark';

  return (
    <Reveal>
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="grid max-w-2xl gap-3">
          <span
            className={`inline-flex w-fit items-center gap-2 text-ads-eyebrow font-bold uppercase tracking-[0.16em] ${
              dark ? 'text-emerald-200' : 'text-ads-primary-strong'
            }`}
          >
            <span
              aria-hidden="true"
              className={`h-px w-6 ${dark ? 'bg-emerald-200/60' : 'bg-ads-primary'}`}
            />
            {eyebrow}
          </span>
          <h2
            className={`font-ads-display text-ads-title font-extrabold tracking-tight ${
              dark ? 'text-white' : 'text-ads-secondary'
            }`}
            id={id}
          >
            {title}
          </h2>
          {intro ? (
            <p
              className={`leading-7 ${dark ? 'text-white/70' : 'text-ads-muted'}`}
            >
              {intro}
            </p>
          ) : null}
        </div>
        {action}
      </div>
    </Reveal>
  );
}

/**
 * Camada de dados do hero: um gráfico que se desenha sozinho e símbolos
 * financeiros que flutuam devagar. É só decoração (CSS/SVG), sem JavaScript.
 */
export function HeroDataLayer() {
  const glyphs = [
    { text: 'R$', className: 'left-[4%] top-[14%] text-6xl', delay: '0s' },
    { text: '%', className: 'right-[7%] top-[9%] text-7xl', delay: '-3s' },
    { text: '13º', className: 'left-[44%] bottom-[8%] text-5xl', delay: '-5s' },
    { text: '↗', className: 'right-[3%] bottom-[22%] text-6xl', delay: '-2s' },
  ] as const;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <svg
        className="absolute bottom-0 left-0 h-[46%] w-full text-emerald-300"
        fill="none"
        preserveAspectRatio="none"
        viewBox="0 0 1200 320"
      >
        <defs>
          <linearGradient id="home-chart-fill" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.16" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M0 250 C 90 240, 140 205, 230 212 S 380 160, 470 170 S 620 120, 710 128 S 880 70, 970 84 S 1120 40, 1200 28 L 1200 320 L 0 320 Z"
          fill="url(#home-chart-fill)"
        />
        <path
          className="home-draw"
          d="M0 250 C 90 240, 140 205, 230 212 S 380 160, 470 170 S 620 120, 710 128 S 880 70, 970 84 S 1120 40, 1200 28"
          pathLength="1"
          stroke="currentColor"
          strokeLinecap="round"
          strokeOpacity="0.55"
          strokeWidth="3"
        />
      </svg>
      {glyphs.map((glyph) => (
        <span
          className={`home-glyph absolute hidden font-ads-display font-extrabold text-emerald-200 sm:block ${glyph.className}`}
          key={glyph.text}
          style={{ animationDelay: glyph.delay } as CSSProperties}
        >
          {glyph.text}
        </span>
      ))}
    </div>
  );
}

/** Faixa de atalhos do momento, logo abaixo dos indicadores. */
export function MomentShortcuts({
  items,
}: Readonly<{ items: readonly Readonly<{ href: string; label: string }>[] }>) {
  if (items.length === 0) return null;

  return (
    <nav
      aria-label="Atalhos do momento"
      className="border-b border-ads-border bg-white"
    >
      <Container className="flex items-center gap-3 overflow-x-auto py-3.5 [scrollbar-width:none]">
        <span className="shrink-0 text-xs font-bold uppercase tracking-[0.14em] text-ads-subtle">
          Atalhos do momento
        </span>
        {items.map((item) => (
          <Link
            className="shrink-0 rounded-ads-full border border-ads-border bg-ads-background px-4 py-1.5 text-sm font-semibold text-ads-secondary transition hover:border-ads-primary hover:bg-ads-primary-soft hover:text-ads-primary-strong"
            href={item.href}
            key={item.href}
          >
            {item.label}
          </Link>
        ))}
      </Container>
    </nav>
  );
}

/** Notícia de destaque: capa grande, título e atalho para a calculadora. */
export function LeadStoryCard({
  categoryLabel,
  news,
}: Readonly<{ categoryLabel: string; news: NewsItem }>) {
  return (
    <article className="group relative isolate flex h-full flex-col overflow-hidden rounded-ads-xlarge bg-ads-secondary text-white shadow-ads-soft transition duration-300 hover:-translate-y-1 hover:shadow-ads-raised">
      {news.highlight ? (
        <NewsCover
          category={news.category}
          className="aspect-[1200/630] w-full"
          label={news.highlight.label}
          value={news.highlight.value}
        />
      ) : null}
      <div className="flex flex-1 flex-col justify-between gap-6 p-7 sm:p-9">
        <div className="grid gap-4">
          <span className="w-fit rounded-ads-full bg-white/10 px-3 py-1 text-xs font-semibold text-emerald-100">
            Destaque · {categoryLabel}
          </span>
          <h3 className="max-w-xl font-ads-display text-2xl font-bold leading-tight sm:text-3xl">
            <Link className="after:absolute after:inset-0" href={news.href}>
              {news.title}
            </Link>
          </h3>
          <p className="max-w-xl leading-7 text-white/70">{news.description}</p>
        </div>
        <div className="relative z-10 flex flex-wrap items-center gap-4 text-sm">
          {news.calculator ? (
            <Link
              className="rounded-ads-full bg-emerald-300 px-5 py-2.5 font-bold text-ads-secondary-strong transition hover:bg-emerald-200"
              href={news.calculator.href}
            >
              {news.calculator.title} →
            </Link>
          ) : null}
          <span className="text-white/60">
            {formatDate(news.date)} · {news.readingTime}
          </span>
        </div>
      </div>
    </article>
  );
}

/** Notícia secundária: capa, título e botão da calculadora. */
export function SecondaryStoryCard({ news }: Readonly<{ news: NewsItem }>) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-ads-xlarge border border-ads-border bg-white transition duration-300 hover:-translate-y-1 hover:border-ads-primary hover:shadow-ads-soft">
      {news.highlight ? (
        <NewsCover
          category={news.category}
          className="aspect-[1200/630] w-full"
          label={news.highlight.label}
          value={news.highlight.value}
        />
      ) : null}
      <div className="flex flex-1 flex-col justify-between gap-4 p-5 sm:p-6">
        <h3 className="font-ads-display text-lg font-bold leading-snug text-ads-secondary">
          <Link className="after:absolute after:inset-0" href={news.href}>
            {news.title}
          </Link>
        </h3>
        <div className="relative z-10 grid gap-3">
          {news.calculator ? (
            <Link
              className="w-fit rounded-ads-full bg-ads-primary-soft px-3.5 py-1.5 text-xs font-bold text-ads-primary-strong transition hover:bg-ads-primary hover:text-white"
              href={news.calculator.href}
            >
              Calcular:{' '}
              {news.calculator.title.replace(
                /^(Calculadora de |Calculadora |Simulador de )/,
                '',
              )}{' '}
              →
            </Link>
          ) : null}
          <span className="text-xs text-ads-muted">
            {formatDate(news.date)} · {news.readingTime}
          </span>
        </div>
      </div>
    </article>
  );
}

/** Notícia compacta: capa e título, para varrer o que mais saiu. */
export function CompactStoryCard({ news }: Readonly<{ news: NewsItem }>) {
  return (
    <Link
      className="group grid h-full content-start overflow-hidden rounded-ads-large border border-ads-border bg-white transition duration-300 hover:-translate-y-0.5 hover:border-ads-primary hover:shadow-ads-soft"
      href={news.href}
    >
      {news.highlight ? (
        <NewsCover
          category={news.category}
          className="aspect-[1200/630] w-full"
          label={news.highlight.label}
          value={news.highlight.value}
        />
      ) : null}
      <span className="grid gap-1.5 p-4">
        <span className="text-sm font-semibold leading-6 text-ads-secondary">
          {news.title}
        </span>
        <span className="text-xs text-ads-muted">
          {formatDate(news.date)} · {news.readingTime}
        </span>
      </span>
    </Link>
  );
}

/**
 * Seção por assunto: o número da notícia vira o protagonista de cada linha,
 * seguido do que isso significa para o leitor e da calculadora para refazer a conta.
 */
export function TopicStories({
  items,
  moreHref,
  moreLabel,
}: Readonly<{
  items: readonly NewsItem[];
  moreHref: string;
  moreLabel: string;
}>) {
  return (
    <div className="grid gap-4">
      {items.map((news, index) => (
        <Reveal delay={index * 80} key={news.href}>
          <article className="group relative grid gap-4 rounded-ads-xlarge border border-ads-border bg-white p-6 transition duration-300 hover:border-ads-primary hover:shadow-ads-soft sm:grid-cols-[11rem_1fr] sm:items-center sm:gap-7 sm:p-7">
            <div className="grid gap-1">
              <strong className="font-ads-display text-4xl font-extrabold leading-none tracking-tight text-ads-primary tabular-nums sm:text-[2.6rem]">
                {news.highlight?.value ?? '→'}
              </strong>
              <span className="text-xs font-semibold text-ads-muted">
                {news.highlight?.label}
              </span>
            </div>
            <div className="grid gap-3">
              <h3 className="font-ads-display text-xl font-bold leading-snug text-ads-secondary">
                <Link className="after:absolute after:inset-0" href={news.href}>
                  {news.title}
                </Link>
              </h3>
              <p className="text-sm leading-6 text-ads-muted">
                {news.description}
              </p>
              <div className="relative z-10 flex flex-wrap items-center gap-3">
                {news.calculator ? (
                  <Link
                    className="rounded-ads-full bg-ads-primary-soft px-3.5 py-1.5 text-xs font-bold text-ads-primary-strong transition hover:bg-ads-primary hover:text-white"
                    href={news.calculator.href}
                  >
                    Refazer a conta com os seus dados →
                  </Link>
                ) : null}
                <span className="text-xs text-ads-muted">
                  {formatDate(news.date)}
                </span>
              </div>
            </div>
          </article>
        </Reveal>
      ))}
      <Reveal>
        <Link
          className="text-sm font-bold text-ads-primary-strong hover:underline"
          href={moreHref}
        >
          {moreLabel} →
        </Link>
      </Reveal>
    </div>
  );
}

type CalculatorShowcaseItem = Readonly<{
  example: Readonly<{ label: string; value: string }>;
  icon: readonly string[];
  promise: string;
  slug: string;
  title: string;
}>;

/** As calculadoras em destaque: cada card parece uma tela do produto. */
export const calculatorShowcase: readonly CalculatorShowcaseItem[] = [
  {
    slug: 'salario-liquido',
    title: 'Salário líquido',
    promise: 'Quanto cai na conta depois de INSS e Imposto de Renda.',
    example: { label: 'Salário bruto', value: 'R$ 5.500' },
    icon: ['M4 7h16v10H4z', 'M4 11h16', 'M8 15h3'],
  },
  {
    slug: 'rescisao-clt',
    title: 'Rescisão CLT',
    promise: 'Tudo o que você recebe ao sair, verba por verba.',
    example: { label: 'Tempo de casa', value: '3 anos' },
    icon: ['M6 3h9l3 3v15H6z', 'M9 11h6', 'M9 15h6'],
  },
  {
    slug: 'ferias',
    title: 'Férias',
    promise: 'Com o terço constitucional e a opção de vender 10 dias.',
    example: { label: 'Dias de férias', value: '30 dias' },
    icon: [
      'M12 4v2',
      'M12 18v2',
      'M4 12h2',
      'M18 12h2',
      'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z',
    ],
  },
  {
    slug: 'decimo-salario',
    title: '13º salário',
    promise: 'As duas parcelas, com os descontos de cada uma.',
    example: { label: 'Meses trabalhados', value: '12 meses' },
    icon: ['M5 6h14v13H5z', 'M5 10h14', 'M9 3v4', 'M15 3v4'],
  },
  {
    slug: 'seguro-desemprego',
    title: 'Seguro-desemprego',
    promise: 'Valor e número de parcelas pelo seu histórico.',
    example: { label: 'Último salário', value: 'R$ 2.800' },
    icon: [
      'M12 3l8 3v6c0 4.5-3.4 7.7-8 9-4.6-1.3-8-4.5-8-9V6z',
      'M9 12l2 2 4-4',
    ],
  },
  {
    slug: 'fgts-multa',
    title: 'FGTS e multa',
    promise: 'A multa de 40% e o saldo na demissão sem justa causa.',
    example: { label: 'Saldo do FGTS', value: 'R$ 15.000' },
    icon: ['M4 19V9', 'M10 19V5', 'M16 19v-7', 'M21 19H3'],
  },
  {
    slug: 'juros-compostos',
    title: 'Juros compostos',
    promise: 'Quanto seu dinheiro cresce mês a mês com aportes.',
    example: { label: 'Aporte mensal', value: 'R$ 500' },
    icon: ['M3 17l6-6 4 4 8-8', 'M15 7h6v6'],
  },
  {
    slug: 'cdi',
    title: 'CDI',
    promise: 'Quanto rende um investimento por % do CDI.',
    example: { label: 'Prazo', value: '12 meses' },
    icon: [
      'M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Z',
      'M9 15l6-6',
      'M9.5 9.5h.01',
      'M14.5 14.5h.01',
    ],
  },
];

export function CalculatorShowcaseCard({
  index,
  item,
}: Readonly<{ index: number; item: CalculatorShowcaseItem }>) {
  return (
    <Reveal className="h-full" delay={(index % 4) * 80}>
      <Link
        className="group relative grid h-full content-between gap-6 overflow-hidden rounded-ads-xlarge border border-white/10 bg-white/[0.05] p-6 transition duration-300 hover:-translate-y-1 hover:border-emerald-300/50 hover:bg-white/[0.09]"
        href={`/calculadoras/${item.slug}`}
      >
        <div className="grid gap-4">
          <div className="flex items-center justify-between">
            <span className="grid size-11 place-items-center rounded-ads-large bg-emerald-300/15 text-emerald-300 transition group-hover:bg-emerald-300 group-hover:text-ads-secondary-strong">
              <svg
                aria-hidden="true"
                className="size-6"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.7"
                viewBox="0 0 24 24"
              >
                {item.icon.map((path) => (
                  <path d={path} key={path} />
                ))}
              </svg>
            </span>
            <span
              aria-hidden="true"
              className="text-emerald-300 transition group-hover:translate-x-1"
            >
              →
            </span>
          </div>
          <div className="grid gap-1.5">
            <h3 className="font-ads-display text-xl font-bold text-white">
              {item.title}
            </h3>
            <p className="text-sm leading-6 text-white/65">{item.promise}</p>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="grid gap-1 rounded-ads-medium border border-white/10 bg-ads-secondary-strong/70 px-3.5 py-2.5"
        >
          <span className="text-[0.6875rem] font-semibold uppercase tracking-[0.12em] text-white/45">
            {item.example.label}
          </span>
          <span className="font-bold tabular-nums text-white">
            {item.example.value}
          </span>
        </div>
      </Link>
    </Reveal>
  );
}

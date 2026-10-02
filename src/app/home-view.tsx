import Link from 'next/link';
import type { CSSProperties } from 'react';

import { AdSlot } from '@/components/advertising/ad-slot';
import {
  HeroCalculator,
  Reveal,
  ScrollStory,
  TaxCounter,
} from '@/components/home';
import { NewsCover } from '@/components/content/news-cover';
import { Container } from '@/components/layout/container';
import { Search } from '@/components/ui/search';
import {
  categories,
  featuredGuides,
  indicators,
  latestNews,
  popularTools,
} from '@/features/public-content';
import type { Indicator } from '@/features/public-content';

const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  dateStyle: 'long',
  timeZone: 'UTC',
});

const toolGroups = [
  {
    title: 'Seu salário e seus direitos',
    description: 'Do holerite à rescisão, com INSS e IRRF de 2026.',
    icon: '▤',
    slugs: [
      'salario-liquido',
      'ferias',
      'decimo-salario',
      'rescisao-clt',
      'horas-extras',
      'seguro-desemprego',
    ],
  },
  {
    title: 'Benefícios e programas',
    description: 'Valores atuais e regras de quem tem direito.',
    icon: '＋',
    slugs: ['bolsa-familia', 'bpc', 'pis', 'salario-maternidade'],
  },
  {
    title: 'MEI e pequenos negócios',
    description: 'DAS, limite de faturamento, pró-labore e Simples.',
    icon: '◧',
    slugs: [
      'das-limite-mei',
      'das-mei-atraso',
      'pro-labore',
      'simples-nacional',
    ],
  },
  {
    title: 'Investimentos',
    description: 'Compare CDB, LCI, Tesouro e poupança líquidos de IR.',
    icon: '↗',
    slugs: ['cdb-x-poupanca', 'cdb-liquido', 'lci-lca', 'tesouro-selic'],
  },
  {
    title: 'Crédito e financiamento',
    description: 'Parcelas, juros e quanto economizar ao antecipar.',
    icon: '%',
    slugs: [
      'financiamento-sac-price',
      'simulador-de-emprestimo',
      'amortizacao-antecipada',
      'juros-compostos',
    ],
  },
  {
    title: 'Dia a dia',
    description: 'Aluguel, porcentagem, prazos e conversão de taxas.',
    icon: '=',
    slugs: [
      'reajuste-aluguel',
      'porcentagem',
      'contador-de-dias',
      'conversao-taxa-mensal-anual',
    ],
  },
] as const;

const toolBySlug = new Map(
  popularTools.map((tool) => [tool.href.replace('/calculadoras/', ''), tool]),
);

const storySteps = [
  {
    title: 'Você informa só o que importa',
    text: 'Cada calculadora pede os dados que realmente mudam a conta, com dicas de onde encontrá-los no holerite, no contrato ou no extrato.',
    panel: (
      <div className="grid gap-3 rounded-ads-xlarge border border-ads-border bg-white p-6 shadow-ads-soft">
        {[
          ['Salário bruto', 'R$ 5.500,00'],
          ['Dependentes', '0'],
          ['Pensão alimentícia', 'R$ 0,00'],
        ].map(([label, value]) => (
          <div className="grid gap-1" key={label}>
            <span className="text-xs font-semibold text-ads-muted">
              {label}
            </span>
            <span className="rounded-ads-medium border border-ads-border-strong bg-ads-background px-4 py-3 font-bold tabular-nums text-ads-secondary">
              {value}
            </span>
          </div>
        ))}
        <span className="mt-1 rounded-ads-medium bg-ads-primary px-4 py-3 text-center text-sm font-bold text-white">
          Calcular
        </span>
      </div>
    ),
  },
  {
    title: 'A conta aparece linha por linha',
    text: 'O resultado vem logo abaixo, em formato de holerite, extrato ou tabela mês a mês, para você enxergar de onde cada valor saiu.',
    panel: (
      <div className="overflow-hidden rounded-ads-xlarge border border-ads-border bg-white shadow-ads-soft">
        <div className="bg-ads-secondary-soft px-5 py-3 text-sm font-bold text-ads-secondary">
          Demonstrativo do salário líquido
        </div>
        <dl className="grid divide-y divide-ads-border text-sm tabular-nums">
          {[
            ['Salário bruto', 'R$ 5.500,00', 'text-ads-text'],
            ['INSS', '− R$ 571,51', 'text-ads-danger'],
            ['IRRF', '− R$ 200,29', 'text-ads-danger'],
          ].map(([label, value, tone]) => (
            <div className="flex justify-between px-5 py-3" key={label}>
              <dt className="text-ads-muted">{label}</dt>
              <dd className={`font-semibold ${tone}`}>{value}</dd>
            </div>
          ))}
          <div className="flex justify-between bg-ads-primary-soft px-5 py-4">
            <dt className="font-bold text-ads-secondary">Líquido</dt>
            <dd className="text-lg font-extrabold text-ads-secondary">
              R$ 4.728,20
            </dd>
          </div>
        </dl>
      </div>
    ),
  },
  {
    title: 'Você confere na fonte oficial',
    text: 'Abaixo do resultado, citamos pelo nome os documentos de onde saíram os números, para você verificar sem depender da nossa palavra.',
    panel: (
      <div className="grid gap-3 rounded-ads-xlarge border border-ads-border bg-white p-6 shadow-ads-soft">
        <span className="text-xs font-bold uppercase tracking-[0.14em] text-ads-primary-strong">
          Onde conferir
        </span>
        {[
          'Receita Federal — tabela do IRRF de 2026',
          'INSS — tabela de contribuição mensal de 2026',
          'Lei 15.270/2025 — isenção até R$ 5.000',
        ].map((source) => (
          <div
            className="flex items-start gap-3 rounded-ads-medium bg-ads-background px-4 py-3 text-sm font-medium text-ads-secondary"
            key={source}
          >
            <span className="mt-0.5 text-ads-primary">✓</span>
            {source}
          </div>
        ))}
      </div>
    ),
  },
] as const;

function formatDate(value: string) {
  return dateFormatter.format(new Date(`${value}T00:00:00Z`));
}

export function HomeView({
  marketIndicators = indicators,
}: Readonly<{ marketIndicators?: readonly Indicator[] }>) {
  const [leadNews, ...otherNews] = latestNews;
  const sideNews = otherNews.slice(0, 4);
  const moreNews = otherNews.slice(4, 10);
  const trendClass = {
    down: 'text-emerald-300',
    neutral: 'text-white/60',
    up: 'text-amber-300',
  } as const;

  return (
    <main>
      <section className="relative overflow-hidden bg-ads-secondary-strong text-white">
        <div className="home-grid pointer-events-none absolute inset-0" />
        <div className="home-orb pointer-events-none absolute -right-24 -top-24 size-[34rem] rounded-full bg-emerald-500/40" />
        <div
          className="home-orb pointer-events-none absolute -bottom-40 left-[-8rem] size-[30rem] rounded-full bg-teal-400/25"
          style={{ animationDelay: '-6s' }}
        />
        <Container className="relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:py-28">
          <div className="grid gap-9">
            <div className="grid gap-6">
              <span className="inline-flex w-fit items-center gap-2.5 rounded-ads-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-1.5 text-xs font-semibold text-emerald-100">
                <span className="home-live-dot size-2 rounded-full bg-emerald-300" />
                Calculadoras, notícias e guias para o seu dinheiro
              </span>
              <h1 className="font-ads-display text-[clamp(2.7rem,6.6vw,5.6rem)] font-extrabold leading-[1.02] tracking-[-0.045em] text-white">
                Entenda o que muda no{' '}
                <span className="home-gradient-text">seu bolso.</span>
              </h1>
              <p className="max-w-xl text-ads-lead leading-8 text-white/80">
                Descubra quanto sobra do seu salário, quanto você recebe de
                férias ou na rescisão e como cada notícia da economia pesa no
                seu dinheiro.
              </p>
            </div>

            <Search
              className="max-w-2xl shadow-ads-soft"
              placeholder="O que você precisa resolver hoje?"
            />

            <div className="grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-3">
              {[
                [
                  'Salário líquido',
                  'Quanto cai na conta',
                  '/calculadoras/salario-liquido',
                ],
                ['Férias', 'Com o terço e o abono', '/calculadoras/ferias'],
                [
                  '13º salário',
                  'As duas parcelas',
                  '/calculadoras/decimo-salario',
                ],
                [
                  'Rescisão',
                  'Tudo que você recebe',
                  '/calculadoras/rescisao-clt',
                ],
                [
                  'Bolsa Família',
                  'Valor da sua família',
                  '/calculadoras/bolsa-familia',
                ],
                ['MEI', 'DAS, limite e multa', '/calculadoras/das-limite-mei'],
              ].map(([label, hint, href]) => (
                <Link
                  className="group grid gap-0.5 rounded-ads-large border border-white/15 bg-white/[0.07] px-4 py-3 backdrop-blur transition hover:-translate-y-0.5 hover:border-emerald-300/60 hover:bg-white/15"
                  href={href as string}
                  key={href}
                >
                  <span className="flex items-center justify-between font-bold text-white">
                    {label}
                    <span
                      aria-hidden="true"
                      className="text-emerald-300 transition group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                  <span className="text-xs text-white/60">{hint}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="relative">
            <span
              aria-hidden="true"
              className="home-chip absolute -left-6 top-10 z-10 hidden rounded-ads-large bg-emerald-300 px-4 py-2 text-sm font-extrabold tabular-nums text-ads-secondary-strong shadow-ads-raised lg:block"
              style={{ '--tilt': '-4deg' } as CSSProperties}
            >
              + R$ 1.621 salário mínimo
            </span>
            <span
              aria-hidden="true"
              className="home-chip absolute -right-4 -top-5 z-10 hidden rounded-ads-large bg-white px-4 py-2 text-sm font-extrabold tabular-nums text-ads-secondary shadow-ads-raised lg:block"
              style={
                { '--tilt': '3deg', animationDelay: '-2s' } as CSSProperties
              }
            >
              Isento até R$ 5.000
            </span>
            <HeroCalculator />
          </div>
        </Container>
      </section>

      <section
        aria-label="Indicadores econômicos"
        className="home-marquee overflow-hidden border-b border-ads-border bg-ads-secondary py-4 text-white"
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
                    <span className="text-xs font-semibold uppercase tracking-[0.12em] text-white/60">
                      {item.label}
                    </span>
                    <strong className="text-base tabular-nums">
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

      <section
        aria-labelledby="noticias-title"
        className="bg-ads-background py-16 sm:py-24"
        id="noticias"
      >
        <Container>
          <Reveal>
            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="grid max-w-2xl gap-3">
                <span className="text-ads-eyebrow font-bold uppercase tracking-[0.16em] text-ads-primary-strong">
                  Em alta agora
                </span>
                <h2
                  className="font-ads-display text-ads-title font-extrabold tracking-tight text-ads-secondary"
                  id="noticias-title"
                >
                  O que mudou e quanto isso pesa no seu bolso
                </h2>
                <p className="leading-7 text-ads-muted">
                  Cada notícia traz os números oficiais, um exemplo em reais e a
                  calculadora para você refazer a conta com os seus dados.
                </p>
              </div>
              <Link
                className="text-sm font-semibold text-ads-primary-strong hover:underline"
                href="/noticias"
              >
                Ver todas as notícias →
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-5 lg:grid-cols-[1.15fr_1fr]">
            {leadNews ? (
              <Reveal className="h-full">
                <article className="group relative isolate flex h-full min-h-[26rem] flex-col justify-between gap-8 overflow-hidden rounded-ads-xlarge bg-ads-secondary p-7 text-white shadow-ads-soft sm:p-9">
                  <div className="home-orb pointer-events-none absolute -right-16 -top-16 -z-10 size-72 rounded-full bg-emerald-400/30" />
                  <div className="grid gap-5">
                    <span className="w-fit rounded-ads-full bg-white/10 px-3 py-1 text-xs font-semibold text-emerald-100">
                      Destaque ·{' '}
                      {categories.find((c) => c.slug === leadNews.category)
                        ?.label ?? 'Notícia'}
                    </span>
                    {leadNews.highlight ? (
                      <div className="grid gap-1">
                        <strong className="font-ads-display text-6xl font-extrabold tracking-tight text-emerald-300 sm:text-7xl">
                          {leadNews.highlight.value}
                        </strong>
                        <span className="text-sm font-medium text-white/70">
                          {leadNews.highlight.label}
                        </span>
                      </div>
                    ) : null}
                    <h3 className="max-w-xl font-ads-display text-2xl font-bold leading-tight sm:text-3xl">
                      <Link
                        className="after:absolute after:inset-0"
                        href={leadNews.href}
                      >
                        {leadNews.title}
                      </Link>
                    </h3>
                  </div>
                  <div className="relative z-10 flex flex-wrap items-center gap-4 text-sm">
                    {leadNews.calculator ? (
                      <Link
                        className="rounded-ads-full bg-emerald-300 px-5 py-2.5 font-bold text-ads-secondary-strong transition hover:bg-emerald-200"
                        href={leadNews.calculator.href}
                      >
                        {leadNews.calculator.title} →
                      </Link>
                    ) : null}
                    <span className="text-white/60">
                      {formatDate(leadNews.date)} · {leadNews.readingTime}
                    </span>
                  </div>
                </article>
              </Reveal>
            ) : null}

            <div className="grid gap-5 sm:grid-cols-2">
              {sideNews.map((news, index) => (
                <Reveal className="h-full" delay={index * 80} key={news.href}>
                  <article className="group relative flex h-full flex-col justify-between gap-5 overflow-hidden rounded-ads-xlarge border border-ads-border bg-white transition duration-300 hover:-translate-y-1 hover:border-ads-primary hover:shadow-ads-soft">
                    {news.highlight ? (
                      <NewsCover
                        category={news.category}
                        className="aspect-[1200/630] w-full"
                        label={news.highlight.label}
                        value={news.highlight.value}
                      />
                    ) : null}
                    <div className="grid gap-3 px-6">
                      <h3 className="font-ads-display text-lg font-bold leading-snug text-ads-secondary">
                        <Link
                          className="after:absolute after:inset-0"
                          href={news.href}
                        >
                          {news.title}
                        </Link>
                      </h3>
                    </div>
                    <div className="relative z-10 grid gap-3 px-6 pb-6">
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
                  </article>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal>
            <ul className="mt-5 grid gap-px overflow-hidden rounded-ads-xlarge border border-ads-border bg-ads-border sm:grid-cols-2 lg:grid-cols-3">
              {moreNews.map((news) => (
                <li className="bg-white" key={news.href}>
                  <Link
                    className="group flex h-full items-start gap-4 p-5 transition hover:bg-ads-primary-soft"
                    href={news.href}
                  >
                    <span className="mt-0.5 text-lg font-bold text-ads-primary transition group-hover:translate-x-1">
                      →
                    </span>
                    <span className="text-sm font-semibold leading-6 text-ads-secondary">
                      {news.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <Container>
        <AdSlot
          format="horizontal"
          label="Publicidade entre notícias e ferramentas"
          placementId="home-after-news"
          size="banner"
        />
      </Container>

      <section
        aria-labelledby="como-funciona-title"
        className="bg-white py-16 sm:py-24"
        id="como-funciona"
      >
        <Container>
          <Reveal>
            <div className="mb-12 grid max-w-2xl gap-3">
              <span className="text-ads-eyebrow font-bold uppercase tracking-[0.16em] text-ads-primary-strong">
                Como o PortalFina trabalha
              </span>
              <h2
                className="font-ads-display text-ads-title font-extrabold tracking-tight text-ads-secondary"
                id="como-funciona-title"
              >
                Uma conta que você consegue conferir
              </h2>
            </div>
          </Reveal>
          <ScrollStory steps={storySteps} />
        </Container>
      </section>

      <section
        aria-labelledby="ferramentas-title"
        className="bg-ads-background py-16 sm:py-24"
        id="ferramentas"
      >
        <Container>
          <Reveal>
            <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div className="grid max-w-2xl gap-3">
                <span className="text-ads-eyebrow font-bold uppercase tracking-[0.16em] text-ads-primary-strong">
                  Calculadoras
                </span>
                <h2
                  className="font-ads-display text-ads-title font-extrabold tracking-tight text-ads-secondary"
                  id="ferramentas-title"
                >
                  Uma calculadora para cada momento da vida
                </h2>
              </div>
              <Link
                className="text-sm font-semibold text-ads-primary-strong hover:underline"
                href="/calculadoras"
              >
                Ver todas as calculadoras →
              </Link>
            </div>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {toolGroups.map((group, index) => (
              <Reveal
                className="h-full"
                delay={(index % 3) * 90}
                key={group.title}
              >
                <div className="grid h-full content-start gap-5 rounded-ads-xlarge border border-ads-border bg-white p-6 transition duration-300 hover:border-ads-primary hover:shadow-ads-soft sm:p-7">
                  <div className="flex items-start gap-4">
                    <span className="grid size-12 shrink-0 place-items-center rounded-ads-large bg-ads-primary-soft text-xl font-bold text-ads-primary-strong">
                      {group.icon}
                    </span>
                    <div className="grid gap-1">
                      <h3 className="font-ads-display text-xl font-bold text-ads-secondary">
                        {group.title}
                      </h3>
                      <p className="text-sm leading-6 text-ads-muted">
                        {group.description}
                      </p>
                    </div>
                  </div>
                  <ul className="grid gap-1 border-t border-ads-border pt-4">
                    {group.slugs.map((slug) => {
                      const tool = toolBySlug.get(slug);

                      return tool ? (
                        <li key={slug}>
                          <Link
                            className="group flex items-center justify-between gap-3 rounded-ads-medium px-3 py-2.5 text-sm font-semibold text-ads-secondary transition hover:bg-ads-primary-soft hover:text-ads-primary-strong"
                            href={tool.href}
                          >
                            {tool.title.replace(
                              /^(Calculadora de |Calculadora |Simulador de |Comparador )/,
                              '',
                            )}
                            <span
                              aria-hidden="true"
                              className="text-ads-primary transition group-hover:translate-x-1"
                            >
                              →
                            </span>
                          </Link>
                        </li>
                      ) : null;
                    })}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section
        aria-labelledby="impostometro-title"
        className="bg-ads-surface py-14 sm:py-20"
      >
        <Container>
          <Reveal>
            <div className="grid items-center gap-8 lg:grid-cols-[1.2fr_1fr]">
              <div className="grid gap-3">
                <span className="text-ads-eyebrow font-bold uppercase tracking-[0.16em] text-ads-primary-strong">
                  Impostômetro
                </span>
                <h2
                  className="font-ads-display text-ads-title font-extrabold tracking-tight text-ads-secondary"
                  id="impostometro-title"
                >
                  Quanto a União já arrecadou em 2026
                </h2>
                <p className="leading-7 text-ads-muted">
                  Estimativa em tempo real a partir dos dados oficiais da
                  Receita Federal. Veja o método e descubra quanto disso passa
                  pelo seu salário.
                </p>
                <Link
                  className="text-sm font-semibold text-ads-primary-strong hover:underline"
                  href="/impostometro"
                >
                  Entender a conta →
                </Link>
              </div>
              <p className="rounded-2xl border border-ads-border bg-white p-6 text-3xl font-extrabold tabular-nums text-ads-secondary shadow-sm sm:text-4xl">
                <TaxCounter />
              </p>
            </div>
          </Reveal>
        </Container>
      </section>

      <section
        aria-labelledby="confianca-title"
        className="relative overflow-hidden bg-ads-secondary-strong py-16 text-white sm:py-24"
      >
        <div className="home-orb pointer-events-none absolute -left-24 top-0 size-96 rounded-full bg-emerald-500/20" />
        <Container className="relative">
          <Reveal>
            <div className="mb-12 grid max-w-2xl gap-3">
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
          </Reveal>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: 'Fontes oficiais',
                text: 'Receita Federal, INSS, Banco Central e ministérios, citados ao final de cada página.',
              },
              {
                title: 'Conta à vista',
                text: 'Cada resultado mostra as faixas, os descontos e o passo a passo, como num holerite.',
              },
              {
                title: 'Sem cadastro',
                text: 'Os valores que você digita ficam no seu navegador e não são enviados a ninguém.',
              },
              {
                title: 'Correção com data',
                text: 'Achou um erro? Avise pelo contato e a correção é publicada com a data.',
              },
            ].map((item, index) => (
              <Reveal className="h-full" delay={index * 90} key={item.title}>
                <div className="grid h-full content-start gap-3 rounded-ads-xlarge border border-white/10 bg-white/5 p-6 backdrop-blur">
                  <strong className="font-ads-display text-2xl font-extrabold tracking-tight text-emerald-300">
                    {item.title}
                  </strong>
                  <p className="text-sm leading-6 text-white/70">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal>
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
          </Reveal>
        </Container>
      </section>

      <section
        aria-labelledby="guias-title"
        className="bg-white py-16 sm:py-24"
        id="guias"
      >
        <Container>
          <Reveal>
            <div className="mb-10 grid max-w-2xl gap-3">
              <span className="text-ads-eyebrow font-bold uppercase tracking-[0.16em] text-ads-primary-strong">
                Aprenda no seu ritmo
              </span>
              <h2
                className="font-ads-display text-ads-title font-extrabold tracking-tight text-ads-secondary"
                id="guias-title"
              >
                Guias para consultar quando precisar
              </h2>
              <p className="leading-7 text-ads-muted">
                Passo a passo para resolver o dia a dia: consultar extratos,
                tirar documentos, usar os apps do governo e evitar golpes.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-5 md:grid-cols-2">
            {featuredGuides.slice(0, 6).map((guide, index) => (
              <Reveal className="h-full" delay={index * 90} key={guide.href}>
                <article className="group relative grid h-full content-between gap-6 rounded-ads-xlarge border border-ads-border bg-ads-background p-7 transition duration-300 hover:-translate-y-1 hover:border-ads-primary hover:shadow-ads-soft">
                  <div className="grid gap-3">
                    <span className="w-fit rounded-ads-full bg-ads-primary-soft px-3 py-1 text-xs font-bold text-ads-primary-strong">
                      Guia · {guide.readingTime}
                    </span>
                    <h3 className="font-ads-display text-2xl font-bold leading-tight text-ads-secondary">
                      <Link
                        className="after:absolute after:inset-0"
                        href={guide.href}
                      >
                        {guide.title}
                      </Link>
                    </h3>
                    <p className="leading-7 text-ads-muted">
                      {guide.description}
                    </p>
                  </div>
                  <span className="text-sm font-bold text-ads-primary-strong">
                    Ler o guia →
                  </span>
                </article>
              </Reveal>
            ))}
          </div>
          <Reveal>
            <Link
              className="mt-8 inline-block text-sm font-bold text-ads-primary-strong hover:underline"
              href="/guias"
            >
              Ver todos os guias →
            </Link>
          </Reveal>
        </Container>
      </section>

      <section
        aria-labelledby="categorias-title"
        className="border-t border-ads-border bg-ads-background py-16 sm:py-20"
        id="categorias"
      >
        <Container>
          <Reveal>
            <h2
              className="mb-8 font-ads-display text-2xl font-extrabold tracking-tight text-ads-secondary"
              id="categorias-title"
            >
              Explore por tema
            </h2>
            <div className="flex flex-wrap gap-3">
              {categories
                .filter((category) => category.slug !== 'politica')
                .map((category) => (
                  <Link
                    className="group flex items-center gap-3 rounded-ads-full border border-ads-border bg-white py-2.5 pl-3 pr-5 text-sm font-semibold text-ads-secondary transition hover:border-ads-primary hover:bg-ads-primary-soft"
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
          </Reveal>
        </Container>
      </section>
    </main>
  );
}

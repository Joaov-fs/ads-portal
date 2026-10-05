import Link from 'next/link';

import { AdSlot } from '@/components/advertising/ad-slot';
import {
  CalculatorShowcaseCard,
  CompactStoryCard,
  HeroCalculator,
  HeroDataLayer,
  LeadStoryCard,
  MomentShortcuts,
  Reveal,
  ScrollStory,
  SecondaryStoryCard,
  SectionHeading,
  TaxCounter,
  TopicStories,
  calculatorShowcase,
} from '@/components/home';
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
          'Receita Federal: tabela do IRRF de 2026',
          'INSS: tabela de contribuição mensal de 2026',
          'Lei 15.270/2025: isenção até R$ 5.000',
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

export function HomeView({
  marketIndicators = indicators,
}: Readonly<{ marketIndicators?: readonly Indicator[] }>) {
  const [leadNews, ...otherNews] = latestNews;
  const secondaryNews = otherNews.slice(0, 2);
  const compactNews = otherNews.slice(2, 5);
  const restNews = otherNews.slice(5);
  const economyNews = restNews
    .filter(
      (news) => news.category === 'economia' || news.category === 'financas',
    )
    .slice(0, 3);
  const benefitsNews = restNews
    .filter(
      (news) => news.category === 'beneficios' || news.category === 'trabalho',
    )
    .slice(0, 3);
  const guides = featuredGuides.slice(0, 5);
  const [leadGuide, ...otherGuides] = guides;
  const newsHref = (slug: string) =>
    latestNews.find((news) => news.href.endsWith(`/${slug}`))?.href;
  const shortcuts = [
    { label: 'Salário líquido', href: '/calculadoras/salario-liquido' },
    {
      label: 'Pagamento do INSS',
      href: newsHref(
        'inss-outubro-2026-calendario-de-pagamento-26-de-outubro-a-9-de-novembro',
      ),
    },
    {
      label: 'Salário mínimo 2027',
      href: newsHref(
        'salario-minimo-2027-orcamento-preve-r-1-741-veja-o-que-muda',
      ),
    },
    {
      label: 'Saque-aniversário FGTS',
      href: newsHref(
        'saque-aniversario-fgts-outubro-2026-ate-31-de-dezembro-quanto-sai',
      ),
    },
    {
      label: 'IR zero até R$ 5 mil',
      href: newsHref(
        'imposto-de-renda-zero-ate-r-5-mil-quanto-voce-paga-no-contracheque',
      ),
    },
    {
      label: 'Bolsa Família',
      href: newsHref('bolsa-familia-691-outubro-2026-calendario'),
    },
    {
      label: '13º salário',
      href: newsHref('13o-salario-2026-datas-e-quanto-voce-recebe'),
    },
  ].flatMap((item) =>
    item.href ? [{ label: item.label, href: item.href }] : [],
  );
  const trendClass = {
    down: 'text-emerald-300',
    neutral: 'text-white/60',
    up: 'text-amber-300',
  } as const;

  return (
    <main>
      <section className="relative overflow-hidden bg-ads-secondary-strong text-white">
        <div className="home-grid pointer-events-none absolute inset-0" />
        <HeroDataLayer />
        <div className="home-orb pointer-events-none absolute -right-24 -top-24 size-[34rem] rounded-full bg-emerald-500/40" />
        <div
          className="home-orb pointer-events-none absolute -bottom-40 left-[-8rem] size-[30rem] rounded-full bg-teal-400/25"
          style={{ animationDelay: '-6s' }}
        />
        <Container className="relative grid items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14 lg:py-28">
          <div className="grid gap-9">
            <div className="grid gap-6">
              <span className="hero-stagger-1 inline-flex w-fit items-center gap-2.5 rounded-ads-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-1.5 text-xs font-semibold text-emerald-100">
                <span className="home-live-dot size-2 rounded-full bg-emerald-300" />
                Calculadoras, notícias e guias para o seu dinheiro
              </span>
              <h1 className="hero-stagger-2 font-ads-display text-[clamp(2.7rem,6.6vw,5.6rem)] font-extrabold leading-[1.02] tracking-[-0.045em] text-white">
                Entenda o que muda no{' '}
                <span className="home-gradient-text">seu bolso.</span>
              </h1>
              <p className="hero-stagger-3 max-w-xl text-ads-lead leading-8 text-white/80">
                Descubra quanto sobra do seu salário, quanto você recebe de
                férias ou na rescisão e como cada notícia da economia pesa no
                seu dinheiro.
              </p>
            </div>

            <div className="hero-stagger-4">
              <Search
                className="max-w-2xl shadow-ads-soft"
                placeholder="O que você precisa resolver hoje?"
              />
            </div>

            <div className="hero-stagger-5 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-3">
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

      <MomentShortcuts items={shortcuts} />

      <section
        aria-labelledby="noticias-title"
        className="bg-ads-background py-16 sm:py-24"
        id="noticias"
      >
        <Container>
          <SectionHeading
            action={
              <Link
                className="text-sm font-semibold text-ads-primary-strong hover:underline"
                href="/noticias"
              >
                Ver todas as notícias →
              </Link>
            }
            eyebrow="Agora no PortalFina"
            id="noticias-title"
            intro="Cada notícia traz os números oficiais, um exemplo em reais e a calculadora para você refazer a conta com os seus dados."
            title="O que mudou e quanto isso pesa no seu bolso"
          />

          <div className="grid gap-5 lg:grid-cols-3">
            {leadNews ? (
              <Reveal
                className="h-full lg:col-span-2 lg:row-span-2"
                variant="fade-left"
              >
                <LeadStoryCard
                  categoryLabel={
                    categories.find((c) => c.slug === leadNews.category)
                      ?.label ?? 'Notícia'
                  }
                  news={leadNews}
                />
              </Reveal>
            ) : null}
            {secondaryNews.map((news, index) => (
              <Reveal
                className="h-full"
                delay={(index + 1) * 80}
                key={news.href}
                variant="fade-right"
              >
                <SecondaryStoryCard news={news} />
              </Reveal>
            ))}
          </div>

          <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {compactNews.map((news, index) => (
              <Reveal className="h-full" delay={index * 80} key={news.href}>
                <CompactStoryCard news={news} />
              </Reveal>
            ))}
          </div>
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
        aria-labelledby="calcule-agora-title"
        className="relative isolate mt-16 overflow-hidden bg-ads-secondary-strong py-16 text-white sm:py-24"
        id="calcule-agora"
      >
        <div className="home-grid pointer-events-none absolute inset-0 -z-10 opacity-70" />
        <Container>
          <SectionHeading
            action={
              <Link
                className="text-sm font-semibold text-emerald-200 hover:underline"
                href="/calculadoras"
              >
                Ver as {popularTools.length} calculadoras →
              </Link>
            }
            eyebrow="Ferramentas"
            id="calcule-agora-title"
            intro="Escolha a conta, preencha só o que muda o resultado e veja o demonstrativo linha por linha."
            title="Calcule agora"
            tone="dark"
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {calculatorShowcase.map((item, index) => (
              <CalculatorShowcaseCard
                index={index}
                item={item}
                key={item.slug}
              />
            ))}
          </div>
        </Container>
      </section>

      {economyNews.length > 0 ? (
        <section
          aria-labelledby="economia-title"
          className="bg-white py-16 sm:py-24"
          id="economia"
        >
          <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
            <div className="grid content-start gap-4 lg:sticky lg:top-28 lg:self-start">
              <Reveal>
                <span className="inline-flex w-fit items-center gap-2 text-ads-eyebrow font-bold uppercase tracking-[0.16em] text-ads-primary-strong">
                  <span
                    aria-hidden="true"
                    className="h-px w-6 bg-ads-primary"
                  />
                  Economia
                </span>
                <h2
                  className="mt-3 font-ads-display text-ads-title font-extrabold tracking-tight text-ads-secondary"
                  id="economia-title"
                >
                  Economia que afeta você
                </h2>
                <p className="mt-3 leading-7 text-ads-muted">
                  Juros, inflação e decisões do governo traduzidos no que muda
                  na parcela, no rendimento e no salário.
                </p>
              </Reveal>
            </div>
            <TopicStories
              items={economyNews}
              moreHref="/categorias/economia"
              moreLabel="Mais sobre economia"
            />
          </Container>
        </section>
      ) : null}

      <section
        aria-labelledby="impostometro-title"
        className="relative isolate overflow-hidden bg-ads-secondary-strong py-16 text-white sm:py-24"
        id="impostometro"
      >
        <div className="home-grid pointer-events-none absolute inset-0 -z-10 opacity-50" />
        <div className="home-orb pointer-events-none absolute -right-32 top-1/2 -z-10 size-[30rem] -translate-y-1/2 rounded-full bg-emerald-500/20" />
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <Reveal variant="fade-left">
              <div className="grid gap-4">
                <span className="inline-flex w-fit items-center gap-2 text-ads-eyebrow font-bold uppercase tracking-[0.16em] text-emerald-200">
                  <span
                    aria-hidden="true"
                    className="h-px w-6 bg-emerald-200/60"
                  />
                  Impostômetro
                </span>
                <h2
                  className="font-ads-display text-ads-title font-extrabold tracking-tight text-white"
                  id="impostometro-title"
                >
                  Quanto a União já arrecadou em 2026
                </h2>
                <p className="max-w-lg leading-7 text-white/65">
                  Estimativa em tempo real a partir dos dados oficiais da
                  Receita Federal. Veja o método e descubra quanto disso passa
                  pelo seu salário.
                </p>
                <Link
                  className="mt-2 w-fit rounded-ads-full border border-emerald-300/30 bg-emerald-300/10 px-5 py-2.5 text-sm font-bold text-emerald-200 transition hover:bg-emerald-300/20"
                  href="/impostometro"
                >
                  Entender a conta →
                </Link>
              </div>
            </Reveal>
            <Reveal variant="scale">
              <div className="relative flex items-center justify-center py-6">
                {/* Anéis decorativos pulsantes */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="tax-ring absolute size-56 rounded-full border border-emerald-300/20 sm:size-72" />
                  <div
                    className="tax-ring absolute size-56 rounded-full border border-emerald-300/15 sm:size-72"
                    style={{ animationDelay: '0.8s' }}
                  />
                  <div
                    className="tax-ring absolute size-56 rounded-full border border-emerald-300/10 sm:size-72"
                    style={{ animationDelay: '1.6s' }}
                  />
                </div>

                {/* Contador central */}
                <div className="relative grid place-items-center gap-3 rounded-2xl border border-emerald-300/15 bg-[#0a1614]/80 px-8 py-8 backdrop-blur sm:px-12 sm:py-10">
                  {/* Linha de escaneamento */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl"
                  >
                    <div className="tax-scan absolute inset-x-0 h-px bg-gradient-to-r from-transparent via-emerald-300/40 to-transparent" />
                  </div>
                  <span className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-emerald-300/50">
                    Arrecadação federal total
                  </span>
                  <p className="tax-glow font-ads-display text-4xl font-extrabold tabular-nums tracking-tight text-emerald-300 sm:text-5xl lg:text-[3.4rem]">
                    <TaxCounter />
                  </p>
                  <span className="flex items-center gap-2 text-xs text-emerald-300/40">
                    <span className="home-live-dot size-1.5 rounded-full bg-emerald-400" />
                    Atualizando em tempo real
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {benefitsNews.length > 0 ? (
        <section
          aria-labelledby="beneficios-title"
          className="bg-ads-background py-16 sm:py-24"
          id="beneficios"
        >
          <Container className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
            <div className="grid content-start gap-4 lg:sticky lg:top-28 lg:self-start">
              <Reveal>
                <span className="inline-flex w-fit items-center gap-2 text-ads-eyebrow font-bold uppercase tracking-[0.16em] text-ads-primary-strong">
                  <span
                    aria-hidden="true"
                    className="h-px w-6 bg-ads-primary"
                  />
                  Direitos e programas
                </span>
                <h2
                  className="mt-3 font-ads-display text-ads-title font-extrabold tracking-tight text-ads-secondary"
                  id="beneficios-title"
                >
                  Benefícios e trabalho
                </h2>
                <p className="mt-3 leading-7 text-ads-muted">
                  Datas, valores e regras de INSS, FGTS, Bolsa Família e dos
                  direitos de quem trabalha.
                </p>
              </Reveal>
            </div>
            <TopicStories
              items={benefitsNews}
              moreHref="/categorias/beneficios"
              moreLabel="Mais sobre benefícios"
            />
          </Container>
        </section>
      ) : null}

      <Container>
        <AdSlot
          format="horizontal"
          label="Publicidade entre assuntos e guias"
          placementId="home-after-topics"
          size="banner"
        />
      </Container>

      <section
        aria-labelledby="guias-title"
        className="bg-white py-16 sm:py-24"
        id="guias"
      >
        <Container>
          <SectionHeading
            action={
              <Link
                className="text-sm font-bold text-ads-primary-strong hover:underline"
                href="/guias"
              >
                Ver todos os guias →
              </Link>
            }
            eyebrow="Seu dinheiro"
            id="guias-title"
            intro="Passo a passo para resolver o dia a dia: consultar extratos, tirar documentos, usar os apps do governo e evitar golpes."
            title="Guias para consultar quando precisar"
          />
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
              <Reveal
                className="h-full"
                delay={index * 90}
                key={item.title}
                variant="zoom-in"
              >
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

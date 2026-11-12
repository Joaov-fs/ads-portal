import Link from 'next/link';
import Image from 'next/image';

import { AdSlot } from '@/components/advertising/ad-slot';
import { FeatureCard } from '@/components/cards';
import { Container } from '@/components/layout/container';
import { Grid } from '@/components/layout/grid';
import { Section } from '@/components/layout/section';
import { Breadcrumb } from '@/components/navigation/breadcrumb';
import { Card } from '@/components/ui/card';
import {
  contentCategoryLabels,
  contentKindConfig,
  type ContentPageModel,
} from '@/content';

import { CalculatorPanel } from './calculator-panel';
import { JsonLdScript } from './json-ld';
import { NewsCover } from './news-cover';

const dateFormatter = new Intl.DateTimeFormat('pt-BR', {
  dateStyle: 'long',
  timeZone: 'UTC',
});

function formatDate(value: string) {
  return dateFormatter.format(new Date(`${value}T00:00:00Z`));
}

function ArticleFigure({
  image,
  priority = false,
}: Readonly<{
  image: NonNullable<ContentPageModel['document']['coverImage']>;
  priority?: boolean;
}>) {
  return (
    <figure className="grid max-w-4xl gap-2">
      <Image
        alt={image.alt}
        className="aspect-[1200/630] w-full rounded-ads-xlarge object-cover shadow-ads-soft"
        height={630}
        priority={priority}
        sizes="(min-width: 1024px) 56rem, 100vw"
        src={image.src}
        width={1200}
      />
      {image.caption || image.credit ? (
        <figcaption className="text-xs leading-5 text-ads-muted">
          {image.caption}
          {image.caption && image.credit ? ' ' : null}
          {image.credit ? (
            <span className="font-semibold">{image.credit}</span>
          ) : null}
        </figcaption>
      ) : null}
    </figure>
  );
}

function sectionId(heading: string) {
  return heading
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

function QuickAnswer({
  quickAnswer,
}: Readonly<{
  quickAnswer: NonNullable<ContentPageModel['document']['quickAnswer']>;
}>) {
  return (
    <section
      aria-labelledby="quick-answer-title"
      className="border-b border-ads-border bg-ads-primary-soft py-7 sm:py-9"
      id="resposta-rapida"
    >
      <Container>
        <div className="grid max-w-4xl gap-4">
          <span className="text-xs font-bold uppercase tracking-[0.14em] text-ads-primary-strong">
            Resposta rápida
          </span>
          <h2
            className="font-ads-display text-2xl font-bold tracking-tight text-ads-secondary sm:text-3xl"
            id="quick-answer-title"
          >
            {quickAnswer.question}
          </h2>
          <p className="text-lg leading-8 text-ads-text">
            {quickAnswer.answer}
          </p>
          {quickAnswer.items && quickAnswer.items.length > 0 ? (
            <ul className="grid gap-2">
              {quickAnswer.items.map((item) => (
                <li className="flex gap-3 leading-7 text-ads-text" key={item}>
                  <span
                    aria-hidden="true"
                    className="font-bold text-ads-primary"
                  >
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          ) : null}
          {quickAnswer.note ? (
            <p className="rounded-ads-large border border-ads-border bg-ads-background p-4 text-sm leading-6 text-ads-text">
              {quickAnswer.note}
            </p>
          ) : null}
          {quickAnswer.actions && quickAnswer.actions.length > 0 ? (
            <div className="flex flex-wrap gap-3 pt-1">
              {quickAnswer.actions.map((action, index) => (
                <Link
                  className={
                    index === 0
                      ? 'rounded-ads-full bg-ads-primary px-5 py-2.5 text-sm font-bold text-white transition hover:bg-ads-primary-strong'
                      : 'rounded-ads-full border border-ads-primary px-5 py-2.5 text-sm font-bold text-ads-primary-strong transition hover:bg-ads-background'
                  }
                  href={action.href}
                  key={action.href}
                >
                  {action.label} →
                </Link>
              ))}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

type ContentPageTemplateProps = Readonly<{
  model: ContentPageModel;
}>;

export function ContentPageTemplate({ model }: ContentPageTemplateProps) {
  const { author, document } = model;
  const kindConfig = contentKindConfig[document.kind];
  const hasMultipleSections = document.sections.length >= 2;
  const hasLongFormContent = document.sections.length >= 4;

  return (
    <main data-editoria={document.category}>
      <JsonLdScript data={model.mainSchema} />
      <JsonLdScript data={model.breadcrumbSchema} />
      {model.faqSchema ? <JsonLdScript data={model.faqSchema} /> : null}

      <article>
        <header className="border-b border-ads-border bg-ads-surface py-6 sm:py-18">
          <Container>
            <Breadcrumb items={model.breadcrumbs} />
            <div className="mt-4 grid max-w-4xl gap-3 sm:mt-9 sm:gap-5">
              <div className="flex flex-wrap items-center gap-3 text-sm">
                <span className="rounded-ads-full bg-ads-primary-soft px-3 py-1 font-semibold text-ads-primary-strong">
                  {kindConfig.singularLabel}
                </span>
                <span className="text-ads-muted">
                  {contentCategoryLabels[document.category]}
                </span>
              </div>
              <h1 className="font-ads-display text-[2rem] leading-[1.05] font-bold tracking-[-0.04em] text-ads-secondary sm:text-ads-display sm:leading-[0.98]">
                {document.title}
              </h1>
              <p
                className={
                  document.quickAnswer
                    ? 'max-w-3xl text-base leading-7 text-ads-muted max-sm:hidden sm:text-ads-lead sm:leading-8'
                    : 'max-w-3xl text-base leading-7 text-ads-muted sm:text-ads-lead sm:leading-8'
                }
              >
                {document.description}
              </p>
              <div className="flex flex-wrap gap-x-5 gap-y-1 border-t border-ads-border pt-3 text-sm text-ads-muted sm:gap-y-2 sm:pt-5">
                <span>Por {author.name}</span>
                <span>{model.readingMinutes} min de leitura</span>
                <span>
                  {document.kind === 'calculator'
                    ? 'Revisado em'
                    : 'Atualizado em'}{' '}
                  <time dateTime={document.updatedAt}>
                    {formatDate(document.updatedAt)}
                  </time>
                </span>
              </div>
            </div>
          </Container>
        </header>

        {document.quickAnswer ? (
          <QuickAnswer quickAnswer={document.quickAnswer} />
        ) : null}

        {document.kind === 'calculator' ? (
          <section className="border-b border-ads-border bg-ads-background py-6 sm:py-8">
            <Container>
              <div className="grid max-w-ads-copy gap-6">
                <CalculatorPanel document={document} />
              </div>
            </Container>
          </section>
        ) : null}

        {!document.coverImage &&
        document.kind === 'news' &&
        document.highlights?.[0] ? (
          <section className="border-b border-ads-border bg-ads-background py-8">
            <Container>
              <NewsCover
                category={document.category}
                className="aspect-[1200/630] w-full max-w-4xl rounded-ads-xlarge shadow-ads-soft"
                label={document.highlights[0].label}
                value={document.highlights[0].value}
              />
            </Container>
          </section>
        ) : null}

        {document.coverImage ? (
          <section className="border-b border-ads-border bg-ads-background py-8">
            <Container>
              <ArticleFigure image={document.coverImage} priority />
            </Container>
          </section>
        ) : null}

        {document.kind === 'news' ? (
          <section
            className="border-b border-ads-border bg-ads-background py-8"
            aria-labelledby="news-summary-title"
          >
            <Container>
              <div className="mb-5 flex items-center gap-3">
                <span className="grid size-8 place-items-center rounded-ads-full bg-ads-primary text-sm font-bold text-white">
                  ✓
                </span>
                <h2
                  className="text-xl font-bold text-ads-secondary"
                  id="news-summary-title"
                >
                  A notícia em 1 minuto
                </h2>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {[
                  ['O que aconteceu?', document.description],
                  [
                    'Como isso impacta você?',
                    document.sections[1]?.paragraphs[0] ??
                      document.sections[0]?.paragraphs[0] ??
                      document.description,
                  ],
                ].map(([title, text]) => (
                  <Card className="grid gap-2 p-5" key={title}>
                    <h3 className="font-bold text-ads-secondary">{title}</h3>
                    <p className="text-sm leading-6 text-ads-muted">{text}</p>
                  </Card>
                ))}
              </div>
            </Container>
          </section>
        ) : null}

        {document.highlights && document.highlights.length > 0 ? (
          <section
            className="border-b border-ads-border bg-ads-surface py-8"
            aria-labelledby="highlights-title"
          >
            <Container>
              <h2
                className="mb-5 text-xs font-bold uppercase tracking-[0.14em] text-ads-primary-strong"
                id="highlights-title"
              >
                Em números
              </h2>
              <dl className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {document.highlights.map((item) => (
                  <div
                    className="rounded-ads-large border border-ads-border bg-ads-background p-5"
                    key={item.label}
                  >
                    <dd className="font-ads-display text-3xl font-bold tracking-tight text-ads-secondary">
                      {item.value}
                    </dd>
                    <dt className="mt-1 text-sm font-semibold text-ads-text">
                      {item.label}
                    </dt>
                    {item.note ? (
                      <p className="mt-1 text-xs leading-5 text-ads-muted">
                        {item.note}
                      </p>
                    ) : null}
                  </div>
                ))}
              </dl>
            </Container>
          </section>
        ) : null}

        {model.featured.length > 0 ? (
          <section
            className="border-b border-ads-border bg-ads-primary-soft py-7"
            aria-labelledby="featured-calculators-title"
          >
            <Container className="flex flex-wrap items-center gap-4">
              <h2
                className="text-lg font-bold text-ads-secondary"
                id="featured-calculators-title"
              >
                Faça a conta com os seus dados
              </h2>
              <div className="flex flex-wrap gap-3">
                {model.featured.map((item) => (
                  <Link
                    className="rounded-ads-full bg-ads-primary px-5 py-2.5 text-sm font-bold text-white transition hover:bg-ads-primary-strong"
                    href={item.href}
                    key={item.slug}
                  >
                    {item.title} →
                  </Link>
                ))}
              </div>
            </Container>
          </section>
        ) : null}

        <Section>
          <Container className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_18rem]">
            <div className="grid max-w-ads-copy gap-10">
              {document.kind === 'calculator' ? (
                <AdSlot
                  format="horizontal"
                  label="Publicidade após a calculadora"
                  placementId={`calculator-${document.slug}-after-tool`}
                  size="banner"
                />
              ) : null}

              {document.sections.map((section, index) => (
                <div className="grid gap-10" key={section.heading}>
                  <section
                    className="scroll-mt-8 grid gap-4"
                    id={sectionId(section.heading)}
                  >
                    <h2 className="font-ads-display text-2xl font-bold tracking-tight text-ads-secondary sm:text-3xl">
                      {section.heading}
                    </h2>
                    {section.image ? (
                      <ArticleFigure image={section.image} />
                    ) : null}
                    {section.paragraphs.map((paragraph) => (
                      <p
                        className="text-base leading-8 text-ads-text"
                        key={paragraph}
                      >
                        {paragraph}
                      </p>
                    ))}
                    {section.table ? (
                      <div className="overflow-x-auto rounded-ads-large border border-ads-border">
                        <table className="w-full min-w-96 text-left text-sm">
                          {section.table.caption ? (
                            <caption className="bg-ads-secondary-soft px-4 py-3 text-left font-bold text-ads-secondary">
                              {section.table.caption}
                            </caption>
                          ) : null}
                          <thead className="bg-ads-secondary-soft text-ads-secondary">
                            <tr>
                              {section.table.columns.map((column) => (
                                <th
                                  className="px-4 py-3 font-bold"
                                  key={column}
                                  scope="col"
                                >
                                  {column}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {section.table.rows.map((row) => (
                              <tr
                                className="border-t border-ads-border"
                                key={row.join('|')}
                              >
                                {row.map((cell, cellIndex) => (
                                  <td
                                    className="px-4 py-3 leading-6 text-ads-text"
                                    key={`${cellIndex}-${cell}`}
                                  >
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : null}
                  </section>
                  {document.kind !== 'calculator' &&
                  index === 0 &&
                  hasMultipleSections ? (
                    <AdSlot
                      format="horizontal"
                      label="Publicidade após a introdução"
                      placementId={`${document.kind}-${document.slug}-after-intro`}
                      size="banner"
                    />
                  ) : null}
                  {index === 2 && hasLongFormContent ? (
                    <AdSlot
                      format="horizontal"
                      label="Publicidade entre seções do conteúdo"
                      placementId={`${document.kind}-${document.slug}-mid-content`}
                      size="banner"
                    />
                  ) : null}
                </div>
              ))}
            </div>

            <aside className="grid gap-5 lg:sticky lg:top-6">
              <Card className="grid gap-3 p-5">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-ads-primary-strong">
                  Nesta página
                </span>
                <nav aria-label="Seções desta página">
                  <ul className="grid gap-2 text-sm text-ads-muted">
                    {document.kind === 'calculator' ? (
                      <li>
                        <Link
                          className="hover:text-ads-primary-strong"
                          href="#simulador"
                        >
                          Fazer a simulação
                        </Link>
                      </li>
                    ) : null}
                    {document.sections.map((section) => (
                      <li key={section.heading}>
                        <Link
                          className="hover:text-ads-primary-strong"
                          href={`#${sectionId(section.heading)}`}
                        >
                          {section.heading}
                        </Link>
                      </li>
                    ))}
                    {document.faq.length > 0 ? (
                      <li>
                        <Link
                          className="hover:text-ads-primary-strong"
                          href="#faq-title"
                        >
                          Perguntas frequentes
                        </Link>
                      </li>
                    ) : null}
                    <li>
                      <Link
                        className="hover:text-ads-primary-strong"
                        href="#sources-title"
                      >
                        Fontes e referências
                      </Link>
                    </li>
                  </ul>
                </nav>
              </Card>
              <Card className="grid gap-4 p-5">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-ads-primary-strong">
                  Responsabilidade editorial
                </span>
                <div className="grid gap-1">
                  <strong className="text-ads-secondary">{author.name}</strong>
                  <span className="text-sm text-ads-muted">{author.role}</span>
                </div>
                <p className="text-sm leading-6 text-ads-muted">{author.bio}</p>
                <ul className="grid gap-2 border-t border-ads-border pt-4 text-xs text-ads-muted">
                  <li className="flex items-center gap-2">
                    <span className="text-ads-primary">✓</span> Baseado em
                    fontes oficiais
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-ads-primary">✓</span> Metodologia
                    transparente
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-ads-primary">✓</span> Fontes
                    verificáveis
                  </li>
                </ul>
              </Card>
            </aside>
          </Container>
        </Section>

        {document.faq.length > 0 ? (
          <>
            {hasLongFormContent ? (
              <Container size="copy">
                <AdSlot
                  format="horizontal"
                  label="Publicidade antes das perguntas frequentes"
                  placementId={`${document.kind}-${document.slug}-before-faq`}
                  size="banner"
                />
              </Container>
            ) : null}
            <Section
              aria-labelledby="faq-title"
              className="border-y border-ads-border bg-ads-surface"
            >
              <Container size="copy">
                <h2
                  className="mb-8 font-ads-display text-ads-title font-bold text-ads-secondary"
                  id="faq-title"
                >
                  Perguntas frequentes
                </h2>
                <div className="grid gap-4">
                  {document.faq.map((item) => (
                    <details
                      className="rounded-ads-large border border-ads-border bg-ads-background p-5"
                      key={item.question}
                    >
                      <summary className="font-semibold text-ads-secondary">
                        {item.question}
                      </summary>
                      <p className="mt-3 leading-7 text-ads-muted">
                        {item.answer}
                      </p>
                    </details>
                  ))}
                </div>
              </Container>
            </Section>
          </>
        ) : null}

        <Section aria-labelledby="sources-title">
          <Container size="copy">
            <h2
              className="mb-5 font-ads-display text-2xl font-bold text-ads-secondary"
              id="sources-title"
            >
              Fontes e referências
            </h2>
            <p className="mb-4 text-sm leading-6 text-ads-muted">
              Confira os números nas páginas dos órgãos oficiais e nas matérias
              consultadas. Os links abrem o site de origem em outra aba.
            </p>
            <ul className="grid list-disc gap-3 pl-5 text-ads-muted">
              {document.sources.map((source) => (
                <li key={source.label}>
                  {source.url ? (
                    <Link
                      className="font-medium text-ads-primary-strong underline-offset-4 hover:underline"
                      href={source.url}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {source.label}
                    </Link>
                  ) : (
                    <span className="font-medium text-ads-text">
                      {source.label}
                    </span>
                  )}
                </li>
              ))}
            </ul>
            <div className="mt-8 rounded-ads-large border border-ads-border bg-ads-surface p-4 text-sm text-ads-muted">
              <strong className="block text-ads-secondary">
                Última atualização
              </strong>
              <time dateTime={document.updatedAt}>
                {formatDate(document.updatedAt)}
              </time>
            </div>
          </Container>
        </Section>
      </article>

      <Container>
        <AdSlot
          format="horizontal"
          label="Publicidade após o conteúdo principal"
          placementId={`${document.kind}-${document.slug}-footer`}
          size="banner"
        />
      </Container>

      {model.related.length > 0 ? (
        <Section
          aria-labelledby="related-content-title"
          className="border-t border-ads-border bg-ads-surface"
        >
          <Container>
            <h2
              className="mb-8 font-ads-display text-ads-title font-bold text-ads-secondary"
              id="related-content-title"
            >
              Continue explorando
            </h2>
            <Grid columns={3}>
              {model.related.map((item) => (
                <FeatureCard
                  description={item.description}
                  eyebrow={contentKindConfig[item.kind].singularLabel}
                  href={item.href}
                  key={`${item.kind}-${item.slug}`}
                  title={item.title}
                />
              ))}
            </Grid>
          </Container>
        </Section>
      ) : null}
    </main>
  );
}

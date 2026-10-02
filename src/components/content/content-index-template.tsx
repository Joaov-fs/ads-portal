import Link from 'next/link';

import { AdSlot } from '@/components/advertising/ad-slot';
import { CalculatorCard, GuideCard, NewsCard } from '@/components/cards';
import { Container } from '@/components/layout/container';
import { Grid } from '@/components/layout/grid';
import { Section } from '@/components/layout/section';
import { Breadcrumb } from '@/components/navigation/breadcrumb';
import { Search } from '@/components/ui/search';
import {
  contentCategoryLabels,
  contentKindConfig,
  listContentSummaries,
  type ContentKind,
  type ContentSummary,
} from '@/content';

const searchPlaceholder: Readonly<Record<ContentKind, string>> = {
  calculator: 'Qual conta você quer fazer?',
  guide: 'Sobre o que você quer aprender?',
  news: 'Qual notícia você procura?',
};

function ContentSummaryCard({ item }: Readonly<{ item: ContentSummary }>) {
  const common = {
    category: contentCategoryLabels[item.category],
    description: item.description,
    href: item.href,
    title: item.title,
  };

  if (item.kind === 'news') {
    return (
      <NewsCard
        {...common}
        cover={
          item.highlight
            ? {
                category: item.category,
                label: item.highlight.label,
                value: item.highlight.value,
              }
            : undefined
        }
        date={item.updatedAt}
        readingTime={item.readingTime}
      />
    );
  }

  if (item.kind === 'guide') {
    return <GuideCard {...common} readingTime={item.readingTime} />;
  }

  return <CalculatorCard {...common} />;
}

export function ContentIndexTemplate({
  kind,
}: Readonly<{ kind: ContentKind }>) {
  const config = contentKindConfig[kind];
  const items = listContentSummaries(kind);
  const pageTitle =
    kind === 'calculator'
      ? 'Calculadoras financeiras e trabalhistas'
      : config.label;
  const calculatorGroups = Object.entries(contentCategoryLabels)
    .map(([category, label]) => ({
      category,
      label,
      items: items.filter((item) => item.category === category),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <main>
      <section className="border-b border-ads-border bg-ads-surface py-12 sm:py-18">
        <Container>
          <Breadcrumb
            items={[{ href: '/', label: 'Início' }, { label: config.label }]}
          />
          <div className="mt-9 grid max-w-3xl gap-5">
            <span className="text-ads-eyebrow font-bold uppercase tracking-[0.14em] text-ads-primary-strong">
              {config.eyebrow}
            </span>
            <h1 className="text-ads-display font-bold tracking-[-0.045em] text-ads-secondary">
              {pageTitle}
            </h1>
            <p className="max-w-2xl text-ads-lead leading-8 text-ads-muted">
              {config.description}
            </p>
            <Search
              className="mt-3 max-w-2xl shadow-ads-soft"
              placeholder={searchPlaceholder[kind]}
            />
            <nav
              aria-label="Outras seções"
              className="flex flex-wrap items-center gap-2 text-sm"
            >
              <span className="text-ads-muted">Veja também:</span>
              {(Object.keys(contentKindConfig) as ContentKind[])
                .filter((other) => other !== kind)
                .map((other) => (
                  <Link
                    className="rounded-ads-full border border-ads-border bg-white px-4 py-1.5 font-semibold text-ads-primary-strong transition hover:border-ads-primary"
                    href={contentKindConfig[other].path}
                    key={other}
                  >
                    {contentKindConfig[other].label}
                  </Link>
                ))}
            </nav>
          </div>
        </Container>
      </section>

      <Section aria-labelledby="content-list-title">
        <Container>
          <h2 className="sr-only" id="content-list-title">
            Todos os conteúdos de {config.label}
          </h2>
          <div className="mb-8 flex items-center justify-between gap-4 border-b border-ads-border pb-4">
            <p className="text-sm text-ads-muted">
              Escolha o assunto mais próximo da sua dúvida.
            </p>
            <span className="shrink-0 text-xs font-semibold text-ads-muted">
              Conteúdo educativo
            </span>
          </div>
          {kind === 'calculator' ? (
            <div className="grid gap-10">
              {calculatorGroups.map((group) => (
                <section
                  aria-labelledby={`calculator-group-${group.category}`}
                  className="grid gap-4"
                  key={group.category}
                >
                  <div className="flex items-end justify-between gap-4">
                    <h2
                      className="text-xl font-bold text-ads-secondary sm:text-2xl"
                      id={`calculator-group-${group.category}`}
                    >
                      {group.label}
                    </h2>
                  </div>
                  <ul className="grid overflow-hidden rounded-ads-xlarge border border-ads-border bg-ads-surface sm:grid-cols-2 lg:grid-cols-3">
                    {group.items.map((item) => (
                      <li
                        className="border-b border-ads-border sm:border-r"
                        key={item.slug}
                      >
                        <Link
                          className="group grid min-h-28 content-center gap-1.5 p-5 transition hover:bg-ads-primary-soft"
                          href={item.href}
                        >
                          <strong className="text-ads-secondary group-hover:text-ads-primary-strong">
                            {item.title}
                          </strong>
                          <span className="line-clamp-2 text-sm leading-5 text-ads-muted">
                            {item.description}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          ) : (
            <Grid columns={3}>
              {items.map((item) => (
                <ContentSummaryCard item={item} key={item.slug} />
              ))}
            </Grid>
          )}
        </Container>
      </Section>
      <Container>
        <AdSlot
          format="horizontal"
          label={`Publicidade após a lista de ${config.label.toLocaleLowerCase('pt-BR')}`}
          placementId={`index-${kind}-footer`}
          size="banner"
        />
      </Container>
    </main>
  );
}

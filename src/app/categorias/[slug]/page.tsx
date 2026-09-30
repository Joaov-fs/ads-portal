import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { FeatureCard, GuideCard, NewsCard } from '@/components/cards';
import { Container } from '@/components/layout/container';
import { Grid } from '@/components/layout/grid';
import { Section } from '@/components/layout/section';
import { Breadcrumb } from '@/components/navigation/breadcrumb';
import { Search } from '@/components/ui/search';
import {
  categories,
  featuredGuides,
  getCategory,
  latestNews,
  popularTools,
} from '@/features/public-content';

type CategoryPageProps = Readonly<{
  params: Promise<{ slug: string }>;
}>;

export function generateStaticParams() {
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const category = getCategory((await params).slug);

  if (!category) {
    return { title: 'Categoria não encontrada', robots: { index: false } };
  }

  const hasContent =
    popularTools.some((item) => item.category === category.slug) ||
    latestNews.some((item) => item.category === category.slug) ||
    (category.slug === 'guias'
      ? featuredGuides.length > 0
      : featuredGuides.some((item) => item.category === category.slug));

  return {
    title: category.label,
    description: category.description,
    alternates: { canonical: `/categorias/${category.slug}` },
    openGraph: {
      title: `${category.label} | PortalFina`,
      description: category.description,
      url: `/categorias/${category.slug}`,
    },
    robots: hasContent ? undefined : { index: false, follow: true },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const category = getCategory((await params).slug);

  if (!category) {
    notFound();
  }

  const tools = popularTools.filter((tool) => tool.category === category.slug);
  const news = latestNews.filter((item) => item.category === category.slug);
  const guides =
    category.slug === 'guias'
      ? featuredGuides
      : featuredGuides.filter((item) => item.category === category.slug);
  const relatedCategories = categories
    .filter(
      (item) =>
        item.slug !== category.slug &&
        (item.slug === 'guias' ||
          popularTools.some((tool) => tool.category === item.slug) ||
          latestNews.some((newsItem) => newsItem.category === item.slug) ||
          featuredGuides.some((guide) => guide.category === item.slug)),
    )
    .slice(0, 3);

  return (
    <main>
      <section className="border-b border-ads-border bg-ads-surface py-12 sm:py-18">
        <Container>
          <Breadcrumb
            items={[
              { href: '/', label: 'Início' },
              { href: '/#categorias', label: 'Categorias' },
              { label: category.label },
            ]}
          />
          <div className="mt-9 grid max-w-3xl gap-5">
            <span className="text-ads-eyebrow font-bold uppercase tracking-[0.14em] text-ads-primary-strong">
              Categoria
            </span>
            <h1 className="text-ads-display font-bold tracking-[-0.045em] text-ads-secondary">
              {category.label}
            </h1>
            <p className="max-w-2xl text-ads-lead leading-8 text-ads-muted">
              {category.description}
            </p>
            <Search
              className="mt-2 max-w-2xl shadow-ads-soft"
              placeholder="Pesquisar na plataforma"
            />
          </div>
        </Container>
      </section>

      {tools.length > 0 ? (
        <Section aria-labelledby="category-tools-title">
          <Container>
            <div className="mb-8 grid gap-2">
              <span className="text-ads-eyebrow font-bold uppercase tracking-[0.14em] text-ads-primary-strong">
                Resolva agora
              </span>
              <h2
                className="text-ads-title font-bold text-ads-secondary"
                id="category-tools-title"
              >
                Ferramentas de {category.label}
              </h2>
            </div>
            <ul className="grid overflow-hidden rounded-ads-xlarge border border-ads-border bg-ads-surface sm:grid-cols-2 lg:grid-cols-3">
              {tools.map((tool) => (
                <li
                  className="border-b border-ads-border sm:border-r"
                  key={tool.title}
                >
                  <Link
                    className="group grid min-h-28 content-center gap-1.5 p-5 transition hover:bg-ads-primary-soft"
                    href={tool.href}
                  >
                    <strong className="text-ads-secondary group-hover:text-ads-primary-strong">
                      {tool.title}
                    </strong>
                    <span className="line-clamp-2 text-sm leading-5 text-ads-muted">
                      {tool.description}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </Section>
      ) : null}

      {news.length > 0 ? (
        <Section
          className="border-y border-ads-border bg-ads-surface"
          aria-labelledby="category-news-title"
        >
          <Container>
            <h2
              className="mb-8 text-ads-title font-bold text-ads-secondary"
              id="category-news-title"
            >
              Notícias recentes
            </h2>
            <Grid columns={3}>
              {news.map((item) => (
                <NewsCard
                  category={category.label}
                  date={item.date}
                  description={item.description}
                  href={item.href}
                  key={item.title}
                  readingTime={item.readingTime}
                  title={item.title}
                />
              ))}
            </Grid>
          </Container>
        </Section>
      ) : null}

      {guides.length > 0 ? (
        <Section aria-labelledby="category-guides-title">
          <Container>
            <h2
              className="mb-8 text-ads-title font-bold text-ads-secondary"
              id="category-guides-title"
            >
              Guias para entender melhor
            </h2>
            <Grid columns={3}>
              {guides.map((guide) => (
                <GuideCard
                  category={category.label}
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
      ) : null}

      {tools.length === 0 && news.length === 0 && guides.length === 0 ? (
        <Section aria-labelledby="category-empty-title">
          <Container size="copy">
            <div className="rounded-ads-xlarge border border-ads-border bg-ads-surface p-6 shadow-ads-subtle sm:p-8">
              <span className="text-ads-eyebrow font-bold uppercase tracking-[0.14em] text-ads-primary-strong">
                Curadoria em andamento
              </span>
              <h2
                className="mt-2 text-2xl font-bold text-ads-secondary"
                id="category-empty-title"
              >
                Ainda não há conteúdo publicado nesta categoria
              </h2>
              <p className="mt-3 leading-7 text-ads-muted">
                Enquanto preparamos materiais úteis e revisados, use a pesquisa
                para encontrar calculadoras e guias em temas relacionados.
              </p>
            </div>
          </Container>
        </Section>
      ) : null}

      <Section
        className="border-t border-ads-border bg-ads-surface"
        aria-labelledby="related-categories-title"
      >
        <Container>
          <h2
            className="mb-8 text-2xl font-bold text-ads-secondary"
            id="related-categories-title"
          >
            Continue explorando
          </h2>
          <Grid columns={3}>
            {relatedCategories.map((item) => (
              <FeatureCard
                description={item.description}
                eyebrow="Categoria"
                href={`/categorias/${item.slug}`}
                icon={item.icon}
                key={item.slug}
                title={item.label}
              />
            ))}
          </Grid>
        </Container>
      </Section>
    </main>
  );
}

'use client';

import Link from 'next/link';

import { Card } from '@/components/ui/card';
import { calculatePublishingStats } from '@/features/publishing';
import { usePublishing } from '@/features/publishing/publishing-provider';

export function AdminDashboard() {
  const { records } = usePublishing();
  const stats = calculatePublishingStats(records);
  const cards = [
    { label: 'Notícias', value: stats.news, href: '/admin/noticias' },
    { label: 'Guias', value: stats.guide, href: '/admin/guias' },
    {
      label: 'Calculadoras',
      value: stats.calculator,
      href: '/admin/calculadoras',
    },
    { label: 'Rascunhos', value: stats.draft },
    { label: 'Publicados', value: stats.published },
  ] as const;

  return (
    <div className="mx-auto grid max-w-ads-content gap-8 px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <header className="grid gap-2">
        <span className="text-ads-eyebrow font-bold uppercase tracking-[0.14em] text-ads-primary-strong">
          Operação editorial
        </span>
        <h1 className="text-ads-title font-bold tracking-tight text-ads-secondary">
          Visão geral da operação
        </h1>
        <p className="max-w-2xl text-ads-muted">
          Acompanhe o catálogo e continue o trabalho de onde parou.
        </p>
      </header>

      <section
        aria-label="Indicadores editoriais"
        className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5"
      >
        {cards.map((item) => (
          <Card className="p-5" key={item.label}>
            <span className="text-sm font-medium text-ads-muted">
              {item.label}
            </span>
            <strong className="mt-3 block text-3xl font-bold text-ads-secondary">
              {item.value}
            </strong>
            {'href' in item ? (
              <Link
                className="mt-5 inline-flex text-sm font-bold text-ads-primary-strong hover:underline"
                href={item.href}
              >
                Abrir lista
              </Link>
            ) : (
              <span className="mt-5 block text-xs text-ads-subtle">
                Total em todo o catálogo
              </span>
            )}
          </Card>
        ))}
      </section>

      <section className="grid gap-4 lg:grid-cols-[1.4fr_1fr]">
        <Card className="grid gap-4 p-6">
          <div>
            <h2 className="text-xl font-bold text-ads-secondary">
              Fluxo de publicação
            </h2>
            <p className="mt-1 text-sm text-ads-muted">
              Cada item avança com uma etapa de revisão antes de ser publicado.
            </p>
          </div>
          <ol className="grid gap-3 sm:grid-cols-3">
            {[
              ['1', 'Rascunho', 'Edição livre do conteúdo.'],
              ['2', 'Revisão', 'Validação editorial final.'],
              ['3', 'Publicado', 'Conteúdo aprovado na operação.'],
            ].map(([step, title, description]) => (
              <li
                className="rounded-ads-large bg-ads-background p-4"
                key={step}
              >
                <span className="grid size-7 place-items-center rounded-full bg-ads-primary text-xs font-bold text-white">
                  {step}
                </span>
                <strong className="mt-3 block text-ads-text">{title}</strong>
                <span className="mt-1 block text-sm text-ads-muted">
                  {description}
                </span>
              </li>
            ))}
          </ol>
        </Card>

        <Card className="grid content-start gap-4 p-6">
          <div>
            <h2 className="text-xl font-bold text-ads-secondary">Em revisão</h2>
            <p className="mt-1 text-sm text-ads-muted">
              {stats.review} item{stats.review === 1 ? '' : 's'} aguardando
              decisão.
            </p>
          </div>
          <Link
            className="inline-flex min-h-11 items-center justify-center rounded-ads-medium bg-ads-primary px-4 text-sm font-semibold text-white hover:bg-ads-primary-strong"
            href="/admin/noticias?status=review"
          >
            Revisar conteúdos
          </Link>
        </Card>
      </section>
    </div>
  );
}

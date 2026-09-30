'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { useMemo, useState } from 'react';

import { Card } from '@/components/ui/card';
import { Input, Select } from '@/components/ui/field';
import {
  contentCategoryLabels,
  contentKindConfig,
  type ContentCategory,
  type ContentKind,
} from '@/content';
import {
  filterPublishingRecords,
  publishingStatusLabels,
  type PublishingStatus,
} from '@/features/publishing';
import { usePublishing } from '@/features/publishing/publishing-provider';

import { StatusBadge } from './status-badge';

const categoryOptions = [
  { label: 'Todas as categorias', value: 'all' },
  ...Object.entries(contentCategoryLabels).map(([value, label]) => ({
    label,
    value,
  })),
];
const statusOptions = [
  { label: 'Todos os status', value: 'all' },
  ...Object.entries(publishingStatusLabels).map(([value, label]) => ({
    label,
    value,
  })),
];

export function AdminContentList({ kind }: Readonly<{ kind: ContentKind }>) {
  const { records } = usePublishing();
  const searchParams = useSearchParams();
  const initialStatus = searchParams.get('status');
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<ContentCategory | 'all'>('all');
  const [status, setStatus] = useState<PublishingStatus | 'all'>(
    initialStatus === 'draft' ||
      initialStatus === 'review' ||
      initialStatus === 'published'
      ? initialStatus
      : 'all',
  );
  const [page, setPage] = useState(1);
  const config = contentKindConfig[kind];
  const result = useMemo(
    () =>
      filterPublishingRecords(records, {
        kind,
        query,
        category,
        status,
        page,
        pageSize: 10,
      }),
    [category, kind, page, query, records, status],
  );

  function resetPage() {
    setPage(1);
  }

  return (
    <div className="mx-auto grid max-w-ads-content gap-6 px-4 py-8 sm:px-6 lg:px-8 lg:py-10">
      <header className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div className="grid gap-2">
          <span className="text-ads-eyebrow font-bold uppercase tracking-[0.14em] text-ads-primary-strong">
            Conteúdo
          </span>
          <h1 className="text-ads-title font-bold text-ads-secondary">
            {config.label}
          </h1>
          <p className="text-ads-muted">
            {result.total} item{result.total === 1 ? '' : 's'} nesta
            visualização.
          </p>
        </div>
        <Link
          className="inline-flex min-h-11 items-center justify-center rounded-ads-medium bg-ads-primary px-4 text-sm font-semibold text-white hover:bg-ads-primary-strong"
          href={`/admin/conteudos/${kind}/novo`}
        >
          Criar conteúdo
        </Link>
      </header>

      <Card className="grid gap-4 p-4 sm:grid-cols-3 sm:p-5">
        <Input
          kind="search"
          label="Pesquisar"
          onChange={(event) => {
            setQuery(event.target.value);
            resetPage();
          }}
          placeholder="Título, resumo ou slug"
          value={query}
        />
        <Select
          label="Status"
          onChange={(event) => {
            setStatus(event.target.value as PublishingStatus | 'all');
            resetPage();
          }}
          options={statusOptions}
          value={status}
        />
        <Select
          label="Categoria"
          onChange={(event) => {
            setCategory(event.target.value as ContentCategory | 'all');
            resetPage();
          }}
          options={categoryOptions}
          value={category}
        />
      </Card>

      <Card className="overflow-hidden">
        {result.items.length ? (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[48rem] border-collapse text-left">
              <thead className="bg-ads-background text-xs uppercase tracking-wider text-ads-muted">
                <tr>
                  <th className="px-5 py-3 font-bold" scope="col">
                    Conteúdo
                  </th>
                  <th className="px-5 py-3 font-bold" scope="col">
                    Categoria
                  </th>
                  <th className="px-5 py-3 font-bold" scope="col">
                    Status
                  </th>
                  <th className="px-5 py-3 font-bold" scope="col">
                    Atualização
                  </th>
                  <th className="px-5 py-3 text-right font-bold" scope="col">
                    Ação
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-ads-border">
                {result.items.map((record) => (
                  <tr key={record.id}>
                    <td className="px-5 py-4">
                      <strong className="block text-sm text-ads-text">
                        {record.title}
                      </strong>
                      <span className="mt-1 block text-xs text-ads-muted">
                        /{record.slug}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-sm text-ads-muted">
                      {contentCategoryLabels[record.category]}
                    </td>
                    <td className="px-5 py-4">
                      <StatusBadge status={record.status} />
                    </td>
                    <td className="px-5 py-4 text-sm text-ads-muted">
                      <time dateTime={record.updatedAt}>
                        {new Intl.DateTimeFormat('pt-BR').format(
                          new Date(`${record.updatedAt}T12:00:00`),
                        )}
                      </time>
                      <span className="block text-xs">{record.updatedBy}</span>
                    </td>
                    <td className="px-5 py-4 text-right">
                      <Link
                        className="text-sm font-bold text-ads-primary-strong hover:underline"
                        href={`/admin/conteudos/${kind}/${record.slug}`}
                      >
                        Editar
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="grid justify-items-center gap-2 px-6 py-14 text-center">
            <h2 className="text-lg font-bold text-ads-secondary">
              Nenhum conteúdo encontrado
            </h2>
            <p className="text-sm text-ads-muted">
              Ajuste a pesquisa ou os filtros.
            </p>
          </div>
        )}
      </Card>

      <nav
        aria-label="Paginação"
        className="flex items-center justify-between gap-4"
      >
        <button
          className="rounded-ads-medium border border-ads-border-strong bg-ads-surface px-4 py-2 text-sm font-semibold text-ads-secondary disabled:opacity-40"
          disabled={result.page === 1}
          onClick={() => setPage((current) => Math.max(1, current - 1))}
          type="button"
        >
          Anterior
        </button>
        <span className="text-sm text-ads-muted">
          Página {result.page} de {result.pageCount}
        </span>
        <button
          className="rounded-ads-medium border border-ads-border-strong bg-ads-surface px-4 py-2 text-sm font-semibold text-ads-secondary disabled:opacity-40"
          disabled={result.page === result.pageCount}
          onClick={() =>
            setPage((current) => Math.min(result.pageCount, current + 1))
          }
          type="button"
        >
          Próxima
        </button>
      </nav>
    </div>
  );
}

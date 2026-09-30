'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useMemo, useState, type FormEvent } from 'react';

import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input, Select, Textarea } from '@/components/ui/field';
import {
  contentCategoryLabels,
  contentKindConfig,
  type ContentCategory,
  type ContentKind,
  type ContentSection,
} from '@/content';
import {
  canTransitionStatus,
  publishingStatusLabels,
  slugify,
  type PublishingRecord,
  type PublishingStatus,
} from '@/features/publishing';
import { usePublishing } from '@/features/publishing/publishing-provider';

type EditableSection = { heading: string; paragraphs: string };
type EditorDraft = {
  category: ContentCategory;
  description: string;
  relatedCalculatorSlug: string;
  relatedGuideSlug: string;
  sections: EditableSection[];
  slug: string;
  status: PublishingStatus;
  title: string;
};

const categoryOptions = Object.entries(contentCategoryLabels).map(
  ([value, label]) => ({ label, value }),
);

const listPaths: Record<ContentKind, string> = {
  calculator: '/admin/calculadoras',
  guide: '/admin/guias',
  news: '/admin/noticias',
};

function toDraft(record?: PublishingRecord): EditorDraft {
  return {
    title: record?.title ?? '',
    slug: record?.slug ?? '',
    description: record?.description ?? '',
    category: record?.category ?? 'financas',
    status: record?.status ?? 'draft',
    relatedGuideSlug: record?.relatedGuideSlug ?? '',
    relatedCalculatorSlug: record?.relatedCalculatorSlug ?? '',
    sections: record?.sections.map((section) => ({
      heading: section.heading,
      paragraphs: section.paragraphs.join('\n\n'),
    })) ?? [{ heading: '', paragraphs: '' }],
  };
}

export function AdminEditor({
  kind,
  operatorName,
  slug,
}: Readonly<{
  kind: ContentKind;
  operatorName: string;
  slug: string;
}>) {
  const router = useRouter();
  const { findRecord, records, saveRecord } = usePublishing();
  const isNew = slug === 'novo';
  const record = isNew ? undefined : findRecord(kind, slug);
  const [draft, setDraft] = useState<EditorDraft>(() => toDraft(record));
  const [error, setError] = useState('');

  useEffect(() => {
    const timer = window.setTimeout(() => {
      if (record) setDraft(toDraft(record));
    }, 0);
    return () => window.clearTimeout(timer);
  }, [record]);

  const statusOptions = (
    Object.entries(publishingStatusLabels) as [PublishingStatus, string][]
  )
    .filter(([status]) =>
      record
        ? canTransitionStatus(record.status, status)
        : status !== 'published',
    )
    .map(([value, label]) => ({ label, value }));
  const guideOptions = useMemo(
    () => [
      { label: 'Nenhum guia relacionado', value: '' },
      ...records
        .filter((item) => item.kind === 'guide')
        .map((item) => ({ label: item.title, value: item.slug })),
    ],
    [records],
  );
  const calculatorOptions = useMemo(
    () => [
      { label: 'Nenhuma calculadora relacionada', value: '' },
      ...records
        .filter((item) => item.kind === 'calculator')
        .map((item) => ({ label: item.title, value: item.slug })),
    ],
    [records],
  );

  function updateSection(index: number, patch: Partial<EditableSection>) {
    setDraft((current) => ({
      ...current,
      sections: current.sections.map((section, sectionIndex) =>
        sectionIndex === index ? { ...section, ...patch } : section,
      ),
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError('');
    const title = draft.title.trim();
    const normalizedSlug = slugify(draft.slug || title);
    const sections: ContentSection[] = draft.sections
      .map((section) => ({
        heading: section.heading.trim(),
        paragraphs: section.paragraphs
          .split(/\n\s*\n/)
          .map((paragraph) => paragraph.trim())
          .filter(Boolean),
      }))
      .filter((section) => section.heading && section.paragraphs.length);

    if (!title || !normalizedSlug || !draft.description.trim()) {
      setError('Preencha título, slug e resumo antes de salvar.');
      return;
    }
    if (!sections.length) {
      setError('Adicione ao menos uma seção com título e texto.');
      return;
    }

    try {
      saveRecord(
        {
          id: record?.id,
          kind,
          title,
          slug: normalizedSlug,
          description: draft.description.trim(),
          category: draft.category,
          status: draft.status,
          sections,
          relatedGuideSlug: draft.relatedGuideSlug || undefined,
          relatedCalculatorSlug: draft.relatedCalculatorSlug || undefined,
        },
        operatorName,
      );
      router.push(listPaths[kind]);
    } catch (reason) {
      setError(
        reason instanceof Error ? reason.message : 'Não foi possível salvar.',
      );
    }
  }

  if (!isNew && !record) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6">
        <Card className="grid gap-3 p-8 text-center">
          <h1 className="text-2xl font-bold text-ads-secondary">
            Conteúdo não encontrado
          </h1>
          <p className="text-ads-muted">
            O item pode ter sido renomeado neste navegador.
          </p>
          <Link
            className="font-bold text-ads-primary-strong"
            href={listPaths[kind]}
          >
            Voltar para a lista
          </Link>
        </Card>
      </div>
    );
  }

  const config = contentKindConfig[kind];
  const newContentTitle =
    kind === 'guide'
      ? 'Novo guia'
      : `Nova ${config.singularLabel.toLocaleLowerCase('pt-BR')}`;

  return (
    <form
      className="mx-auto grid max-w-ads-content gap-6 px-4 py-8 sm:px-6 lg:px-8 lg:py-10"
      onSubmit={handleSubmit}
    >
      <header className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div className="grid gap-2">
          <span className="text-ads-eyebrow font-bold uppercase tracking-[0.14em] text-ads-primary-strong">
            Editor estruturado
          </span>
          <h1 className="text-ads-title font-bold text-ads-secondary">
            {isNew ? newContentTitle : 'Editar conteúdo'}
          </h1>
          <p className="text-ads-muted">
            Organize os campos editoriais e avance pelo fluxo de publicação.
          </p>
        </div>
        <div className="flex gap-3">
          <Link
            className="inline-flex min-h-11 items-center justify-center rounded-ads-medium border border-ads-border-strong bg-ads-surface px-4 text-sm font-semibold text-ads-secondary"
            href={listPaths[kind]}
          >
            Cancelar
          </Link>
          <Button type="submit">Salvar conteúdo</Button>
        </div>
      </header>

      {error ? (
        <p
          className="rounded-ads-medium bg-ads-danger-soft px-4 py-3 text-sm font-medium text-ads-danger"
          role="alert"
        >
          {error}
        </p>
      ) : null}

      <div className="grid items-start gap-6 lg:grid-cols-[minmax(0,1fr)_20rem]">
        <div className="grid gap-6">
          <Card className="grid gap-5 p-5 sm:p-6">
            <h2 className="text-xl font-bold text-ads-secondary">
              Informações principais
            </h2>
            <Input
              label="Título"
              onChange={(event) =>
                setDraft((current) => ({
                  ...current,
                  title: event.target.value,
                  slug: isNew ? slugify(event.target.value) : current.slug,
                }))
              }
              required
              value={draft.title}
            />
            <Input
              hint="Usado na URL. Letras minúsculas, números e hífens."
              label="Slug"
              onChange={(event) =>
                setDraft((current) => ({
                  ...current,
                  slug: event.target.value,
                }))
              }
              required
              value={draft.slug}
            />
            <Textarea
              label="Resumo"
              maxLength={240}
              onChange={(event) =>
                setDraft((current) => ({
                  ...current,
                  description: event.target.value,
                }))
              }
              required
              rows={4}
              value={draft.description}
            />
          </Card>

          <Card className="grid gap-5 p-5 sm:p-6">
            <div>
              <h2 className="text-xl font-bold text-ads-secondary">
                Corpo do conteúdo
              </h2>
              <p className="mt-1 text-sm text-ads-muted">
                Cada bloco possui um intertítulo e parágrafos separados por uma
                linha em branco.
              </p>
            </div>
            {draft.sections.map((section, index) => (
              <fieldset
                className="grid gap-4 rounded-ads-large border border-ads-border p-4"
                key={index}
              >
                <legend className="px-2 text-sm font-bold text-ads-secondary">
                  Seção {index + 1}
                </legend>
                <Input
                  label="Intertítulo"
                  onChange={(event) =>
                    updateSection(index, { heading: event.target.value })
                  }
                  value={section.heading}
                />
                <Textarea
                  label="Parágrafos"
                  onChange={(event) =>
                    updateSection(index, { paragraphs: event.target.value })
                  }
                  rows={8}
                  value={section.paragraphs}
                />
                {draft.sections.length > 1 ? (
                  <Button
                    className="justify-self-start"
                    onClick={() =>
                      setDraft((current) => ({
                        ...current,
                        sections: current.sections.filter(
                          (_, sectionIndex) => sectionIndex !== index,
                        ),
                      }))
                    }
                    size="small"
                    variant="ghost"
                  >
                    Remover seção
                  </Button>
                ) : null}
              </fieldset>
            ))}
            <Button
              className="justify-self-start"
              onClick={() =>
                setDraft((current) => ({
                  ...current,
                  sections: [
                    ...current.sections,
                    { heading: '', paragraphs: '' },
                  ],
                }))
              }
              variant="outline"
            >
              Adicionar seção
            </Button>
          </Card>
        </div>

        <aside className="grid gap-6 lg:sticky lg:top-6">
          <Card className="grid gap-5 p-5">
            <h2 className="text-lg font-bold text-ads-secondary">Publicação</h2>
            <Select
              label="Status"
              onChange={(event) =>
                setDraft((current) => ({
                  ...current,
                  status: event.target.value as PublishingStatus,
                }))
              }
              options={statusOptions}
              value={draft.status}
            />
            <Select
              label="Categoria"
              onChange={(event) =>
                setDraft((current) => ({
                  ...current,
                  category: event.target.value as ContentCategory,
                }))
              }
              options={categoryOptions}
              value={draft.category}
            />
            <p className="text-xs leading-5 text-ads-muted">
              Rascunhos devem passar por revisão antes da publicação. Itens
              publicados retornam para revisão quando precisam ser retirados.
            </p>
          </Card>

          {kind === 'news' ? (
            <Card className="grid gap-4 p-5">
              <h2 className="text-lg font-bold text-ads-secondary">
                Relacionamento
              </h2>
              <Select
                hint="A notícia direciona o leitor para um guia."
                label="Guia relacionado"
                onChange={(event) =>
                  setDraft((current) => ({
                    ...current,
                    relatedGuideSlug: event.target.value,
                  }))
                }
                options={guideOptions}
                value={draft.relatedGuideSlug}
              />
            </Card>
          ) : null}

          {kind === 'guide' ? (
            <Card className="grid gap-4 p-5">
              <h2 className="text-lg font-bold text-ads-secondary">
                Relacionamento
              </h2>
              <Select
                hint="O guia direciona o leitor para uma calculadora."
                label="Calculadora relacionada"
                onChange={(event) =>
                  setDraft((current) => ({
                    ...current,
                    relatedCalculatorSlug: event.target.value,
                  }))
                }
                options={calculatorOptions}
                value={draft.relatedCalculatorSlug}
              />
            </Card>
          ) : null}
        </aside>
      </div>
    </form>
  );
}

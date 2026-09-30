import { notFound, redirect } from 'next/navigation';

import { AdminEditor } from '@/components/admin';
import type { ContentKind } from '@/content';
import { getMockOperator } from '@/features/publishing/auth';

const contentKinds: readonly ContentKind[] = ['news', 'guide', 'calculator'];

type AdminEditorPageProps = Readonly<{
  params: Promise<{ kind: string; slug: string }>;
}>;

export default async function AdminEditorPage({
  params,
}: AdminEditorPageProps) {
  const { kind, slug } = await params;
  if (!contentKinds.includes(kind as ContentKind)) notFound();

  const operator = await getMockOperator();
  if (!operator) redirect('/acesso-admin');

  return (
    <AdminEditor
      kind={kind as ContentKind}
      operatorName={operator.name}
      slug={slug}
    />
  );
}

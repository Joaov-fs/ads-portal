import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';
import type { ReactNode } from 'react';

import { AdminShell } from '@/components/admin';
import {
  getMockOperator,
  publishingDemoEnabled,
} from '@/features/publishing/auth';
import { PublishingProvider } from '@/features/publishing/publishing-provider';

import { logoutAction } from './actions';

export const metadata: Metadata = {
  title: 'Painel administrativo',
  robots: { index: false, follow: false },
};

export default async function AdminLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  if (!publishingDemoEnabled) notFound();
  const operator = await getMockOperator();
  if (!operator) redirect('/acesso-admin');

  return (
    <PublishingProvider>
      <AdminShell logoutAction={logoutAction} operator={operator}>
        {children}
      </AdminShell>
    </PublishingProvider>
  );
}

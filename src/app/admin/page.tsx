import type { Metadata } from 'next';

import { AdminDashboard } from '@/components/admin';

export const metadata: Metadata = { title: 'Painel administrativo' };

export default function AdminPage() {
  return <AdminDashboard />;
}

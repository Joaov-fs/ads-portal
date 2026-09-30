'use client';

import { usePathname } from 'next/navigation';
import type { ReactNode } from 'react';

import { Footer } from '@/components/navigation/footer';
import { Header } from '@/components/navigation/header';

export function AppChrome({ children }: Readonly<{ children: ReactNode }>) {
  const pathname = usePathname();
  const isOperationalRoute =
    pathname === '/acesso-admin' || pathname.startsWith('/admin');

  if (isOperationalRoute) return children;

  return (
    <div className="min-h-svh bg-ads-background">
      <Header />
      <div id="conteudo-principal" tabIndex={-1}>
        {children}
      </div>
      <Footer />
    </div>
  );
}

import Link from 'next/link';
import type { ReactNode } from 'react';

import { Button } from '@/components/ui/button';
import type { MockOperator } from '@/features/publishing/auth';

const adminNavigation = [
  { href: '/admin', label: 'Visão geral' },
  { href: '/admin/noticias', label: 'Notícias' },
  { href: '/admin/guias', label: 'Guias' },
  { href: '/admin/calculadoras', label: 'Calculadoras' },
] as const;

type AdminShellProps = Readonly<{
  children: ReactNode;
  logoutAction: () => Promise<void>;
  operator: MockOperator;
}>;

export function AdminShell({
  children,
  logoutAction,
  operator,
}: AdminShellProps) {
  return (
    <div className="min-h-svh bg-ads-background lg:grid lg:grid-cols-[17rem_1fr]">
      <aside className="border-b border-ads-border bg-ads-secondary text-white lg:min-h-svh lg:border-b-0 lg:border-r">
        <div className="flex min-h-16 items-center justify-between gap-4 border-b border-white/10 px-5">
          <Link className="font-bold tracking-tight" href="/admin">
            PortalFina Operação
          </Link>
          <Link
            className="text-xs font-semibold text-white/75 hover:text-white"
            href="/"
          >
            Ver site
          </Link>
        </div>
        <nav aria-label="Menu administrativo" className="p-3">
          <ul className="grid grid-cols-2 gap-1 sm:grid-cols-4 lg:grid-cols-1">
            {adminNavigation.map((item) => (
              <li key={item.href}>
                <Link
                  className="block rounded-ads-medium px-3 py-2.5 text-sm font-semibold text-white/80 transition hover:bg-white/10 hover:text-white"
                  href={item.href}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      <div className="min-w-0">
        <header className="flex min-h-16 items-center justify-between gap-4 border-b border-ads-border bg-ads-surface px-4 sm:px-6 lg:px-8">
          <div>
            <span className="block text-xs text-ads-muted">
              Operador conectado
            </span>
            <strong className="text-sm text-ads-secondary">
              {operator.name}
            </strong>
          </div>
          <form action={logoutAction}>
            <Button size="small" variant="outline" type="submit">
              Sair
            </Button>
          </form>
        </header>
        <main id="conteudo-principal" tabIndex={-1}>
          {children}
        </main>
      </div>
    </div>
  );
}

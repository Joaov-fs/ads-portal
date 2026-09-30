import Link from 'next/link';

import { Container } from '@/components/layout/container';
import { footerNavigationGroups } from '@/config/navigation';

import { Logo } from '../logo';

export function Footer() {
  return (
    <footer className="border-t border-ads-border bg-ads-surface">
      <Container className="grid gap-12 py-14 lg:grid-cols-[1.4fr_2fr] lg:py-18">
        <div className="grid content-start gap-5">
          <Logo />
          <p className="max-w-sm text-sm leading-6 text-ads-muted">
            Calculadoras com premissas visíveis e conteúdo educativo para
            decisões financeiras e trabalhistas mais bem informadas.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          {footerNavigationGroups.map((group) => (
            <nav aria-label={group.label} key={group.label}>
              <h2 className="mb-4 text-sm font-bold text-ads-secondary">
                {group.label}
              </h2>
              <ul className="m-0 grid list-none gap-3 p-0">
                {group.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      className="text-sm text-ads-muted transition hover:text-ads-primary-strong"
                      href={item.href}
                      prefetch={false}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
      </Container>

      <div className="border-t border-ads-border">
        <Container className="flex flex-col gap-2 py-5 text-xs text-ads-muted sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} PortalFina.</span>
          <span>
            Conteúdo educativo. Confirme valores e regras nas fontes oficiais.
          </span>
        </Container>
      </div>
    </footer>
  );
}

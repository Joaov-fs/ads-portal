import Link from 'next/link';

import { Container } from '@/components/layout/container';
import { Search } from '@/components/ui/search';
import { primaryNavigationItems } from '@/config/navigation';

import { Logo } from '../logo';
import { Navigation } from '../navigation';
import type { NavigationItem } from '../navigation';

type HeaderProps = Readonly<{
  items?: readonly NavigationItem[];
}>;

export function Header({ items = primaryNavigationItems }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-ads-border/90 bg-ads-surface/90 backdrop-blur-lg">
      <Container className="flex h-[4.5rem] items-center justify-between gap-6">
        <Logo />

        <Navigation
          className="hidden xl:block"
          items={items}
          itemClassName="relative py-2 text-[0.95rem] font-semibold text-ads-secondary/80 after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:rounded-full after:bg-ads-primary after:transition-transform hover:text-ads-primary-strong hover:after:scale-x-100"
        />

        <div className="flex items-center gap-3">
          <form
            action="/pesquisa"
            className="hidden w-48 items-center gap-2 rounded-ads-full border border-ads-border-strong bg-ads-background px-4 py-2 transition-[width] duration-300 focus-within:w-72 focus-within:border-ads-primary focus-within:bg-white lg:flex"
            method="get"
            role="search"
          >
            <svg
              aria-hidden="true"
              className="size-4 shrink-0 text-ads-muted"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                d="m21 21-4.4-4.4m2.4-5.1a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
              />
            </svg>
            <label className="sr-only" htmlFor="header-search">
              Pesquisar no PortalFina
            </label>
            <input
              className="min-w-0 flex-1 bg-transparent text-sm text-ads-text outline-none placeholder:text-ads-subtle"
              id="header-search"
              name="q"
              placeholder="Buscar"
              type="search"
            />
          </form>

          <Link
            className="hidden rounded-ads-full bg-ads-primary px-5 py-2.5 text-sm font-bold text-white shadow-ads-subtle transition hover:bg-ads-primary-strong sm:inline-flex"
            href="/calculadoras"
          >
            Calcular agora
          </Link>

          <details className="group relative xl:hidden">
            <summary className="flex size-11 list-none items-center justify-center rounded-ads-medium border border-ads-border text-ads-secondary transition hover:border-ads-border-strong hover:bg-ads-background [&::-webkit-details-marker]:hidden">
              <span className="sr-only">Abrir menu</span>
              <svg
                aria-hidden="true"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                />
              </svg>
            </summary>
            <div className="absolute right-0 top-14 z-50 w-[min(88vw,22rem)] rounded-ads-large border border-ads-border bg-ads-surface p-3 shadow-ads-raised">
              <Search className="mb-3" buttonLabel="Ir" />
              <Navigation items={items} orientation="vertical" />
            </div>
          </details>
        </div>
      </Container>
    </header>
  );
}

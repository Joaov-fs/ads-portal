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
    <header className="sticky top-0 z-40 border-b border-ads-border/90 bg-ads-surface/95 backdrop-blur-md">
      <Container className="flex min-h-16 items-center justify-between gap-6">
        <Logo />
        <Search className="hidden max-w-lg lg:ml-auto lg:flex" />

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
          <div className="absolute right-0 top-12 z-50 w-[min(88vw,22rem)] rounded-ads-large border border-ads-border bg-ads-surface p-3 shadow-ads-raised">
            <Search className="mb-3 lg:hidden" buttonLabel="Ir" />
            <Navigation items={items} orientation="vertical" />
          </div>
        </details>
      </Container>

      <div className="hidden border-t border-ads-border xl:block">
        <Container className="py-3">
          <Navigation items={items} />
        </Container>
      </div>
    </header>
  );
}

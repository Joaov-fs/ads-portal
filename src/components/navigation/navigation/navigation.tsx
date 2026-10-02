import Link from 'next/link';

import { mergeClassNames } from '@/lib/merge-class-names';

export type NavigationItem = Readonly<{
  href: string;
  label: string;
}>;

type NavigationProps = Readonly<{
  className?: string;
  itemClassName?: string;
  items: readonly NavigationItem[];
  orientation?: 'horizontal' | 'vertical';
}>;

export function Navigation({
  className,
  itemClassName,
  items,
  orientation = 'horizontal',
}: NavigationProps) {
  return (
    <nav aria-label="Navegação principal" className={className}>
      <ul
        className={mergeClassNames(
          'm-0 flex list-none p-0',
          orientation === 'horizontal'
            ? 'items-center gap-6'
            : 'flex-col items-stretch gap-1',
        )}
      >
        {items.map((item) => (
          <li key={item.href}>
            <Link
              className={mergeClassNames(
                itemClassName ??
                  'block text-sm font-medium text-ads-muted transition hover:text-ads-primary-strong',
                orientation === 'vertical' &&
                  'block rounded-ads-medium px-3 py-2.5 text-sm font-medium text-ads-muted hover:bg-ads-primary-soft',
              )}
              href={item.href}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

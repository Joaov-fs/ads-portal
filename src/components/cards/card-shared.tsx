import Link from 'next/link';
import type { ReactNode } from 'react';

import { mergeClassNames } from '@/lib/merge-class-names';

export function CardTag({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <span className="inline-flex w-fit rounded-ads-full bg-ads-primary-soft px-2.5 py-1 text-xs font-semibold text-ads-primary-strong">
      {children}
    </span>
  );
}

export function CardLink({
  children,
  className,
  href,
}: Readonly<{ children: ReactNode; className?: string; href: string }>) {
  return (
    <Link
      className={mergeClassNames(
        'group/link inline-flex items-center gap-1.5 text-sm font-semibold text-ads-primary-strong',
        className,
      )}
      href={href}
    >
      {children}
      <span
        aria-hidden="true"
        className="transition-transform group-hover/link:translate-x-0.5"
      >
        →
      </span>
    </Link>
  );
}

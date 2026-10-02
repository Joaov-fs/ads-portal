import Link from 'next/link';

import { mergeClassNames } from '@/lib/merge-class-names';

import { LogoMark } from './logo-mark';

type LogoProps = Readonly<{
  className?: string;
  /** "dark" é para fundos escuros: o nome fica claro. */
  tone?: 'dark' | 'light';
}>;

export function Logo({ className, tone = 'light' }: LogoProps) {
  return (
    <Link
      aria-label="PortalFina — início"
      className={mergeClassNames(
        'inline-flex items-center gap-2.5 text-xl font-extrabold tracking-[-0.04em] sm:text-[1.65rem]',
        tone === 'dark' ? 'text-white' : 'text-ads-secondary',
        className,
      )}
      href="/"
    >
      <LogoMark className="size-9 shrink-0 sm:size-10" size={40} />
      <span>
        Portal
        <span
          className={tone === 'dark' ? 'text-emerald-300' : 'text-ads-primary'}
        >
          Fina
        </span>
      </span>
    </Link>
  );
}

import type { ComponentPropsWithoutRef } from 'react';

import { mergeClassNames } from '@/lib/merge-class-names';

type CardProps = ComponentPropsWithoutRef<'article'> &
  Readonly<{
    interactive?: boolean;
    tone?: 'surface' | 'primary' | 'secondary';
  }>;

const toneClassNames = {
  surface: 'border-ads-border bg-ads-surface text-ads-text',
  primary: 'border-transparent bg-ads-primary text-white',
  secondary: 'border-transparent bg-ads-secondary text-white',
} as const;

export function Card({
  className,
  interactive = false,
  tone = 'surface',
  ...props
}: CardProps) {
  return (
    <article
      className={mergeClassNames(
        'rounded-ads-xlarge border shadow-ads-subtle',
        toneClassNames[tone],
        interactive &&
          'transition duration-200 hover:-translate-y-0.5 hover:border-ads-border-strong hover:shadow-ads-soft',
        className,
      )}
      {...props}
    />
  );
}

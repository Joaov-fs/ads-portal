import type { ComponentPropsWithoutRef } from 'react';

import { mergeClassNames } from '@/lib/merge-class-names';

type SectionProps = ComponentPropsWithoutRef<'section'>;

export function Section({ className, ...props }: SectionProps) {
  return (
    <section
      className={mergeClassNames('py-16 md:py-ads-section', className)}
      {...props}
    />
  );
}

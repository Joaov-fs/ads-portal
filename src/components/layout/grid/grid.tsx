import type { ComponentPropsWithoutRef } from 'react';

import { mergeClassNames } from '@/lib/merge-class-names';

type GridColumns = 1 | 2 | 3 | 4;

type GridProps = ComponentPropsWithoutRef<'div'> &
  Readonly<{
    columns?: GridColumns;
  }>;

const columnClassNames: Record<GridColumns, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 md:grid-cols-2',
  3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
};

export function Grid({ className, columns = 3, ...props }: GridProps) {
  return (
    <div
      className={mergeClassNames(
        'grid gap-5 lg:gap-6',
        columnClassNames[columns],
        className,
      )}
      {...props}
    />
  );
}

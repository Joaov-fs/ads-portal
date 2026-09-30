import type { ComponentPropsWithoutRef } from 'react';

import { mergeClassNames } from '@/lib/merge-class-names';

type ContainerSize = 'content' | 'copy' | 'full';

type ContainerProps = ComponentPropsWithoutRef<'div'> &
  Readonly<{
    size?: ContainerSize;
  }>;

const sizeClassNames: Record<ContainerSize, string> = {
  content: 'max-w-ads-content',
  copy: 'max-w-ads-copy',
  full: 'max-w-none',
};

export function Container({
  className,
  size = 'content',
  ...props
}: ContainerProps) {
  return (
    <div
      className={mergeClassNames(
        'mx-auto w-full px-4 sm:px-6 lg:px-8',
        sizeClassNames[size],
        className,
      )}
      {...props}
    />
  );
}

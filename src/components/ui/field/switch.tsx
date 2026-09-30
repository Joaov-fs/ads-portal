import type { ComponentPropsWithoutRef } from 'react';

import { mergeClassNames } from '@/lib/merge-class-names';

type SwitchProps = Omit<ComponentPropsWithoutRef<'input'>, 'role' | 'type'> &
  Readonly<{
    description?: string;
    label: string;
  }>;

export function Switch({
  className,
  description,
  label,
  ...props
}: SwitchProps) {
  return (
    <label className="flex items-center justify-between gap-4 text-sm text-ads-text">
      <span className="grid gap-0.5">
        <span className="font-medium">{label}</span>
        {description ? (
          <span className="font-normal text-ads-muted">{description}</span>
        ) : null}
      </span>
      <span className="relative inline-flex shrink-0">
        <input
          className={mergeClassNames('peer sr-only', className)}
          role="switch"
          type="checkbox"
          {...props}
        />
        <span className="h-6 w-11 rounded-full bg-ads-border-strong transition peer-checked:bg-ads-primary peer-disabled:opacity-45 peer-focus-visible:ring-3 peer-focus-visible:ring-ads-primary-ring" />
        <span className="pointer-events-none absolute left-1 top-1 size-4 rounded-full bg-white shadow-ads-subtle transition-transform peer-checked:translate-x-5" />
      </span>
    </label>
  );
}

import type { ComponentPropsWithoutRef } from 'react';

import { mergeClassNames } from '@/lib/merge-class-names';

type CheckboxProps = Omit<ComponentPropsWithoutRef<'input'>, 'type'> &
  Readonly<{
    description?: string;
    label: string;
  }>;

export function Checkbox({
  className,
  description,
  label,
  ...props
}: CheckboxProps) {
  return (
    <label className="flex items-start gap-3 text-sm text-ads-text">
      <input
        className={mergeClassNames(
          'mt-0.5 size-5 shrink-0 accent-ads-primary',
          className,
        )}
        type="checkbox"
        {...props}
      />
      <span className="grid gap-0.5">
        <span className="font-medium">{label}</span>
        {description ? (
          <span className="font-normal text-ads-muted">{description}</span>
        ) : null}
      </span>
    </label>
  );
}

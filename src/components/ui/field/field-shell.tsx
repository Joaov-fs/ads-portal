import type { ReactNode } from 'react';

import { mergeClassNames } from '@/lib/merge-class-names';

type FieldShellProps = Readonly<{
  children: ReactNode;
  controlId: string;
  error?: string;
  hint?: string;
  label: string;
  optional?: boolean;
}>;

export function FieldShell({
  children,
  controlId,
  error,
  hint,
  label,
  optional = false,
}: FieldShellProps) {
  const descriptionId = `${controlId}-description`;

  return (
    <div className="grid gap-2 text-sm font-medium text-ads-text">
      <label
        className="flex items-baseline justify-between gap-3"
        htmlFor={controlId}
      >
        <span>{label}</span>
        {optional ? (
          <span className="text-xs font-normal text-ads-subtle">Opcional</span>
        ) : null}
      </label>
      {children}
      {error || hint ? (
        <span
          aria-live={error ? 'polite' : undefined}
          className={mergeClassNames(
            'text-xs font-normal',
            error ? 'text-ads-danger' : 'text-ads-muted',
          )}
          id={descriptionId}
        >
          {error ?? hint}
        </span>
      ) : null}
    </div>
  );
}

export const fieldControlClassName =
  'min-h-11 w-full rounded-ads-medium border border-ads-border-strong bg-ads-surface px-3.5 text-base text-ads-text shadow-ads-subtle transition placeholder:text-ads-subtle hover:border-ads-secondary focus:border-ads-primary focus:outline-none focus:ring-3 focus:ring-ads-primary-ring disabled:bg-ads-background disabled:text-ads-subtle';

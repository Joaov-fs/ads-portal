import { useId, type ComponentPropsWithoutRef } from 'react';

import { mergeClassNames } from '@/lib/merge-class-names';

import { FieldShell, fieldControlClassName } from './field-shell';

type TextareaProps = ComponentPropsWithoutRef<'textarea'> &
  Readonly<{
    error?: string;
    hint?: string;
    label: string;
    optional?: boolean;
  }>;

export function Textarea({
  className,
  error,
  hint,
  id,
  label,
  optional,
  rows = 4,
  ...props
}: TextareaProps) {
  const generatedId = useId();
  const controlId = id ?? generatedId;

  return (
    <FieldShell
      controlId={controlId}
      error={error}
      hint={hint}
      label={label}
      optional={optional}
    >
      <textarea
        aria-describedby={
          error || hint ? `${controlId}-description` : undefined
        }
        aria-invalid={Boolean(error)}
        className={mergeClassNames(
          fieldControlClassName,
          'resize-y py-3',
          error && 'border-ads-danger focus:border-ads-danger',
          className,
        )}
        id={controlId}
        rows={rows}
        {...props}
      />
    </FieldShell>
  );
}

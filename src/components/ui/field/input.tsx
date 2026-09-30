import { useId, type ComponentPropsWithoutRef, type ReactNode } from 'react';

import { mergeClassNames } from '@/lib/merge-class-names';

import { FieldShell, fieldControlClassName } from './field-shell';

export type InputKind =
  | 'text'
  | 'search'
  | 'email'
  | 'password'
  | 'money'
  | 'number'
  | 'percentage'
  | 'date';

type InputProps = Omit<
  ComponentPropsWithoutRef<'input'>,
  'prefix' | 'size' | 'type'
> &
  Readonly<{
    error?: string;
    hint?: string;
    kind?: InputKind;
    label: string;
    optional?: boolean;
    prefix?: ReactNode;
    suffix?: ReactNode;
  }>;

const typeByKind: Record<InputKind, ComponentPropsWithoutRef<'input'>['type']> =
  {
    text: 'text',
    search: 'search',
    email: 'email',
    password: 'password',
    money: 'text',
    number: 'number',
    percentage: 'number',
    date: 'date',
  };

export function Input({
  className,
  error,
  hint,
  id,
  kind = 'text',
  label,
  optional,
  prefix,
  suffix,
  ...props
}: InputProps) {
  const generatedId = useId();
  const controlId = id ?? generatedId;
  const inferredPrefix = kind === 'money' ? 'R$' : prefix;
  const inferredSuffix = kind === 'percentage' ? '%' : suffix;
  const inputMode =
    kind === 'money' || kind === 'percentage' ? 'decimal' : props.inputMode;

  return (
    <FieldShell
      controlId={controlId}
      error={error}
      hint={hint}
      label={label}
      optional={optional}
    >
      <span className="relative flex items-center">
        {inferredPrefix ? (
          <span className="pointer-events-none absolute left-3.5 text-sm text-ads-muted">
            {inferredPrefix}
          </span>
        ) : null}
        <input
          aria-describedby={
            error || hint ? `${controlId}-description` : undefined
          }
          aria-invalid={Boolean(error)}
          className={mergeClassNames(
            fieldControlClassName,
            Boolean(inferredPrefix) && 'pl-11',
            Boolean(inferredSuffix) && 'pr-10',
            error && 'border-ads-danger focus:border-ads-danger',
            className,
          )}
          id={controlId}
          inputMode={inputMode}
          step={
            props.step ??
            (kind === 'money' || kind === 'percentage' ? '0.01' : undefined)
          }
          type={typeByKind[kind]}
          {...props}
        />
        {inferredSuffix ? (
          <span className="pointer-events-none absolute right-3.5 text-sm text-ads-muted">
            {inferredSuffix}
          </span>
        ) : null}
      </span>
    </FieldShell>
  );
}

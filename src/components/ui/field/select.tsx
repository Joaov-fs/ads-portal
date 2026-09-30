import { useId, type ComponentPropsWithoutRef } from 'react';

import { mergeClassNames } from '@/lib/merge-class-names';

import { FieldShell, fieldControlClassName } from './field-shell';

export type SelectOption = Readonly<{
  disabled?: boolean;
  label: string;
  value: string;
}>;

type SelectProps = ComponentPropsWithoutRef<'select'> &
  Readonly<{
    error?: string;
    hint?: string;
    label: string;
    options: readonly SelectOption[];
    optional?: boolean;
    placeholder?: string;
  }>;

export function Select({
  className,
  error,
  hint,
  id,
  label,
  options,
  optional,
  placeholder,
  ...props
}: SelectProps) {
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
      <select
        aria-describedby={
          error || hint ? `${controlId}-description` : undefined
        }
        aria-invalid={Boolean(error)}
        className={mergeClassNames(
          fieldControlClassName,
          'appearance-none bg-[linear-gradient(45deg,transparent_50%,var(--ads-color-muted)_50%),linear-gradient(135deg,var(--ads-color-muted)_50%,transparent_50%)] bg-[position:calc(100%_-_18px)_50%,calc(100%_-_13px)_50%] bg-[size:5px_5px,5px_5px] bg-no-repeat pr-10',
          error && 'border-ads-danger focus:border-ads-danger',
          className,
        )}
        id={controlId}
        {...props}
      >
        {placeholder ? <option value="">{placeholder}</option> : null}
        {options.map((option) => (
          <option
            disabled={option.disabled}
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </FieldShell>
  );
}

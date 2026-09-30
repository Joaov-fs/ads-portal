import { useId, type ComponentPropsWithoutRef } from 'react';

import { mergeClassNames } from '@/lib/merge-class-names';

type SearchProps = Omit<ComponentPropsWithoutRef<'form'>, 'role'> &
  Readonly<{
    buttonLabel?: string;
    inputName?: string;
    inputValue?: string;
    label?: string;
    placeholder?: string;
  }>;

export function Search({
  action = '/pesquisa',
  buttonLabel = 'Buscar',
  className,
  inputName = 'q',
  inputValue,
  label = 'Pesquisar',
  method = 'get',
  placeholder = 'Busque ferramentas, notícias e guias',
  ...props
}: SearchProps) {
  const generatedId = useId();
  const inputId = `${inputName}-${generatedId}`;

  return (
    <form
      action={action}
      className={mergeClassNames(
        'flex w-full items-center rounded-ads-large border border-ads-border-strong bg-ads-surface p-1.5 shadow-ads-subtle transition focus-within:border-ads-primary focus-within:ring-3 focus-within:ring-ads-primary-ring',
        className,
      )}
      role="search"
      method={method}
      {...props}
    >
      <svg
        aria-hidden="true"
        className="ml-2 size-5 shrink-0 text-ads-muted"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          d="m21 21-4.4-4.4m2.4-5.1a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0Z"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
        />
      </svg>
      <label className="sr-only" htmlFor={inputId}>
        {label}
      </label>
      <input
        className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-base text-ads-text outline-none placeholder:text-ads-subtle"
        id={inputId}
        defaultValue={inputValue}
        name={inputName}
        placeholder={placeholder}
        type="search"
      />
      <button
        className="min-h-10 rounded-ads-medium bg-ads-primary px-4 text-sm font-semibold text-white transition hover:bg-ads-primary-strong"
        type="submit"
      >
        {buttonLabel}
      </button>
    </form>
  );
}

import type { ButtonHTMLAttributes, ReactNode } from 'react';

import { mergeClassNames } from '@/lib/merge-class-names';

export type ButtonVariant =
  'primary' | 'secondary' | 'outline' | 'ghost' | 'danger' | 'success';

export type ButtonSize = 'small' | 'medium' | 'large';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  Readonly<{
    children: ReactNode;
    isLoading?: boolean;
    size?: ButtonSize;
    variant?: ButtonVariant;
  }>;

const variantClassNames: Record<ButtonVariant, string> = {
  primary:
    'border-ads-primary bg-ads-primary text-white hover:border-ads-primary-strong hover:bg-ads-primary-strong',
  secondary:
    'border-ads-secondary bg-ads-secondary text-white hover:border-ads-secondary-strong hover:bg-ads-secondary-strong',
  outline:
    'border-ads-border-strong bg-ads-surface text-ads-secondary hover:border-ads-primary hover:bg-ads-primary-soft',
  ghost:
    'border-transparent bg-transparent text-ads-secondary hover:bg-ads-secondary-soft',
  danger:
    'border-ads-danger bg-ads-danger text-white hover:border-ads-danger-strong hover:bg-ads-danger-strong',
  success:
    'border-ads-success bg-ads-success text-white hover:border-ads-success-strong hover:bg-ads-success-strong',
};

const sizeClassNames: Record<ButtonSize, string> = {
  small: 'min-h-9 px-3 text-sm',
  medium: 'min-h-11 px-4 text-sm',
  large: 'min-h-12 px-5 text-base',
};

export function Button({
  children,
  className,
  disabled,
  isLoading = false,
  size = 'medium',
  type = 'button',
  variant = 'primary',
  ...props
}: ButtonProps) {
  const isDisabled = disabled || isLoading;

  return (
    <button
      className={mergeClassNames(
        'inline-flex items-center justify-center gap-2 rounded-ads-medium border font-semibold shadow-ads-subtle transition duration-150 hover:-translate-y-0.5 disabled:pointer-events-none disabled:opacity-45 disabled:hover:translate-y-0',
        variantClassNames[variant],
        sizeClassNames[size],
        className,
      )}
      disabled={isDisabled}
      type={type}
      {...props}
    >
      {isLoading ? (
        <span
          aria-hidden="true"
          className="size-4 animate-spin rounded-full border-2 border-current border-r-transparent"
        />
      ) : null}
      <span>{children}</span>
    </button>
  );
}

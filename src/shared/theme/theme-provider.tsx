import type { ReactNode } from 'react';

type ThemeProviderProps = Readonly<{
  children: ReactNode;
}>;

export function ThemeProvider({ children }: ThemeProviderProps) {
  return <div data-theme="light">{children}</div>;
}

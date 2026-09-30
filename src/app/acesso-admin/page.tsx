import type { Metadata } from 'next';
import { notFound, redirect } from 'next/navigation';

import { Container } from '@/components/layout/container';
import { Logo } from '@/components/navigation/logo';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/field';
import {
  getMockOperator,
  mockOperators,
  mockPassword,
  publishingDemoEnabled,
} from '@/features/publishing/auth';

import { loginAction } from './actions';

export const metadata: Metadata = {
  title: 'Acesso operacional',
  alternates: { canonical: '/acesso-admin' },
  robots: { index: false, follow: false },
};

type LoginPageProps = Readonly<{
  searchParams: Promise<{ erro?: string }>;
}>;

export default async function LoginPage({ searchParams }: LoginPageProps) {
  if (!publishingDemoEnabled) notFound();
  if (await getMockOperator()) redirect('/admin');
  const hasError = Boolean((await searchParams).erro);

  return (
    <main className="grid min-h-svh place-items-center bg-ads-secondary px-4 py-12">
      <Container className="grid max-w-md gap-6" size="full">
        <div className="flex justify-center rounded-ads-large bg-white px-5 py-4 shadow-ads-soft">
          <Logo />
        </div>
        <Card className="grid gap-7 p-6 sm:p-8">
          <header className="grid gap-2">
            <span className="text-ads-eyebrow font-bold uppercase tracking-[0.14em] text-ads-primary-strong">
              Operação editorial
            </span>
            <h1 className="text-2xl font-bold text-ads-secondary">
              Acesse o painel
            </h1>
            <p className="text-sm leading-6 text-ads-muted">
              Ambiente local demonstrativo, sem autenticação real.
            </p>
          </header>

          {hasError ? (
            <p
              className="rounded-ads-medium bg-ads-danger-soft px-4 py-3 text-sm font-medium text-ads-danger"
              role="alert"
            >
              Usuário ou senha incorretos.
            </p>
          ) : null}

          <form action={loginAction} className="grid gap-5">
            <Input
              autoComplete="username"
              label="Usuário"
              name="username"
              placeholder="operador.ana"
              required
            />
            <Input
              autoComplete="current-password"
              kind="password"
              label="Senha"
              name="password"
              placeholder="Digite a senha local"
              required
            />
            <Button className="w-full" size="large" type="submit">
              Entrar no painel
            </Button>
          </form>

          <aside className="rounded-ads-large border border-ads-border bg-ads-background p-4 text-sm leading-6 text-ads-muted">
            <strong className="block text-ads-text">
              Acessos desta Sprint
            </strong>
            {mockOperators.map((operator) => (
              <span className="block" key={operator.id}>
                {operator.username} / {mockPassword}
              </span>
            ))}
          </aside>
        </Card>
      </Container>
    </main>
  );
}

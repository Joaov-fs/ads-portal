'use client';

import { Button } from '@/components/ui/button';

export default function ErrorPage({
  reset,
}: Readonly<{ error: Error & { digest?: string }; reset: () => void }>) {
  return (
    <main className="grid min-h-[60svh] place-items-center px-4 py-16">
      <div className="grid max-w-xl gap-5 text-center" role="alert">
        <span className="text-ads-eyebrow font-bold uppercase tracking-[0.14em] text-ads-primary-strong">
          Não foi possível carregar
        </span>
        <h1 className="text-ads-title font-bold text-ads-secondary">
          Algo deu errado.
        </h1>
        <p className="leading-7 text-ads-muted">
          Tente novamente. Se o problema continuar, volte à página inicial.
        </p>
        <Button className="mx-auto" onClick={reset}>
          Tentar novamente
        </Button>
      </div>
    </main>
  );
}

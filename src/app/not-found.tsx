import Link from 'next/link';

import { Container } from '@/components/layout/container';
import { Card } from '@/components/ui/card';
import { Search } from '@/components/ui/search';

export default function NotFound() {
  return (
    <main className="grid min-h-[65svh] place-items-center py-16">
      <Container>
        <Card className="mx-auto grid max-w-3xl gap-8 p-6 text-center sm:p-10 lg:p-14">
          <div className="grid gap-4">
            <span className="text-ads-eyebrow font-bold uppercase tracking-[0.16em] text-ads-primary-strong">
              Erro 404
            </span>
            <h1 className="text-ads-title font-bold tracking-tight text-ads-secondary">
              Esta página não foi encontrada.
            </h1>
            <p className="mx-auto max-w-xl leading-7 text-ads-muted">
              O endereço pode ter mudado. Pesquise o que precisa ou volte para a
              página inicial.
            </p>
          </div>
          <Search />
          <Link
            className="mx-auto inline-flex min-h-11 items-center justify-center rounded-ads-medium bg-ads-secondary px-5 text-sm font-semibold text-white transition hover:bg-ads-secondary-strong"
            href="/"
          >
            Voltar ao início
          </Link>
        </Card>
      </Container>
    </main>
  );
}

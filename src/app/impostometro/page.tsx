import Link from 'next/link';

import { TaxCounter } from '@/components/home';
import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Breadcrumb } from '@/components/navigation/breadcrumb';
import { Card } from '@/components/ui/card';
import { buildInstitutionalMetadata } from '@/content';
import { estimateFacts, formatBrl } from '@/features/impostometro/estimate';

const description =
  'Quanto a União já arrecadou em 2026? Estimativa em tempo real a partir dos dados oficiais da Receita Federal, com método e fontes explicados.';

export const metadata = buildInstitutionalMetadata(
  'Impostômetro: quanto já foi arrecadado em 2026',
  description,
  '/impostometro',
);

const composition = [
  ['Previdência Social', 'R$ 737,57 bilhões'],
  ['PIS/Cofins', 'R$ 581,95 bilhões'],
  ['IOF', 'R$ 86,48 bilhões'],
  ['Total de 2025', 'R$ 2,89 trilhões'],
] as const;

const tools = [
  ['/calculadoras/salario-liquido', 'Quanto de imposto sai do seu salário'],
  ['/calculadoras/irrf', 'Calcule o seu Imposto de Renda retido'],
  ['/calculadoras/inss', 'Veja a contribuição ao INSS por faixa'],
  ['/calculadoras/das-limite-mei', 'Imposto e limite do MEI'],
] as const;

export default function ImpostometroPage() {
  return (
    <main>
      <header className="bg-ads-secondary-strong py-14 text-white sm:py-20">
        <Container>
          <Breadcrumb
            items={[{ href: '/', label: 'Início' }, { label: 'Impostômetro' }]}
          />
          <div className="mt-8 grid gap-5">
            <span className="text-ads-eyebrow font-bold uppercase tracking-[0.16em] text-emerald-200">
              Estimativa federal · 2026
            </span>
            <h1 className="max-w-3xl text-ads-title font-extrabold tracking-tight">
              Quanto a União já arrecadou em 2026
            </h1>
            <p
              aria-live="off"
              className="text-4xl font-extrabold tabular-nums sm:text-6xl"
            >
              <TaxCounter />
            </p>
            <p className="max-w-2xl leading-7 text-white/80">
              Valor estimado em tempo real, só de tributos federais. Parte de R$
              2,11 trilhões confirmados pela Receita Federal de janeiro a
              agosto.
            </p>
          </div>
        </Container>
      </header>

      <Section>
        <Container size="copy">
          <div className="grid gap-8">
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                ['Por segundo', formatBrl(estimateFacts.perSecond)],
                ['Por dia', formatBrl(estimateFacts.perDay)],
                [
                  'Por brasileiro, por dia',
                  formatBrl(estimateFacts.perPersonPerDay),
                ],
              ].map(([label, value]) => (
                <Card className="grid gap-1 p-5" key={label}>
                  <span className="text-sm text-ads-muted">{label}</span>
                  <strong className="text-xl text-ads-secondary">
                    {value}
                  </strong>
                </Card>
              ))}
            </div>

            <Card className="grid gap-4 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-ads-secondary">
                Como a estimativa é feita
              </h2>
              <p className="leading-7 text-ads-muted">
                Pegamos o total arrecadado de janeiro a agosto de 2026 e
                dividimos pelos segundos do período. O resultado é uma média de
                cerca de {formatBrl(estimateFacts.perSecond)} por segundo, que o
                contador soma desde 1º de janeiro. É uma aproximação: a
                arrecadação real varia ao longo do ano, com picos em março e
                abril, por causa do Imposto de Renda, e em dezembro. Por isso o
                valor de hoje pode ficar acima ou abaixo do real.
              </p>
              <p className="leading-7 text-ads-muted">
                Atualizamos a base a cada boletim mensal da Receita Federal.
                Este contador cobre apenas a União. Não inclui o ICMS dos
                estados nem o ISS e o IPTU dos municípios, então não é
                comparável a contadores que somam os três níveis.
              </p>
            </Card>

            <Card className="grid gap-4 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-ads-secondary">
                De onde vem o dinheiro (2025)
              </h2>
              <dl className="grid gap-2">
                {composition.map(([label, value]) => (
                  <div
                    className="flex justify-between gap-4 border-b border-ads-border py-2 last:border-0"
                    key={label}
                  >
                    <dt className="text-ads-muted">{label}</dt>
                    <dd className="font-semibold text-ads-secondary">
                      {value}
                    </dd>
                  </div>
                ))}
              </dl>
              <p className="text-sm text-ads-muted">
                A arrecadação de 2025 foi o maior valor já registrado, com alta
                real de 3,75% sobre 2024. Os demais tributos (Imposto de Renda,
                CSLL, IPI, importação e outros) completam o total.
              </p>
            </Card>

            <Card className="grid gap-4 p-6 sm:p-8">
              <h2 className="text-2xl font-bold text-ads-secondary">
                Quanto disso passa pelo seu bolso?
              </h2>
              <p className="leading-7 text-ads-muted">
                Parte do que você paga em INSS e Imposto de Renda entra nessa
                conta. Faça o cálculo com os seus números:
              </p>
              <ul className="grid gap-2">
                {tools.map(([href, label]) => (
                  <li key={href}>
                    <Link
                      className="font-semibold text-ads-primary-strong hover:underline"
                      href={href}
                    >
                      {label} →
                    </Link>
                  </li>
                ))}
              </ul>
            </Card>

            <p className="text-sm text-ads-muted">
              Fontes: Receita Federal do Brasil (Análise da Arrecadação das
              Receitas Federais, boletim de agosto de 2026 e balanço de 2025) e
              IBGE (população estimada).
            </p>
          </div>
        </Container>
      </Section>
    </main>
  );
}

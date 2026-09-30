import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { AdSlot } from '@/components/advertising/ad-slot';
import {
  CalculatorCard,
  FeatureCard,
  GuideCard,
  IndicatorCard,
  NewsCard,
} from '@/components/cards';
import { Container } from '@/components/layout/container';
import { Grid } from '@/components/layout/grid';
import { Section } from '@/components/layout/section';
import { Breadcrumb } from '@/components/navigation/breadcrumb';
import { Navigation } from '@/components/navigation/navigation';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import {
  Checkbox,
  Input,
  Select,
  Switch,
  Textarea,
} from '@/components/ui/field';
import { Search } from '@/components/ui/search';
import { primaryNavigationItems } from '@/config/navigation';

export const metadata: Metadata = {
  title: 'Design System',
  description: 'Biblioteca visual de desenvolvimento do PortalFina.',
  robots: { index: false, follow: false },
};

const colors = [
  { className: 'bg-ads-primary', label: 'Primary', value: '#147d64' },
  { className: 'bg-ads-secondary', label: 'Secondary', value: '#164e5a' },
  { className: 'bg-ads-text', label: 'Text', value: '#172321' },
  { className: 'bg-ads-background', label: 'Background', value: '#f5f8f7' },
  { className: 'bg-ads-danger', label: 'Danger', value: '#c9363e' },
  { className: 'bg-ads-success', label: 'Success', value: '#087a55' },
] as const;

function SectionHeading({
  description,
  title,
}: Readonly<{ description: string; title: string }>) {
  return (
    <div className="mb-8 grid max-w-2xl gap-2">
      <h2 className="text-ads-title font-bold tracking-tight text-ads-secondary">
        {title}
      </h2>
      <p className="leading-7 text-ads-muted">{description}</p>
    </div>
  );
}

export default function DesignSystemPage() {
  if (process.env.NODE_ENV === 'production') notFound();

  return (
    <div className="min-h-svh bg-ads-background">
      <main>
        <section className="border-b border-ads-border bg-ads-surface py-16 md:py-24">
          <Container>
            <Breadcrumb
              items={[
                { href: '/', label: 'Início' },
                { label: 'Design System' },
              ]}
            />
            <div className="mt-10 grid max-w-3xl gap-5">
              <span className="text-ads-eyebrow font-bold uppercase tracking-[0.16em] text-ads-primary-strong">
                Biblioteca visual · Sprint 1
              </span>
              <h1 className="text-ads-display font-bold tracking-[-0.045em] text-ads-secondary">
                Clareza para decisões importantes.
              </h1>
              <p className="max-w-[var(--ads-size-lead-measure)] text-ads-lead leading-8 text-ads-muted">
                Primitivos e composições reutilizáveis para uma experiência
                limpa, confiável e consistente em qualquer tela.
              </p>
            </div>
          </Container>
        </section>

        <Section aria-labelledby="tokens-title">
          <Container>
            <SectionHeading
              description="Cores semânticas, espaçamento generoso, cantos médios e sombras leves formam a base da interface."
              title="Design tokens"
            />
            <Grid columns={3}>
              {colors.map((color) => (
                <Card className="overflow-hidden" key={color.label}>
                  <div className={`h-24 ${color.className}`} />
                  <div className="flex items-center justify-between gap-3 p-4 text-sm">
                    <strong
                      id={
                        color.label === 'Primary' ? 'tokens-title' : undefined
                      }
                    >
                      {color.label}
                    </strong>
                    <code className="text-xs text-ads-muted">
                      {color.value}
                    </code>
                  </div>
                </Card>
              ))}
            </Grid>
          </Container>
        </Section>

        <Section
          aria-labelledby="typography-title"
          className="border-y border-ads-border bg-ads-surface"
        >
          <Container>
            <SectionHeading
              description="Escala responsiva com contraste forte entre títulos editoriais e texto de leitura."
              title="Typography"
            />
            <Card className="grid gap-8 p-6 md:p-10">
              <div>
                <span className="text-xs uppercase tracking-widest text-ads-subtle">
                  Display
                </span>
                <p
                  className="mt-2 text-ads-display font-bold tracking-[-0.045em] text-ads-secondary"
                  id="typography-title"
                >
                  Finanças simples
                </p>
              </div>
              <div>
                <span className="text-xs uppercase tracking-widest text-ads-subtle">
                  Title
                </span>
                <p className="mt-2 text-ads-title font-bold text-ads-secondary">
                  Informação que ajuda você a decidir
                </p>
              </div>
              <div className="max-w-ads-copy">
                <span className="text-xs uppercase tracking-widest text-ads-subtle">
                  Body
                </span>
                <p className="mt-2 leading-7 text-ads-muted">
                  Conteúdo direto, hierarquia previsível e medidas de leitura
                  confortáveis tornam assuntos complexos mais fáceis de
                  entender.
                </p>
              </div>
            </Card>
          </Container>
        </Section>

        <Section aria-labelledby="containers-title">
          <Container>
            <SectionHeading
              description="Containers fluidos e grids responsivos mantêm o ritmo visual de 360 a 1440 pixels."
              title="Containers & grid"
            />
            <Grid columns={4}>
              {[1, 2, 3, 4].map((item) => (
                <div
                  className="grid min-h-28 place-items-center rounded-ads-large border border-dashed border-ads-border-strong bg-ads-surface text-sm font-semibold text-ads-muted"
                  id={item === 1 ? 'containers-title' : undefined}
                  key={item}
                >
                  Coluna {item}
                </div>
              ))}
            </Grid>
          </Container>
        </Section>

        <Section
          aria-labelledby="buttons-title"
          className="border-y border-ads-border bg-ads-surface"
        >
          <Container>
            <SectionHeading
              description="Variações consistentes para hierarquia, feedback e estados de interação."
              title="Buttons"
            />
            <Card
              className="flex flex-wrap items-center gap-3 p-6"
              id="buttons-title"
            >
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="danger">Danger</Button>
              <Button variant="success">Success</Button>
              <Button isLoading>Processando</Button>
              <Button disabled>Disabled</Button>
            </Card>
          </Container>
        </Section>

        <Section aria-labelledby="inputs-title">
          <Container>
            <SectionHeading
              description="Campos acessíveis compartilham label, ajuda, erro, foco e estados desabilitados."
              title="Inputs"
            />
            <Card
              className="grid gap-6 p-6 md:grid-cols-2 md:p-8"
              id="inputs-title"
            >
              <Input label="Nome completo" placeholder="Seu nome" />
              <Input
                kind="search"
                label="Busca"
                placeholder="O que você procura?"
              />
              <Input
                kind="email"
                label="E-mail"
                placeholder="voce@exemplo.com"
              />
              <Input
                defaultValue="1.250,00"
                hint="Informe o valor bruto."
                kind="money"
                label="Valor"
              />
              <Input defaultValue="12" kind="number" label="Parcelas" min={1} />
              <Input defaultValue="10.5" kind="percentage" label="Taxa" />
              <Input kind="date" label="Data" />
              <Select
                label="Categoria"
                options={[
                  { label: 'Trabalho', value: 'trabalho' },
                  { label: 'Finanças', value: 'financas' },
                  { label: 'Benefícios', value: 'beneficios' },
                ]}
                placeholder="Selecione uma categoria"
              />
              <Input
                error="Revise o valor informado."
                label="Campo com erro"
                placeholder="Exemplo de validação"
              />
              <div className="md:col-span-2">
                <Textarea
                  label="Mensagem"
                  optional
                  placeholder="Escreva uma mensagem"
                />
              </div>
              <Checkbox
                defaultChecked
                description="Exemplo de texto auxiliar."
                label="Aceito receber atualizações"
              />
              <Switch
                defaultChecked
                description="Controle binário reutilizável."
                label="Atualizações automáticas"
              />
            </Card>
          </Container>
        </Section>

        <Section
          aria-labelledby="search-title"
          className="border-y border-ads-border bg-ads-secondary"
        >
          <Container>
            <div className="mx-auto grid max-w-3xl gap-6 text-center">
              <div className="grid gap-2">
                <h2
                  className="text-ads-title font-bold text-white"
                  id="search-title"
                >
                  Search
                </h2>
                <p className="text-white/70">
                  Busca principal em destaque, pronta para receber uma fonte de
                  dados em uma Sprint futura.
                </p>
              </div>
              <Search />
            </div>
          </Container>
        </Section>

        <Section aria-labelledby="cards-title">
          <Container>
            <SectionHeading
              description="Composições especializadas partem do mesmo card base e mantêm hierarquia previsível."
              title="Cards"
            />
            <Grid columns={3} id="cards-title">
              <NewsCard
                category="Economia"
                date="24 set 2026"
                description="Entenda o cenário em poucos minutos e veja os próximos passos."
                href="#cards-title"
                readingTime="4 min"
                title="O que mudou e como isso afeta seu bolso"
              />
              <GuideCard
                category="Guia"
                description="Uma explicação clara, organizada e útil para consultar quando precisar."
                href="#cards-title"
                readingTime="8 min de leitura"
                title="Como organizar sua reserva de emergência"
              />
              <CalculatorCard
                category="Finanças"
                description="Simule cenários com uma experiência simples e consistente."
                href="#cards-title"
                title="Juros compostos"
              />
              <IndicatorCard
                change="0,18%"
                label="Dólar comercial"
                note="Atualização ilustrativa"
                trend="up"
                value="R$ 5,42"
              />
              <IndicatorCard
                change="0,08%"
                label="IPCA"
                note="Variação mensal ilustrativa"
                trend="down"
                value="0,24%"
              />
              <FeatureCard
                description="Descubra ferramentas por objetivo, sem precisar conhecer termos técnicos."
                eyebrow="Descoberta"
                href="#cards-title"
                title="Encontre o próximo passo"
              />
            </Grid>
          </Container>
        </Section>

        <Section
          aria-labelledby="navigation-title"
          className="border-y border-ads-border bg-ads-surface"
        >
          <Container>
            <SectionHeading
              description="O Header demonstra a navegação responsiva completa; abaixo estão os padrões horizontal e vertical."
              title="Navigation"
            />
            <Grid columns={2} id="navigation-title">
              <Card className="overflow-x-auto p-6">
                <Navigation items={primaryNavigationItems.slice(0, 4)} />
              </Card>
              <Card className="p-3">
                <Navigation
                  items={primaryNavigationItems.slice(0, 4)}
                  orientation="vertical"
                />
              </Card>
            </Grid>
          </Container>
        </Section>

        <Section aria-labelledby="breadcrumb-title">
          <Container>
            <SectionHeading
              description="Trilha semântica com estado atual explícito para orientação contextual."
              title="Breadcrumb"
            />
            <Card className="p-6" id="breadcrumb-title">
              <Breadcrumb
                items={[
                  { href: '/', label: 'Início' },
                  { href: '/calculadoras', label: 'Calculadoras' },
                  { label: 'Juros compostos' },
                ]}
              />
            </Card>
          </Container>
        </Section>

        <Section
          aria-labelledby="adslot-title"
          className="border-t border-ads-border bg-ads-surface"
        >
          <Container>
            <SectionHeading
              description="Placeholder reutilizável e não invasivo para futuras posições publicitárias."
              title="AdSlot"
            />
            <div id="adslot-title">
              <AdSlot size="banner" />
            </div>
          </Container>
        </Section>
      </main>
    </div>
  );
}

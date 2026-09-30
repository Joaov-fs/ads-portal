import type { ReactNode } from 'react';

import { Container } from '@/components/layout/container';
import { Section } from '@/components/layout/section';
import { Breadcrumb } from '@/components/navigation/breadcrumb';
import { Card } from '@/components/ui/card';

export type InstitutionalSection = Readonly<{
  heading: string;
  content: readonly ReactNode[];
}>;

type InstitutionalPageTemplateProps = Readonly<{
  description: string;
  eyebrow?: string;
  sections: readonly InstitutionalSection[];
  title: string;
}>;

export function InstitutionalPageTemplate({
  description,
  eyebrow = 'Institucional',
  sections,
  title,
}: InstitutionalPageTemplateProps) {
  return (
    <main>
      <header className="border-b border-ads-border bg-ads-surface py-12 sm:py-16">
        <Container>
          <Breadcrumb
            items={[{ href: '/', label: 'Início' }, { label: title }]}
          />
          <div className="mt-8 grid max-w-3xl gap-4">
            <span className="text-ads-eyebrow font-bold uppercase tracking-[0.14em] text-ads-primary-strong">
              {eyebrow}
            </span>
            <h1 className="text-ads-title font-bold tracking-tight text-ads-secondary">
              {title}
            </h1>
            <p className="text-ads-lead leading-8 text-ads-muted">
              {description}
            </p>
          </div>
        </Container>
      </header>

      <Section>
        <Container size="copy">
          <Card className="grid gap-10 p-6 sm:p-10">
            {sections.map((section) => (
              <section className="grid gap-4" key={section.heading}>
                <h2 className="text-2xl font-bold text-ads-secondary">
                  {section.heading}
                </h2>
                <div className="grid gap-4 leading-7 text-ads-muted">
                  {section.content.map((content, index) => (
                    <div key={`${section.heading}-${index}`}>{content}</div>
                  ))}
                </div>
              </section>
            ))}
          </Card>
        </Container>
      </Section>
    </main>
  );
}

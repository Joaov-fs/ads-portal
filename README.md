# ADS Platform

Public product experience for the platform described in [`PROJECT.md`](PROJECT.md),
built on the reusable visual library from Sprint 1.

## Stack

- Next.js App Router and React
- TypeScript in strict mode
- Tailwind CSS and centralized design tokens
- ESLint and Prettier
- Vitest, Testing Library, and jsdom
- pnpm

## Getting started

```bash
pnpm install
pnpm dev
```

The local application is available at `http://localhost:3000`.

## Visual library

The development-only catalog is available at
`http://localhost:3000/design-system`. It presents the design tokens, layout
primitives, buttons, fields, search, cards, navigation, breadcrumb, and ad
placeholder created in Sprint 1. The route is excluded from search indexing and
contains presentation examples only.

## Public experience

The home page composes the shared library into a complete discovery journey with
search, categories, popular tools, mocked news, guides, economic indicators,
newsletter, and five advertising placeholders. Search results are available at
`/pesquisa?q=termo`, and the seven typed category pages share the route
`/categorias/[slug]`.

Public discovery configuration and mocked indicators remain in
`src/features/public-content`. Editorial cards there are derived from the
content repository, so route components do not own or duplicate collections.

## Content engine

News, guides, and calculator content use typed files behind a replaceable
repository in `src/content`. One pipeline derives metadata, canonical URLs,
Open Graph and Twitter data, breadcrumbs, Schema.org graphs, FAQ, related
content, author details, reading time, and update dates.

Public indexes are available at `/noticias`, `/guias`, and `/calculadoras`.
Detail pages are statically generated with friendly slugs and rendered by
explicit domain templates over the same shared pipeline. Calculator pages are
functional simulations backed by pure rules in `src/calculators`, with shared
validation, result explanations, SEO, and related-content sections.

## Production readiness

Sprint 5 adds environment-driven canonical URLs, GA4, Google Tag Manager,
Microsoft Clarity, Search Console verification, and an AdSense-ready slot
contract. External scripts stay disabled unless explicitly enabled; no real
service identifier is stored in the repository.

Technical SEO includes automatic robots and sitemap routes, PWA manifest,
browser configuration, generated favicon and platform icons, global social
metadata, and Organization/WebSite/SearchAction structured data. Institutional
pages are available at `/sobre`, `/contato`, `/politica-de-privacidade`,
`/politica-de-cookies`, `/termos-de-uso`, and `/autor`.

For local configuration:

```bash
cp .env.example .env.local
```

See [`PRODUCTION.md`](PRODUCTION.md) for the complete Vercel, domain, DNS,
HTTPS, analytics, Search Console, and AdSense publication checklist.

## Quality release

Sprint 6 audited the complete public experience before the first publication.
The release preserves the static-first architecture and improves navigation,
accessibility, error recovery, social metadata, date presentation, and honest
states for capabilities that do not yet have a backend. No CMS, database,
authentication, dashboard, or advertising integration was introduced.

See
[`docs/SPRINT-6-QUALITY-REPORT.md`](docs/SPRINT-6-QUALITY-REPORT.md) for the
findings, completed improvements, future recommendations, and final publication
checklist.

## Publishing operation

Sprint 7 adds a focused editorial operation at `/admin`, with a separate
administrative shell, dashboard, content lists, search, filters, prepared
pagination, a structured editor, and the Draft → Review → Published workflow.
News can reference guides, and guides can reference calculators.

The demonstration login is available at `/acesso-admin` for the two local
operators shown on that page. The session and browser persistence are explicitly
mocked: there is no real authentication, permission system, database, upload, or
Supabase integration. Operational changes are stored only in that browser and do
not alter the statically generated public catalog.

The `PublishingRepository` boundary keeps persistence replaceable. A future
Supabase adapter can implement the same contract while the dashboard, lists,
editor, and workflow rules remain unchanged.

## Product experience

Sprint 8 turns the existing public catalog into a more guided decision journey.
The Home now curates three high-intent calculators instead of exposing the full
catalog, adds explicit trust signals, and uses clearer calls to action and
section hierarchy.

Every calculator shares a complete post-result experience with the main value,
calculation explanation, input memory, interpretation, recommended next steps,
important warnings, common mistakes, FAQ, official sources, revision date, and
related tools, guides, and news. News pages open with an impact summary, while
guides expose learning outcomes and practical examples. Advertising remains a
neutral, reserved-space contract and is positioned at natural content breaks.

See [`docs/SPRINT-8-PRODUCT-EXPERIENCE.md`](docs/SPRINT-8-PRODUCT-EXPERIENCE.md)
for the complete review and validation record.

## Release candidate 1

Version 1.0 is prepared as a static-first public release. Production now fails
early on Vercel when the canonical site URL is absent or invalid, administrative
mock routes and the design-system catalog return 404 in production, and private
routes also emit `X-Robots-Tag`. Security headers are applied globally.

The 2026 INSS, IRRF, PLR, minimum-wage, and unemployment-insurance references
were reconciled with official sources. Calculator inputs that act as divisors
reject zero, zero-interest installments remain valid, and negative hour balances
are preserved. Advertising is limited to two natural breaks on the Home and one
post-content slot on index/detail pages; every slot stays absent from the DOM
until the future AdSense adapter is deliberately enabled.

## Documentation

- [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md): boundaries and rendering model.
- [`docs/DEVELOPMENT.md`](docs/DEVELOPMENT.md): setup, commands, and delivery flow.
- [`docs/SPRINT-6-QUALITY-REPORT.md`](docs/SPRINT-6-QUALITY-REPORT.md): pre-publication quality audit and checklist.
- [`docs/SPRINT-7-REPORT.md`](docs/SPRINT-7-REPORT.md): publishing operation delivery report.
- [`docs/SPRINT-8-PRODUCT-EXPERIENCE.md`](docs/SPRINT-8-PRODUCT-EXPERIENCE.md): product experience, SEO, design, and monetization review.
- [`PRODUCTION.md`](PRODUCTION.md): production deployment and integrations.
- [`docs/adr/0001-application-foundation.md`](docs/adr/0001-application-foundation.md): foundation decision record.
- [`docs/adr/0002-sprint-0-architecture-consolidation.md`](docs/adr/0002-sprint-0-architecture-consolidation.md): source boundaries and theme foundation.
- [`docs/adr/0003-visual-library.md`](docs/adr/0003-visual-library.md): reusable visual library organization.
- [`docs/adr/0004-public-product-composition.md`](docs/adr/0004-public-product-composition.md): public composition and mocked content boundary.
- [`docs/adr/0005-file-content-engine.md`](docs/adr/0005-file-content-engine.md): file-backed content repository and shared generation pipeline.
- [`docs/adr/0006-production-infrastructure.md`](docs/adr/0006-production-infrastructure.md): environment-driven production integrations and SEO infrastructure.
- [`docs/adr/0007-local-publishing-operation.md`](docs/adr/0007-local-publishing-operation.md): local operational repository, mocked session, and workflow boundary.
  \=======

# ads-portal

Projeto ADS

> > > > > > > 6e9dec6687527c412f9b3e5b71cfbdbe8fbfc4fb

# ADR 0005: File-backed content engine and shared generation pipeline

- Status: Accepted
- Date: 2026-09-25

## Context

Sprint 3 must support hundreds of news items, evergreen guides, and calculators
without a CMS or database. Every content page needs consistent SEO and discovery
features while data remains independent from React and Next.js routes.

Sprint 2 mocks supported discovery cards but did not represent complete
documents and would become a second source of truth after detail pages existed.

## Decision

Define a discriminated, read-only content model in `src/content` and store every
mock document in a separate TypeScript file. Access documents through the
`ContentRepository` interface, initially implemented by
`FileContentRepository`.

Use one pure pipeline to resolve authors, calculate reading time, rank related
content, build friendly paths and breadcrumbs, and emit Article, NewsArticle,
WebApplication, FAQPage, and BreadcrumbList Schema.org graphs. Keep Next.js
`Metadata` conversion in one framework adapter.

Expose explicit `NewsTemplate`, `GuideTemplate`, and `CalculatorTemplate`
components over one shared page renderer. All detail routes use one route
factory for lookup, static parameters, 404 behavior, and metadata. Index routes
use one list template. Home, search, and sitemap consume summaries from the same
repository.

Calculator files describe fields and explanatory content only. No real
calculation, CMS, database, authentication, analytics, or advertising
integration is added in this Sprint.

## Consequences

Adding content requires a typed file and one registry export, not a new page or
SEO implementation. A future database adapter can replace file access while
routes and templates keep their contracts.

The in-memory registry is intentionally simple. A future adapter will need
uniqueness validation, pagination, caching, drafts, and publication workflows
when those requirements exist.

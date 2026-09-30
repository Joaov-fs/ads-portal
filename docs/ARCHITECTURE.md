# Architecture

## Goals

The foundation favors static or server rendering, small client bundles, typed
boundaries, and incremental delivery. It follows the performance, SEO,
accessibility, and scalability requirements in `PROJECT.md`.

## Layers

- `src/app`: routes, layouts, route metadata, and page composition.
- `src/components`: reusable presentation and layout primitives.
- `src/content`: typed documents, repository contract, generation pipeline, and
  framework metadata adapter.
- `src/features`: complete user capabilities and their local orchestration.
- `src/calculators`: calculator rules, schemas, metadata, and composition
  helpers.
- `src/news`: news content models, adapters, and feature-specific helpers.
- `src/guides`: evergreen guide content models and helpers.
- `src/shared`: cross-cutting UI, theme, accessibility, and composition helpers.
- `src/services`: external APIs, repositories, and infrastructure adapters.
- `src/hooks`: React hooks shared by more than one feature.
- `src/lib`: framework-independent helpers.
- `src/config`: product and platform configuration, including design tokens.
- `src/types`: only types shared across multiple ownership boundaries.

Dependencies should flow from pages and features toward components, services,
calculators, news, guides, and shared infrastructure. Calculator rules must
remain independent from React and infrastructure.

## Visual library

Reusable presentation code is organized by responsibility:

- `src/components/ui`: low-level controls and surfaces such as buttons, fields,
  search, and the base card.
- `src/components/layout`: container, section, and responsive grid primitives.
- `src/components/cards`: typed editorial and tool card compositions.
- `src/components/navigation`: logo, navigation, header, footer, and breadcrumb.
- `src/components/advertising`: advertising presentation primitives such as
  `AdSlot`.

Components accept native element props where practical and expose narrow typed
variants for visual decisions. Product copy, data fetching, formatting rules,
and calculation logic do not belong in these components. Navigation content is
centralized in `src/config/navigation.ts`.

The `/design-system` route is a static, non-indexed development catalog. It may
compose every visual component but must not contain product behavior.

## Public product composition

The root layout owns the definitive `Header` and `Footer`, so every public route
shares the same navigation and product shell. Pages compose only components from
the Sprint 1 library; Sprint 2 does not introduce parallel presentation
primitives.

Typed mocked content and its query function live in
`src/features/public-content`. Route files consume that public API and remain
independent from the eventual data source. Replacing mocks with a repository or
service must preserve the domain types and page composition contracts.

The category structure uses one statically generated dynamic route,
`/categorias/[slug]`, for all supported categories. Search reads the `q` request
parameter in the server page and delegates normalization and matching to the
feature module. This keeps browser JavaScript optional and prepares both routes
for future service integration.

The home page owns exactly five named `AdSlot` placements. Their labels are
centralized with public content so a future advertising adapter can target
stable positions without coupling pages to an ad network. Sprint 8 positions
them at natural section boundaries and reduces placeholder prominence. Detail
pages use one related-content placement; calculators expose an additional slot
only after a result exists, aligning viewability with user intent.

## Content engine

Sprint 3 introduces `src/content` as the source-independent editorial domain:

- `files` stores one typed mocked news item, guide, or calculator per module;
- `repository` defines `ContentRepository` and its file-backed adapter;
- `pipeline` derives friendly paths, reading time, authorship, breadcrumbs,
  structured data, summaries, and related content;
- `metadata` is the only adapter from content models to Next.js metadata;
- `components/content` exposes explicit news, guide, and calculator templates
  backed by one shared renderer.

Detail routes contain no editorial or SEO rules. They use one route factory,
are statically generated from the repository, and reject unknown slugs. Index
pages share one index template. Sitemap, Home cards, and search derive their
entries from the same repository, so every editorial record has one source of
truth.

The repository interface is the future migration seam. A database adapter can
replace `FileContentRepository` without changing document contracts, templates,
or routes. CMS, database, authentication, analytics, and advertising
integrations remain outside the current scope.

## Calculator rules

Sprint 4 uses the existing calculator template and content pipeline. Each
calculator document identifies one pure rule in `src/calculators`. The client
panel only parses fields, exposes validation feedback, and renders the returned
label, value, and explanation. Formulae stay framework-independent and must not
be imported by route files or editorial components directly.

The 50 MVP documents remain file-backed and statically generated. Their shared
content model supplies the same metadata, Schema.org, FAQ, sources, timestamps,
and cross-links as every other content type.

Sprint 8 keeps that rule boundary and expands only the shared presentation.
After a valid submission, `CalculatorPanel` derives a consistent decision
journey from the typed fields and pure result: headline value, explanation,
input memory, interpretation, next steps, warnings, common mistakes, revision
date, and a post-result advertising position. No calculator owns a custom page
or duplicates this interaction.

News and guides continue to use the same document model. Their templates add
kind-specific comprehension layers: a news impact brief and guide learning
outcomes. Related calculators, guides, and news remain pipeline-derived.

## Rendering

Server Components are the default. Client Components should be introduced only
for user interaction or browser-only APIs. Stable content should use static
generation; time-sensitive content can use explicit revalidation or dynamic
rendering when its data source exists.

## Publishing operation

Sprint 7 introduces `src/features/publishing` as an operational domain that is
separate from the public content pipeline. It owns publishing records, workflow
rules, filters, pagination, dashboard metrics, the `PublishingRepository`
contract, and the local adapter. `src/components/admin` owns reusable
administrative presentation, while `src/app/admin` only composes protected
routes.

The file-backed `ContentRepository` remains the source of truth for the static
public product. It seeds the operational repository on first use; subsequent
admin edits are saved in browser `localStorage`. This deliberate limitation
keeps the Sprint free of a database and avoids pretending that browser-only
changes have been deployed to the public catalog.

The future Supabase integration point is the repository contract, not the UI.
Its adapter must provide durable records, server-side queries, pagination, and
concurrency handling. Real authentication and authorization must replace the
mock session independently and must be enforced in every mutation boundary.

The admin session uses an HTTP-only cookie containing a non-sensitive mock
operator identifier. It exists only to demonstrate the two-operator flow and is
not a security boundary. For that reason, `/admin`, `/acesso-admin`, and the mock
credentials are available only under `next dev`; production returns 404 before
rendering the operational shell. Public content keeps its static generation
behavior.

## Production infrastructure

`src/config/site.ts` owns canonical product identity and normalizes the public
origin from environment configuration. `src/config/integrations.ts` is the
single boundary for optional third-party IDs and feature switches. Missing
values produce no external request, which keeps local, test, and Preview builds
safe by default.

The root layout emits global metadata and Organization, WebSite, and
SearchAction graphs. Next.js metadata routes generate `robots.txt`,
`sitemap.xml`, and `manifest.webmanifest`; dedicated static route handlers
provide PWA and Microsoft tile images plus `browserconfig.xml`. Canonicals,
schemas, sitemap URLs, and verification metadata all derive from the same site
configuration.

`components/analytics` is the only script-integration boundary. GA4 and GTM use
post-interaction loading, while Clarity uses lazy-onload. The entire group is
guarded by `NEXT_PUBLIC_ANALYTICS_ENABLED`. Consent policy remains a deployment
decision and must be resolved before this switch is enabled.

`AdSlot` remains presentation-only and reserves space to protect layout
stability. It now exposes publisher, placement, format, responsive, and state
attributes for a future network adapter, but does not load the AdSense script or
render official ad markup. This keeps advertising infrastructure separate from
page composition and business rules. RC1 limits composition to two natural
breaks on the Home and one post-content slot on index/detail pages. Disabled
slots render no element and consume no layout space.

The production boundary rejects a missing or malformed canonical origin when
`VERCEL_ENV=production`. Global headers disable framing, MIME sniffing, DNS
prefetch, and unnecessary browser capabilities; HSTS is emitted for the HTTPS
deployment. Administrative and development-only paths additionally emit
`X-Robots-Tag` and are excluded from `robots.txt`.

Institutional routes compose one shared template and route-level metadata.
Their copy remains reviewable content; it does not introduce forms, persistence,
or external service dependencies.

## Performance policy

The application uses system fonts, contains no editorial raster images, and
keeps Server Components as the default. Next.js supplies route splitting and
viewport-based prefetch for primary navigation. Footer prefetch is disabled to
avoid eagerly fetching low-intent institutional routes. Third-party scripts are
conditional and deferred, generated icons receive immutable cache headers, and
all visible advertising slots reserve a minimum height to limit cumulative
layout shift. Future images must use `next/image`, intrinsic dimensions, useful
alternative text, and lazy loading unless they are a measured LCP candidate.

## Styling

Tailwind CSS is the styling system. Token values are centralized in
`src/config/design-tokens.ts` for TypeScript consumers and
`src/shared/theme/tokens.css` for CSS/Tailwind consumers. Components should use
semantic Tailwind utilities backed by those tokens instead of CSS Modules or
scattered literal values.

Token source files have different consumers: `design-tokens.ts` is the typed
contract for TypeScript and `tokens.css` exposes the matching values to Tailwind 4. Both files must change together when a token is added or updated.

## Theme

`src/shared/theme/ThemeProvider` is mounted in the root layout and currently
selects the light theme. Dark mode is intentionally deferred; the provider exists
so future theme state can be introduced without changing the application shell.

## Quality gates

Every completed task must pass formatting, lint, tests, and a production build.
Important domain rules require unit tests; critical user flows should later gain
integration and end-to-end coverage.

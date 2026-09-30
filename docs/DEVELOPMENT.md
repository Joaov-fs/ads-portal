# Development

## Requirements

- Node.js 24 or newer
- pnpm 11 or newer

pnpm remains the package manager for Sprint 0 because the current project
environment does not expose a working `npm`/`npx` binary to validate an npm
migration.

## Setup

```bash
pnpm install
cp .env.example .env.local
pnpm dev
```

Open `http://localhost:3000` after the development server starts.

The environment file is optional for ordinary development. Without it, the
canonical origin falls back to `http://localhost:3000`, contact information is
omitted, and every third-party integration remains disabled. Never commit real
service IDs. See `PRODUCTION.md` for the complete variable reference.

Use `http://localhost:3000/design-system` to review the reusable visual library.
When changing a visual primitive, verify the catalog at the responsive widths
listed in `PROJECT.md` and confirm that the page has no horizontal overflow.

Use `/pesquisa?q=salario` to verify mocked search and
`/categorias/financas` to verify the reusable category structure. Public content
discovery configuration belongs in `src/features/public-content`, not directly
inside routes.

Editorial content belongs in `src/content/files`, with one typed file per item.
Export a new file from `src/content/files/index.ts`; the repository then makes it
available to the relevant index, friendly detail URL, metadata, sitemap, Home,
and search. SEO, related-content, reading-time, author, and schema rules belong
to the shared pipeline, never to a content file or route.

Sprint 3 examples are available at
`/noticias/juros-basicos-e-decisoes-financeiras`,
`/guias/como-montar-reserva-de-emergencia`, and
`/calculadoras/juros-compostos`.

The Sprint 7 publishing operation starts at `/acesso-admin`. Use either mock
operator shown on the login screen. The session lasts up to eight hours, and
editorial changes are saved under `ads-platform:publishing:v1` in the current
browser's local storage. Clearing site data restores the file-backed seed on the
next visit.

Use `/admin` for the dashboard and `/admin/noticias`, `/admin/guias`, and
`/admin/calculadoras` for the typed lists. New and existing items share the
structured editor. A draft can move only to review; a reviewed item can be
published; a published item returns to review before becoming a draft. This
workflow belongs in `src/features/publishing`, not in route components.

Do not describe this mock as production authentication or durable publishing.
The public site does not read browser storage. A future backend must implement
`PublishingRepository`, migrate the seed, and connect approved records to the
public content repository only after the Supabase Sprint is authorized.

## Commands

- `pnpm dev`: start the local development server.
- `pnpm lint`: run static code analysis.
- `pnpm format`: verify formatting.
- `pnpm format:write`: apply formatting.
- `pnpm test`: run tests once.
- `pnpm test:watch`: run tests in watch mode.
- `pnpm build`: create a production build.
- `pnpm start`: serve the production build.

## Delivery checklist

1. Read `PROJECT.md` and the relevant architecture documents.
2. Keep product rules outside interface components.
3. Add tests proportional to the change risk.
4. Run `pnpm format`, `pnpm lint`, `pnpm test`, and `pnpm build`.
5. Record architectural decisions when they affect future work.

Before a public release, also use the checklist in
`docs/SPRINT-6-QUALITY-REPORT.md`. Local checks do not replace responsive,
keyboard, Lighthouse, metadata, Schema.org, DNS, and HTTPS validation against
the deployed Preview and final domain.

For public-page changes, verify that the Home keeps only the two approved
`AdSlot` breaks and that every configured category resolves through the dynamic
category route. Index and detail templates may render one post-content slot.
All slots must remain absent while advertising is disabled.

The Home must keep its curated calculator set separate from the complete index:
the discovery page highlights three high-intent tools, while `/calculadoras`
remains the catalog of all 50. For calculator changes, verify both the empty
state and the post-result sequence through alerts and related content. Category
pages without published content must remain useful to people and `noindex` to
search engines.

For content changes, verify unique slugs within each kind, `YYYY-MM-DD` dates,
author and source references, canonical URLs, and structured data. Calculator
files define content, fields, and a `calculatorId`; their pure calculation rule
lives in `src/calculators/rules.ts`. Keep parsing, validation, and rendering in
the shared calculator panel rather than creating a page-specific interface.

For production-infrastructure changes, keep all IDs in
`src/config/integrations.ts`, render scripts only through
`src/components/analytics`, and keep AdSense network code out of `AdSlot` until
approval. Verify `/robots.txt`, `/sitemap.xml`, `/manifest.webmanifest`,
`/browserconfig.xml`, and at least one PWA icon after changing routing or site
configuration.

The mock publishing operation and `/design-system` are development-only. A
production build intentionally returns 404 for `/acesso-admin`, `/admin/*`, and
`/design-system`; do not introduce a production bypass without real
authentication and authorization. When validating the Vercel production
environment, `NEXT_PUBLIC_SITE_URL` must be an origin-only HTTP(S) URL and should
use HTTPS.

When checking performance, remember that Next.js already prefetches visible
static `Link` destinations in production. Add manual preloads or prefetching only
after measurement. New images should use `next/image`; below-the-fold images
remain lazy by default, while a measured LCP image may use priority loading.

## Visual component checklist

1. Prefer semantic tokens over literal colors, spacing, radius, or shadows.
2. Preserve native element props and semantics where practical.
3. Provide visible focus, loading, disabled, error, and help states when they
   apply.
4. Add or update the example in `/design-system`.
5. Test behavior or accessibility contracts proportional to the component risk.

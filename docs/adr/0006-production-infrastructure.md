# ADR 0006: Environment-driven production infrastructure

- Status: Accepted
- Date: 2026-09-25

## Context

Sprint 5 prepares the static-first platform for a custom domain, Vercel,
analytics, webmaster verification, and future advertising. These services use
deployment-specific identifiers, add third-party JavaScript, and can affect
privacy and Core Web Vitals. The existing architecture keeps infrastructure out
of route composition and business rules.

## Decision

Use `siteConfig` as the canonical source for public origin and product metadata,
and a separate `integrationConfig` for optional service identifiers. Read every
external identifier from environment variables and emit no integration script
when the global analytics switch or relevant ID is absent.

Keep analytics in one root-level Server Component using Next.js script loading
strategies. Generate technical SEO assets with App Router metadata conventions
and small static route handlers. Emit Organization, WebSite, and SearchAction
structured data from the root layout.

Extend the existing neutral `AdSlot` contract with future network configuration
while deliberately omitting AdSense scripts and official markup until account
approval. Preserve reserved slot dimensions in every state.

Compose all institutional pages through a shared template and use the existing
design system. Apply baseline response-security headers globally and immutable
cache headers only to version-stable icon routes.

## Consequences

Preview and local builds remain deterministic and make no third-party requests
by default. Production configuration can change without source edits, although
public environment values require a rebuild. GA4 must be configured either
directly or through GTM—not both—to avoid duplicate events. Consent and legal
review are explicit prerequisites for enabling analytics and advertising.

The platform has a clean seam for future AdSense markup, consent management,
monitoring, and richer deployment automation without coupling those concerns to
calculators or editorial pages.

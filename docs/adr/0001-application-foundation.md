# ADR 0001: Application foundation

- Status: Accepted
- Date: 2026-09-24

## Context

The product requires strong SEO, high performance, mobile-first rendering, and a
structure that can grow from roughly 50 to hundreds of tools. `PROJECT.md`
requires strict TypeScript but does not prescribe a web framework.

## Decision

Use Next.js with the App Router, React, and strict TypeScript. Prefer Server
Components and static generation. Use Tailwind CSS with centralized design
tokens, Vitest and Testing Library for tests, ESLint for static analysis,
Prettier for formatting, and pnpm for deterministic dependency management.

## Consequences

The application has first-class metadata and server-rendering capabilities with
automatic route-level code splitting. Client-side JavaScript stays opt-in. The
team must keep framework concerns outside pure calculator rules and explicitly
choose caching behavior when external data sources are introduced.

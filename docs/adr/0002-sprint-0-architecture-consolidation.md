# ADR 0002: Sprint 0 architecture consolidation

- Status: Accepted
- Date: 2026-09-24

## Context

Before Sprint 1, the project needed to consolidate the foundation created in
Sprint 0. The review focused on styling, package management, directory
boundaries, design tokens, theme readiness, and documentation.

## Decision

Use Tailwind CSS 4 through the official PostCSS plugin and remove CSS Modules
from application code. Keep global CSS only for Tailwind import, browser
defaults, and centralized theme token definitions.

Prepare the source tree around scalable product areas:

- `src/app`
- `src/components`
- `src/features`
- `src/calculators`
- `src/news`
- `src/guides`
- `src/shared`
- `src/services`
- `src/hooks`
- `src/lib`
- `src/config`
- `src/types`

Keep pnpm for now. The current execution environment has Node.js and pnpm
available, but `npm`/`npx` are not available on the shell path or in the bundled
runtime. A full npm migration cannot be validated in this Sprint 0 closure
without changing the local toolchain, so pnpm remains the documented package
manager.

Create a minimal `ThemeProvider` with the light theme selected. Dark mode is
explicitly deferred.

## Consequences

Future UI should use semantic Tailwind classes backed by design tokens, not
component-local CSS Modules or scattered literal values. Product areas are ready
for hundreds of pages, articles, guides, and calculators without mixing routing,
content, business rules, and shared infrastructure.

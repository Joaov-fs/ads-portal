# ADR 0003: Reusable visual library

- Status: Accepted
- Date: 2026-09-24

## Context

Sprint 1 requires a consistent visual foundation before product pages or
business capabilities are implemented. The library needs to remain usable by
news, guides, calculators, indicators, and future platform areas without making
those domains depend on one another.

## Decision

Organize reusable presentation components by responsibility rather than product
domain:

- `ui` owns low-level controls and surfaces.
- `layout` owns spatial composition.
- `cards` owns reusable content-card patterns.
- `navigation` owns shared wayfinding and site chrome.
- `advertising` owns the neutral `AdSlot` placeholder.

Use native HTML elements and Server Components by default. Interactive states
that the browser already provides, including mobile disclosure navigation and
form controls, do not introduce client-side state. Keep visual variants typed,
centralize navigation data in configuration, and use semantic Tailwind classes
backed by the shared token contract.

Maintain `/design-system` as a static, non-indexed development catalog that
renders every supported component and state without product logic.

## Consequences

Product areas can compose a stable visual vocabulary without duplicating styles
or importing from other domains. Most of the library ships no client JavaScript.
Token updates must remain synchronized between TypeScript and CSS consumers, and
new reusable visual states should be demonstrated in the catalog and covered by
tests when they carry behavior or accessibility risk.

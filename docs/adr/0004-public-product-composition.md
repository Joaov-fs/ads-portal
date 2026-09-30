# ADR 0004: Public product composition and mock content boundary

- Status: Accepted
- Date: 2026-09-24

## Context

Sprint 2 turns the visual library into the first complete public product
experience. Search, categories, news, guides, indicators, and advertising are
still demonstrative, but their route and data boundaries need to support future
integrations without duplicating components or coupling content to pages.

## Decision

Mount the definitive `Header` and `Footer` in the root layout. Compose all
public pages exclusively from the Sprint 1 component library and native semantic
elements.

Keep strongly typed mock collections, category lookup, advertising placement
names, and pure search matching in `src/features/public-content`. Use one dynamic
route with static parameters for every category and a server-rendered search
page that reads the `q` query parameter. Keep the five Home advertising
positions as named `AdSlot` instances without an advertising network adapter.

Define SEO defaults in the root metadata and override title, description,
canonical, Open Graph, and indexing rules at route level where necessary.

## Consequences

The public shell and navigation remain consistent across routes. Future content
repositories can replace mock arrays behind the feature boundary without
rewriting page composition. Category growth requires data changes rather than
route duplication. Search remains accessible with a native GET form and ships
no client-side state management in this Sprint.

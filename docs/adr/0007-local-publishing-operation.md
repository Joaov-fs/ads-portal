# ADR 0007: Local publishing operation and replaceable repository

- Status: Accepted
- Date: 2026-09-28

## Context

Sprint 7 needs a usable two-operator publishing workflow without Supabase, a
database, real authentication, permissions, uploads, analytics, or a generic
CMS. The public product already consumes immutable typed files through a
`ContentRepository` and must keep its static-first architecture.

## Decision

Create a separate publishing domain with a narrow `PublishingRepository`
contract. Seed it from the existing typed content files and use a browser-local
adapter for this Sprint. Keep search, filtering, pagination, metrics, slug
generation, and status-transition rules as pure functions outside React.

Model three explicit states: Draft, Review, and Published. Require Draft →
Review before publication and Published → Review before returning to Draft.
Store structured sections and explicit News → Guide and Guide → Calculator
references.

Use a small mocked session with two known local operators and an HTTP-only
cookie. Protect the admin route layout with a server-side session check, while
clearly identifying the flow as demonstrative and non-secure.

Keep the static public `ContentRepository` unchanged. Browser-local publishing
does not mutate the deployed catalog; a future server adapter will connect the
operational and public publication boundaries.

## Consequences

Two operators can independently exercise login, editing, organization, review,
and publication on one browser without infrastructure. Their changes persist
across reloads but are not shared between browsers or devices and can be lost
when site data is cleared.

Supabase can later replace local persistence without rewriting the admin UI or
workflow rules. That migration must add durable IDs, server-side validation,
concurrency control, authentication, authorization, and the explicit promotion
of approved records into the public repository.

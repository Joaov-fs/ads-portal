# Calculators

Calculator modules belong here. Each calculator should separate pure calculation
rules from UI composition. `rules.ts` is the pure, framework-independent rule
registry for the 50 MVP calculators, while `types.ts` defines its narrow
contract. Documents and field descriptions live in `src/content/files/calculators`.
The shared calculator panel owns parsing, validation, result rendering, and
explanatory feedback.

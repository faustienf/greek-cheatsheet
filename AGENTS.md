# Greek Cheatsheet agent guide

## Project

Greek Cheatsheet is a Vite SPA for a practical Greek-language reference. It
uses React, strict TypeScript, Reatom v1001, Reatom Router, and Tailwind CSS.

## Commands

Use pnpm exclusively:

- `pnpm dev`
- `pnpm build`
- `pnpm test`
- `pnpm test:watch`
- `pnpm lint`
- `pnpm format`
- `pnpm format:check`
- `pnpm typecheck`
- `pnpm check`

Do not add npm or Yarn lock files. CI is intentionally out of scope.

## Architecture

Follow Feature-Sliced Design using only layers needed by current functionality:
`app`, `pages`, `widgets`, `features`, `entities`, and `shared`.

- Imports may point only to lower layers: `app` -> `pages` -> `widgets` ->
  `features` -> `entities` -> `shared`.
- Slices in the same layer must not depend on each other.
- Every slice exposes a public API through `index.ts`.
- Import another slice only through its public API; do not reach into its
  internal folders.
- Do not create empty layers or placeholder slices.
- Keep React components focused on presentation and move business logic to
  Reatom models.

Imports inside `src` are absolute and have no alias prefix:

```ts
import { HomePage } from 'pages/home';
```

Do not include `.ts` or `.tsx` extensions in imports.

## Reatom

Use Reatom for all application state, business logic, and routing. Do not add
another state manager or React Router.

Before changing Reatom code, consult the skills and API summary from the
`v1001` branch:

- `https://github.com/reatom/reatom/blob/v1001/skills/README.md`
- `https://github.com/reatom/reatom/blob/v1001/summary.md`

Use current v1001 APIs: implicit context, named primitives, `.set()` for writes,
`wrap()` at external asynchronous boundaries, `reatomComponent` for components
that read atoms, and `reatomRoute` render functions for route-owned UI.

Routes live in the app routing module. Route paths have no leading slash.
Navigation uses route `.go()` methods or `urlAtom.go()` when no route owns the
destination. Unknown URLs use the router's `is404` state.

## Testing

Use Vitest with jsdom and Testing Library. Test behavior visible to users rather
than component internals. Isolate URL and Reatom context between tests, and
reset the default Reatom context when shared primitives are involved.

## Code quality

- TypeScript remains in strict mode; avoid `any`.
- ESLint uses flat config and enforces FSD boundaries.
- Prettier is the source of formatting truth and sorts Tailwind classes.
- Do not disable lint rules to hide errors.
- Run `pnpm check` before considering a change complete.

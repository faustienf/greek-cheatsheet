# Greek Cheatsheet

Greek Cheatsheet is a browser-based reference for learning and using Greek. The
project is currently at its initial scaffold stage and exposes a responsive
placeholder page backed by Reatom routing.

## Requirements

- Node.js 24.16.0
- pnpm 11.6.0

The expected versions are recorded in `.nvmrc`, `.node-version`, and
`package.json`.

## Getting started

```sh
pnpm install
pnpm dev
```

Vite prints the local development URL after startup.

## Commands

- `pnpm dev` starts the development server.
- `pnpm build` creates a production build.
- `pnpm preview` previews the production build.
- `pnpm test` runs the test suite once.
- `pnpm test:watch` runs tests in watch mode.
- `pnpm lint` checks the source with ESLint.
- `pnpm format` formats supported files with Prettier.
- `pnpm format:check` checks formatting without changing files.
- `pnpm typecheck` runs the TypeScript compiler without emitting files.
- `pnpm check` runs formatting, linting, type checking, tests, and a production
  build.

## Structure

The application follows a minimal Feature-Sliced Design structure:

- `src/app` contains application initialization, providers, routing, and global
  styles.
- `src/pages` contains route-level pages.

Additional FSD layers should be introduced only when real application
functionality needs them.

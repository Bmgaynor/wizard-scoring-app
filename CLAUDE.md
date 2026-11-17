# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

A single-page scorekeeper for the card game Wizard. Create React App (react-scripts 4) + TypeScript + React 17 + MUI v5. There is no backend; all state lives in the browser.

## Commands

Package manager is **yarn** (`yarn.lock` is committed).

```bash
yarn            # install
yarn start      # dev server on http://localhost:3000
yarn build      # production build into ./build
yarn test       # Jest in watch mode
CI=true yarn test                 # run tests once (non-interactive)
CI=true yarn test Score           # run a single test file by name pattern
CI=true yarn test -t "negative"   # run tests whose name matches
```

There is no separate lint script; ESLint (`react-app` config) runs inside `start`/`build`. Type checking also happens during `build` (`tsc --noEmit` is not wired up as a script).

react-scripts 4 uses webpack 4, which fails on Node 17+ with `ERR_OSSL_EVP_UNSUPPORTED`. If that happens, prefix commands with `NODE_OPTIONS=--openssl-legacy-provider`.

## Deployment

`.github/workflows/deploy_gh.yml` builds on every push to `master` and publishes `./build` to GitHub Pages. `homepage` in `package.json` (`http://bradgaynor.com/wizard-scoring-app/`) sets the asset base path, so changing it changes where the built app expects to be served from.

## Architecture

- **State** (`src/state.ts`): one `useReducer` store exposed via `StateContext` (`{ state, dispatch }`). State is `{ players: Player[] }`; each `Player` has `rounds: Record<number, Round>` keyed by round number (1-based), where `Round = { guess, actual: number | null, number }`. Players are identified by **array index**, not an id — actions carry `playerIndex`.
- **Actions**: `ADD_PLAYER`, `REMOVE_PLAYER`, `ADD_PLAYER_GUESS`, `ADD_PLAYER_ACTUAL`, `NEW_GAME` (clears rounds, keeps players). The guess and actual actions are also used to *edit* past rounds from the History view. The reducer `console.log`s every action and throws on unknown types.
- **Persistence** (`src/App.tsx`): the store is initialized from and synced to `localStorage` key `"store"` via `hook-local-storage` (typed by a hand-written declaration in `src/global.d.ts`). Changing the shape of `State` affects users' already-saved data — there is no migration/versioning.
- **Round flow** (`Components/Player.tsx`): the current round number is derived as the count of keys in `player.rounds`. If that round has an integer `actual` (or there are no rounds), `AddRound` is shown to enter the next guess (which creates the round); otherwise `AddActual` is shown. Guess/actual pickers render buttons for 0..roundNumber up to `MAX_BUTTONS`, then fall back to a `Select`.
- **Scoring** (`Components/Score.tsx`): `getScore` — exact guess = `20 + 10 * guess`, otherwise `-10 * |guess - actual|`; an unset actual scores 0. Unit tests cover this (`Components/Score.test.ts`) and player removal in the reducer (`src/state.test.ts`).
- **Layout**: `App` renders `AddPlayer`, `NewGame`, `Scores` in a side column and `Players` (current-round input) plus `History` (editable per-round cards, remove-player button) in the main column.

## Known issues

- History selects use `round.actual || 0`, so an unset actual displays as 0.

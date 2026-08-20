# Pharmaceutical App

A React-based dashboard for tracking pharmaceutical testing and clinical trial processes.

## Deployment link:
https://pharmaceutical-app-nine.vercel.app/

## Features

- **Main panel** — summary cards with test results, completion stats, and interactive charts (line, bar, pie) built with Recharts.
- **Tables** — paginated list of medicines and vaccines with status and process indicators, fetched from a live API via RTK Query.
- **Process page** — detailed view for a single medicine/vaccine, including timeline, location map, and additional info.
- **Dark theme** — toggleable light/dark mode.
- **Toast notifications** — in-app feedback for unavailable actions and navigation hints.
- **Responsive layout** — navbar, header, and content adapt across screen sizes.

## Tech Stack

**Core**
- React 19
- React Router 7
- Redux Toolkit + RTK Query (state management and data fetching)
- Recharts (charts)

**Build & Tooling**
- Webpack 5 + Babel
- ESLint + Prettier
- Husky + lint-staged (pre-commit checks)
- Commitlint (conventional commit messages)

**Architecture**
- Feature-Sliced Design(`app`, `pages`, `widgets`, `features`, `entities`, `shared`)
- CSS Modules for component styling

## Getting Started

### Prerequisites

- Node.js `^22.18.0` or `>=24.11.0`
- npm

### Installation

```bash
git clone https://github.com/dmitry-stack/PharmaceuticalApp.git
cd PharmaceuticalApp
npm install
```

### Running locally

```bash
npm start
```

The app will be available at `http://localhost:3000`.

### Building for production

```bash
npm run build
```

Output is generated in the `dist/` folder.

### Other scripts

| Command | Description |
|---|---|
| `npm run lint` | Run ESLint on the `src/` directory |
| `npm run lint:fix` | Run ESLint and auto-fix issues |
| `npm run format` | Format code with Prettier |

## Project Structure

```
src/
├── app/          # App-wide setup: store, providers, global styles
├── pages/         # Route-level pages (dashboard, tables, process)
├── widgets/       # Composite UI blocks (header, navbar, layout)
├── features/      # Interactive user-facing functionality
├── entities/      # Domain entities (medicine) — API and models
└── shared/        # Reusable UI kit, hooks, assets, utilities
```

## Data Source

Product data is fetched from [DummyJSON](https://dummyjson.com/) and mapped into the app's own medicine/vaccine domain model.  

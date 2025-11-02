# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

E-Ink Stats is a monorepo for displaying analytics and metrics on a 7.3" e-ink display (800×480 pixels). The project consists of a React frontend for building display components and a Python FastAPI/Typer backend for serving metrics data.

## Critical Constraints

### E-Ink Display Dimensions
**All frontend components MUST be designed for 800×480 pixels (7.3" display, 5:3 aspect ratio).**

- Always wrap components in `DisplayFrame` when developing
- Use exported constants: `DISPLAY_WIDTH = 800`, `DISPLAY_HEIGHT = 480`
- Default `MetricCard` size is 360×216 (optimized for 2×2 grid)
- Test all components in Storybook within the DisplayFrame context

### Code Style Requirements

**Frontend (TypeScript/React):**
- **NO semicolons** - Biome configured with `semicolons: "asNeeded"`
- Tabs for indentation (not spaces)
- Double quotes for strings
- All components must have corresponding `.stories.tsx` files

**Backend (Python):**
- Strict type checking enabled (mypy)
- Line length: 100 characters
- Must pass ruff formatting and linting

## Package Management

**Frontend:** Use `pnpm` exclusively (NOT npm or yarn)
**Backend:** Use `uv` exclusively (NOT pip or poetry)

This is a pnpm workspace monorepo. The root `pnpm-workspace.yaml` links the frontend package.

## Development Commands

### Frontend (from `frontend/` directory)
```bash
pnpm storybook        # Start Storybook on :6006
pnpm dev              # Start Vite dev server
pnpm build            # TypeScript compile + Vite build
pnpm lint             # Run Biome linter
pnpm format           # Format code with Biome
```

### Backend (from `backend/` directory)
```bash
uv sync                              # Install/sync dependencies
uv run python -m backend.cli serve   # Start FastAPI server (default :8000)
uv run ruff format .                 # Format Python code
uv run ruff check .                  # Lint Python code
uv run mypy backend                  # Type check with mypy
```

### Pre-commit Hooks (from root)
```bash
pnpm lefthook run pre-commit  # Manually run all hooks
```

Hooks run automatically on commit and include:
- TruffleHog secret scanning (entire repo)
- Biome check/format (frontend)
- Ruff format/check (backend)
- mypy type checking (backend)

**Requirements:** TruffleHog must be installed via `brew install trufflehog`

## Architecture

### Monorepo Structure
```
e-ink-stats/
├── frontend/              # React + Vite + TypeScript + Storybook
│   ├── src/
│   │   ├── components/    # Display components (each with .stories.tsx)
│   │   └── ...
│   └── biome.json         # Linter/formatter config (no semicolons!)
├── backend/               # Python FastAPI + Typer
│   ├── backend/
│   │   ├── main.py       # FastAPI app entry point
│   │   ├── cli.py        # Typer CLI commands
│   │   ├── api/          # Route handlers (e.g., metrics.py)
│   │   └── services/     # Business logic (e.g., posthog_service.py)
│   └── pyproject.toml    # uv project config
└── lefthook.yml          # Pre-commit hook configuration
```

### Backend API Structure

The FastAPI app is modular:
- **main.py**: FastAPI app instance, includes routers
- **cli.py**: Typer CLI with commands (serve, generate-image, fetch-metrics)
- **api/**: Router modules (e.g., `metrics.router` with prefix `/api/metrics`)
- **services/**: Business logic separated from route handlers

Current endpoints:
- `GET /` - Root/status
- `GET /health` - Health check
- `GET /api/metrics` - Get all metrics (placeholder)
- `GET /api/metrics/{metric_name}` - Get specific metric (placeholder)

### Frontend Component Architecture

**DisplayFrame Pattern:**
All e-ink components should be composed within `DisplayFrame` to enforce dimensions:

```tsx
<DisplayFrame>
  <YourComponent />
</DisplayFrame>
```

Components in `frontend/src/components/`:
- Each component has a `.tsx` implementation
- Each component has a `.stories.tsx` for Storybook
- Components are styled inline (no separate CSS files yet)
- Use exported `DISPLAY_WIDTH` and `DISPLAY_HEIGHT` constants

## Planned Features (TODO)

- PostHog integration for fetching real analytics data
- PIL-based image generation at 800×480 for actual e-ink display output
- Connection between frontend components and backend API
- Test coverage for both frontend and backend

## Important Notes

- This project uses Python 3.12+ (required)
- Pre-commit hooks will block commits with secrets detected by TruffleHog
- The backend CLI is named "e-ink-stats" (accessible via `uv run python -m backend.cli`)
- Storybook includes accessibility testing (addon-a11y) and Vitest integration

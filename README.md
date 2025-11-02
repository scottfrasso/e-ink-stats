# E-Ink Display Project

A monorepo project for rendering metrics data on e-ink displays, featuring a React frontend with Storybook and a Python FastAPI/Typer backend.

## Project Structure

```
e-ink-project/
├── frontend/          # Vite + React + TypeScript + Storybook
├── backend/           # Python FastAPI/Typer application
├── lefthook.yml       # Pre-commit hooks configuration
└── pnpm-workspace.yaml # pnpm workspace configuration
```

## Frontend

The frontend is a Vite-powered React application with TypeScript, using Storybook for component development.

### Technologies

- **Vite**: Fast build tool and dev server
- **React 19**: UI framework
- **TypeScript**: Type safety
- **Storybook**: Component development and documentation
- **Biome**: Linting and formatting (configured with no semicolons)

### Getting Started

```bash
cd frontend
pnpm install
pnpm dev              # Start development server
pnpm storybook        # Start Storybook
pnpm lint             # Run Biome linter
pnpm format           # Format code with Biome
```

### Components

Components are located in `frontend/src/components/`. Each component includes:
- TypeScript implementation
- Storybook stories for documentation and visual testing

Example: `MetricCard` - A component designed for e-ink displays that shows metric data.

## Backend

The backend is a Python application built with FastAPI for API endpoints and Typer for CLI commands.

### Technologies

- **Python 3.12**: Programming language
- **FastAPI**: Modern API framework
- **Typer**: CLI framework
- **uv**: Fast Python package manager
- **Pillow**: Image generation (for e-ink displays)
- **PostHog**: Analytics integration (planned)
- **mypy**: Static type checking
- **ruff**: Linting and formatting

### Getting Started

```bash
cd backend
uv sync                # Install dependencies

# CLI Commands
uv run python -m backend.cli serve          # Start FastAPI server
uv run python -m backend.cli generate-image # Generate e-ink image (TODO)
uv run python -m backend.cli fetch-metrics  # Fetch PostHog data (TODO)

# Development
uv run ruff format .   # Format code
uv run ruff check .    # Lint code
uv run mypy backend    # Type check
```

### API Structure

- `backend/main.py`: FastAPI application entry point
- `backend/cli.py`: Typer CLI commands
- `backend/api/`: API route handlers
- `backend/services/`: Business logic and external integrations

### API Endpoints

- `GET /`: Root endpoint
- `GET /health`: Health check
- `GET /api/metrics`: Get all metrics
- `GET /api/metrics/{metric_name}`: Get specific metric

## Pre-commit Hooks

This project uses lefthook for pre-commit hooks:

- **Frontend**: Biome check and format
- **Backend**: Ruff format, Ruff check, mypy type checking

Hooks run automatically on commit. To manually run:

```bash
pnpm lefthook run pre-commit
```

## Development Workflow

1. **Frontend Development**: Build components in Storybook, ensuring they render well for e-ink displays
2. **Backend Development**: Create API endpoints to serve metrics data from PostHog
3. **Image Generation**: Use PIL to generate images at specific sizes for e-ink displays (planned)

## TODO

- [ ] Implement PostHog integration in backend
- [ ] Add image generation using PIL for e-ink displays
- [ ] Connect frontend components to backend API endpoints
- [ ] Add tests for both frontend and backend
- [ ] Add CI/CD pipeline

## Contributing

1. Make your changes
2. Ensure pre-commit hooks pass
3. Run tests (when available)
4. Create a pull request

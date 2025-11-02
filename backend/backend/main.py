"""FastAPI application entry point."""

from fastapi import FastAPI

from backend.api import metrics

app = FastAPI(
    title="E-Ink Stats API",
    description="API for serving analytics and metrics data to e-ink displays",
    version="0.1.0",
)

# Include routers
app.include_router(metrics.router, prefix="/api/metrics", tags=["metrics"])


@app.get("/")
async def root() -> dict[str, str]:
    """Root endpoint."""
    return {"message": "E-Ink Stats API is running"}


@app.get("/health")
async def health() -> dict[str, str]:
    """Health check endpoint."""
    return {"status": "healthy"}

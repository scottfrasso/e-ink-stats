"""FastAPI application entry point."""

from fastapi import FastAPI

from backend.api import metrics

app = FastAPI(
    title="E-Ink Display API",
    description="API for serving metrics data to e-ink displays",
    version="0.1.0",
)

# Include routers
app.include_router(metrics.router, prefix="/api/metrics", tags=["metrics"])


@app.get("/")
async def root() -> dict[str, str]:
    """Root endpoint."""
    return {"message": "E-Ink Display API is running"}


@app.get("/health")
async def health() -> dict[str, str]:
    """Health check endpoint."""
    return {"status": "healthy"}

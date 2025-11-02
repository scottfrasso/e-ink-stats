"""CLI commands using Typer."""

import typer

app = typer.Typer(
    name="e-ink-stats",
    help="E-Ink Stats CLI",
)


@app.command()
def serve(
    host: str = typer.Option("0.0.0.0", help="Host to bind to"),
    port: int = typer.Option(8000, help="Port to bind to"),
    reload: bool = typer.Option(False, help="Enable auto-reload"),
) -> None:
    """Start the FastAPI server."""
    import uvicorn

    typer.echo(f"Starting server on {host}:{port}")
    uvicorn.run(
        "backend.main:app",
        host=host,
        port=port,
        reload=reload,
    )


@app.command()
def generate_image(
    metric: str = typer.Argument(..., help="Metric name to generate image for"),
    output: str = typer.Option("output.png", help="Output file path"),
    width: int = typer.Option(800, help="Image width"),
    height: int = typer.Option(600, help="Image height"),
) -> None:
    """
    Generate an e-ink display image for a specific metric.

    TODO: Implement image generation using PIL.
    """
    typer.echo(f"Generating {width}x{height} image for metric: {metric}")
    typer.echo(f"Output: {output}")
    typer.echo("TODO: Image generation not yet implemented")


@app.command()
def fetch_metrics() -> None:
    """
    Fetch latest metrics from PostHog.

    TODO: Implement PostHog integration.
    """
    typer.echo("Fetching metrics from PostHog...")
    typer.echo("TODO: PostHog integration not yet implemented")


if __name__ == "__main__":
    app()

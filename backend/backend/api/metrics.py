"""Metrics API endpoints."""

from fastapi import APIRouter

from backend.services.posthog_service import get_sample_metrics

router = APIRouter()


@router.get("/")
async def get_metrics() -> dict[str, int | float | str]:
    """
    Get current metrics data.

    TODO: This currently returns sample data.
    Future implementation will fetch real data from PostHog.
    """
    return get_sample_metrics()


@router.get("/{metric_name}")
async def get_metric(metric_name: str) -> dict[str, int | float | str]:
    """
    Get a specific metric by name.

    Args:
        metric_name: The name of the metric to retrieve

    Returns:
        A dictionary containing the metric value and metadata
    """
    # TODO: Implement specific metric retrieval from PostHog
    return {
        "name": metric_name,
        "value": 0,
        "unit": "",
        "status": "placeholder",
    }

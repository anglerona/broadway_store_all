from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import HomepageContent, Feature


@api_view(["GET"])
def homepage_content(request):
    content = HomepageContent.objects.first()

    if not content:
        return Response({})

    return Response({
        "features_title": content.features_title,
        "features_description": content.features_description,
        "unit_sizes_title": content.unit_sizes_title,
        "unit_sizes_text_1": content.unit_sizes_text_1,
        "unit_sizes_text_2": content.unit_sizes_text_2,
        "contact_title": content.contact_title,
        "phone_number": content.phone_number,
        "address": content.address,
        "hours_description": content.hours_description,
        "weekday_hours": content.weekday_hours,
        "closed_hours": content.closed_hours,
        "google_maps_embed_url": content.google_maps_embed_url,
    })


@api_view(["GET"])
def features(request):
    items = Feature.objects.all()

    return Response([
        {
            "id": item.id,
            "title": item.title,
            "icon": item.icon,
            "display_order": item.display_order,
        }
        for item in items
    ])
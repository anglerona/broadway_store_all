from django.http import JsonResponse
from .models import UnitSize

def unit_list(request):
    data = list(UnitSize.objects.values())
    return JsonResponse(data, safe=False)

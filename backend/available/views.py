from django.http import JsonResponse, HttpResponse
from .models import UnitSize

def homepage(request):
    return HttpResponse("<h1>Welcome to Broadway Store Backend!</h1>")

def unit_list(request):
    data = list(UnitSize.objects.values())
    return JsonResponse(data, safe=False)

from django.contrib import admin
from django.urls import path, include
from django.shortcuts import redirect

def favicon_redirect(request):
    return redirect('/static/favicon.ico')

urlpatterns = [
    path('favicon.ico', favicon_redirect),
    path('admin/', admin.site.urls),
    path('', include('available.urls')),
]

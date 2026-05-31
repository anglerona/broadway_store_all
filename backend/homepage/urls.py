from django.urls import path
from . import views

urlpatterns = [
    path("homepage-content/", views.homepage_content),
    path("features/", views.features),
]
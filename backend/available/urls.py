from django.urls import path
from . import views

urlpatterns = [
    path('', views.homepage, name='homepage'),
    path('api/units/', views.unit_list, name='unit_list'),
]

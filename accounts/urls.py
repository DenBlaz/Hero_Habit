from django.urls import path
from . import views

urlpatterns = [
    path('sign/', views.register, name = "sign"),
]
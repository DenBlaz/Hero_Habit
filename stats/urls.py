from django.urls import path
from . import views
from .views import UserLoginView

urlpatterns = [
    path('', views.stats, name = "stats"),
]
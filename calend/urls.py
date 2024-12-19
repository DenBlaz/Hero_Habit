from django.urls import path
from . import views
from .views import UserLoginView

urlpatterns = [
    path('', views.calend, name = "calend"),
]
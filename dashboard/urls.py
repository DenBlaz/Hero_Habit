from django.urls import path
from . import views
from .views import UserLoginView

urlpatterns = [
    path('', views.home, name = "home"),
]
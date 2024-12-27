from django.urls import path
from . import views

urlpatterns = [
    path('sign/', views.register, name = "sign"),
    path('login/', views.login, name = "login")
]
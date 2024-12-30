from django.urls import path
from . import views

urlpatterns = [
    path('sign/', views.register, name = "sign"),
    path('login/', views.user_login, name = "login")
]
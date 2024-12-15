from django.urls import path
from . import views

urlpatterns = [
    path('sign/', views.sign_up, name = "sign"),
    path('login/', views.login_view, name = "login"),
    path('profile/', views.profile, name = "profile"),
]
from django.urls import path
from . import views
from .views import UserLoginView

urlpatterns = [
    path('sign/', views.sign_up, name = "sign"),
    path('login/', UserLoginView.as_view(), name = "login"),
    path('profile/', views.profile, name = "profile"),
]
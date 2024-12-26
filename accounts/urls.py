from django.urls import path
from .views import register, CustomLoginView
from django.contrib.auth.views import LogoutView

urlpatterns = [
    path('sign/', register, name = "sign"),
    path('login/', CustomLoginView.as_view(), name = "login"),
    path('logout/', LogoutView.as_view(next_page='login'), name = "logout"),
]
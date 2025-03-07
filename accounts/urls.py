from django.urls import path
from . import views
from django.contrib.auth.views import LogoutView

app_name = 'accounts'

urlpatterns = [
    path('sign/', views.register, name = "sign"),
    path('login/', views.user_login, name = "login"),
    path('character', views.character_create, name = "character_create"),
    path('logout/', LogoutView.as_view(next_page='/accounts/login/'), name='logout'),
]
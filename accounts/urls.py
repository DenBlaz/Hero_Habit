from django.urls import path
from . import views
from django.contrib.auth.views import LogoutView

app_name = 'accounts'

urlpatterns = [
    path('sign/', views.register, name = "sign"),
    path('login/', views.user_login, name = "login"),
    path('logout/', LogoutView.as_view(next_page='login/'), name='logout'),
]
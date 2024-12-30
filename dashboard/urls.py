from django.urls import path
from . import views

app_name = 'dashboard'

urlpatterns = [
    path('', views.dashboardviews, name = "dashboard"),
    path('/<str:day>/', views.dashboardviews, name='dashday'),
]
from django.urls import path
from . import views

app_name = 'calend'

urlpatterns = [
    path('', views.calend, name = "calend"),
    path('all/', views.calendall, name = "calendall"),
]
from django.urls import path
from . import views

app_name = 'calend'

urlpatterns = [
    path('', views.calend, name = "calend"),
    path('', views.calendall, name = "calendall"),
]
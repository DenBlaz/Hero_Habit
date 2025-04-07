from django.urls import path
from . import views
from .views import DailyTaskCreate

app_name = 'calend'

urlpatterns = [
    path('', views.calend, name = "calend"),
    path("create-task/", DailyTaskCreate, name="dailytask"),
    ]
from django.urls import path
from . import views
from .views import create_task

app_name = 'calend'

urlpatterns = [
    path('', views.calend, name = "calend"),
    path("create-task/", create_task, name="daily-task-create"),
    ]
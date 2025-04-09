from django.urls import path
from . import views
from .views import task_create

app_name = 'calend'

urlpatterns = [
    path('', views.calend, name = "calend"),
    path("create-task/", views.task_create, name="taskcreate"),
    path("create-task-dash/", views.task_create_dash, name="taskcreatedash"),
    ]
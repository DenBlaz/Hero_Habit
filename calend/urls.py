from django.urls import path
from . import views
from .views import task_create

app_name = 'calend'

urlpatterns = [
    path('', views.calendar_view, name = "calend"),
    path("create-task/", views.task_create, name="taskcreate"),
    ]
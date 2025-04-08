from django.urls import path
from . import views
from .views import task_create

app_name = 'calend'

urlpatterns = [
    path('', views.calend, name = "calend"),
    path('calend/', views.newcalend, name = "calendar"),
    path("create-task/", views.task_create, name="taskcreate"),
    ]
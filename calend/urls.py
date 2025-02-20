from django.urls import path
from . import views

app_name = 'calend'

urlpatterns = [
    path('', views.calend, name = "calend"),
    path("api/daily-task/", Daily_TaskView.as_view(), name="daily-task-create"),
]
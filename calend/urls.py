from django.urls import path
from . import views
from .views import DailyTaskView

app_name = 'calend'

urlpatterns = [
    path('', views.calend, name = "calend"),
    path("api/daily-tasks/", DailyTaskView.as_view(), name="daily-task-create"),
    ]

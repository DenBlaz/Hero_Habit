from django.urls import path
from . import views
from dashboard.views import dashboardviews

app_name = 'dashboard'

urlpatterns = [
    path('', dashboardviews, name='dashboard')
]
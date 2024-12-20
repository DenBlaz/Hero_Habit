from django.urls import path
from . import views

app_name = 'dashboard'

urlpatterns = [
    path('', views.dashboardviews, name = "dashboard"),

    path('mon', views.monviews, name = "mon"),
    path('tue', views.tueviews, name = "tue"),
    path('wed', views.wedviews, name = "wed"),
    path('thu', views.thuviews, name = "thu"),
    path('fri', views.friviews, name = "fri"),
    path('sat', views.satviews, name = "sat"),
    path('sun', views.sunviews, name = "sun"),
]
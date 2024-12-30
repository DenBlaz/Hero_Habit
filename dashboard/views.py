from django.shortcuts import render

# Create your views here.
def dashboardviews(request):
    return render(request, "dashboard/dashboard.html")
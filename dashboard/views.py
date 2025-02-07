from django.shortcuts import render

def dashboardviews(request):
    return render(request, "dashboard/dashboard.html")

from django.shortcuts import render

# Create your views here.
def dashboard(request):
    return render(request, "templates/dashboard/dashboard.html")  
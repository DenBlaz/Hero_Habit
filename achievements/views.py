from django.shortcuts import render

def achiev(request):
    return render(request, "achievements/achiev.html")
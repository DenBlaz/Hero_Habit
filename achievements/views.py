from django.shortcuts import render

def achiev(request):
    return render(request, "accounts/login.html")
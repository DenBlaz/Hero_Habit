from django.shortcuts import render

def calend(request):
    return render(request, "calend/calend.html")

def calendall(request):
    return render(request, "calend/calend-for-all.html")
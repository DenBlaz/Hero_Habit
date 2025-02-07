from django.shortcuts import render


def calend(request):
    return render(request, "calend/calend-for-all.html")
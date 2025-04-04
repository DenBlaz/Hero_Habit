from django.shortcuts import render, redirect

def dashboardviews(request):
    user = request.user
    if user.main_characteristic is None:
        return redirect('accounts:character_create')
    return render(request, "dashboard/dashboard.html")
    
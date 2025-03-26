from django.shortcuts import render
from django.shortcuts import redirect

def dashboardviews(request):
    user = request.user
    if not user.main_characteristic is None:
        return redirect('accounts:character_create')
    return render(request, "dashboard/dashboard.html")

from django.shortcuts import redirect, render
from django.contrib.auth.decorators import login_required

def home(request):
    if request.user.is_authenticated:
        return redirect('profile')
    else:
        return redirect('login')
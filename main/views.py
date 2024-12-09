from django.shortcuts import redirect, render
from django.contrib.auth.decorators import login_required

def home(request):
    if request.user.is_authenticated:
        return redirect('profile')  # Редирект на іншу сторінку для залогінених
    else:
        return redirect('login')  # Редирект на сторінку логіна
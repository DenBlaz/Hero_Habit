from django.shortcuts import render, redirect
from accounts.forms import RegistrationForm, ProfileForm
from django.contrib.auth import authenticate, login
from django.contrib import messages
from django.contrib.auth import get_backends
from django.contrib.auth.decorators import login_required
from .models import Account

def register(request):
    if request.method == 'POST':
        form = RegistrationForm(request.POST)
        user = form.save()
        backend = get_backends()[0]
        login(request, user, backend=backend.__class__.__module__ + '.' + backend.__class__.__name__)  
        return redirect('/accounts/character/')
    else:
        form = RegistrationForm()

    return render(request, 'accounts/sign.html', {'form': form})

def user_login(request):
    if request.method == 'POST':
        email = request.POST['username']
        password = request.POST['password']

        user = authenticate(request, username=email, password=password)
        if user is not None:
            login(request, user)
            return redirect('dashboard:dashboard')
        else:
            messages.error(request, 'Invalid email or password')

    return render(request, 'accounts/login.html')

def character_create(request):
    return render(request, 'accounts/character.html')

@login_required
def character_create(request):
    if request.method == "POST":
        characteristic = request.POST.get("characteristic")
        gender = request.POST.get("gender")

        user = request.user
        user.main_characteristic = characteristic
        user.gender = gender
        user.save()

        messages.success(request, "Character saved successfully!")
        return redirect("accounts:welcome")

    return render(request, "accounts/character.html")


def welcome(request):
    return render(request, 'accounts/welcome.html')


def welcome(request):
    if request.method == 'POST':
        return redirect('dashboard:dashboard')  # або reverse('dashboard')
    return render(request, 'accounts/welcome.html')
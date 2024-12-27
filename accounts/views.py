from django.shortcuts import render, redirect
from django.contrib.auth import login
from .forms import CustomUserCreationForm, EmailAuthenticationForm

def register(request):
    if request.method == 'POST':
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            return redirect('dashboard:dashboard')  # Замените 'home' на вашу целевую страницу
    else:
        form = CustomUserCreationForm()
    return render(request, 'accounts/sign.html', {'form': form})

def user_login(request):
    if request.method == 'POST':
        form = EmailAuthenticationForm(data=request.POST)
        if form.is_valid():
            user = form.get_user()
            login(request, user)
            return redirect('dashboard:dashboard')  # Замените 'home' на вашу целевую страницу
    else:
        form = EmailAuthenticationForm()
    return render(request, 'accounts/login.html', {'form': form})
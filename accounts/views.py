
from django.shortcuts import render, redirect
from .forms import CustomUserCreationForm
from django.contrib.auth import authenticate, login
from .forms import LoginForm
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User

def sign_up(request):
    if request.method == "POST":
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():
            user = form.save(commit=False)
            user.set_password(form.cleaned_data["password"])
            user.save()
            messages.success(request, "Registration successful. Please log in.")
            return redirect("login")
    else:
        form = CustomUserCreationForm()
    
    return render(request, "accounts/sign.html", {"form": form})



def user_login(request):
    if request.method == "POST":
        form = LoginForm(data=request.POST)
        if form.is_valid():
            email = form.cleaned_data.get('email')
            password = form.cleaned_data.get('password')
            
            # Знайти користувача за email
            user = User.objects.filter(email=email).first()
            if user:
                # Аутентифікувати за username
                user = authenticate(request, username=user.username, password=password)
                if user:
                    login(request, user)
                    messages.success(request, f"Welcome back, {user.username}!")
                    return redirect('profile')
            messages.error(request, "Invalid email or password.")
    else:
        form = LoginForm()
    return render(request, "accounts/login.html", {"form": form})



@login_required
def profile(request):
    return render(request, "accounts/profile.html")
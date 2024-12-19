
from django.shortcuts import render, redirect
from .forms import CustomUserCreationForm
from .forms import LoginForm
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from django.contrib.auth.models import User
from django.contrib.auth.views import LoginView
from .forms import LoginForm

class UserLoginView(LoginView):
    template_name = 'accounts/login.html'
    authentication_form = LoginForm

def login(request):
    return redirect("login")

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

@login_required
def profile(request):
    return render(request, "accounts/profile.html")
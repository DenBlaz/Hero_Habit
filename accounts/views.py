
from django.shortcuts import render, redirect
from .forms import CustomUserCreationForm
from django.contrib.auth import authenticate, login
from .forms import LoginForm
from django.contrib.auth.forms import AuthenticationForm
from django.contrib.auth import login
from django.contrib import messages
from django.contrib.auth.models import User
from django.contrib.auth.decorators import login_required

def sign_up(request):
    if request.method == "POST":
        form = CustomUserCreationForm(request.POST)
        if form.is_valid():  # Проверяем валидность формы
            user = form.save(commit=False)  # Сохраняем объект User без сохранения в БД
            user.set_password(form.cleaned_data["password"])  # Хешируем пароль
            user.save()  # Сохраняем пользователя в БД
            messages.success(request, "Registration successful. Please log in.")
            return redirect("login")  # Перенаправляем на страницу логина
    else:
        form = CustomUserCreationForm()  # Если GET-запрос, показываем пустую форму
    
    return render(request, "accounts/sign.html", {"form": form})  # Возвращаем шаблон с формой



def user_login(request):
    if request.method == "POST":
        form = LoginForm(data=request.POST)
        if form.is_valid():
            email = form.cleaned_data.get('email')
            password = form.cleaned_data.get('password')
            user = authenticate(request, username=email, password=password)
            if user is not None:
                login(request, user)
                messages.success(request, f"Welcome back, {user.username}!")
                return redirect('profile')  # Имя маршрута
            else:
                messages.error(request, "Invalid email or password.")
    else:
        form = LoginForm()
    return render(request, "accounts/login.html", {"form": form})


@login_required
def profile(request):
    return render(request, "accounts/profile.html")
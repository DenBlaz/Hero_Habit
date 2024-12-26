from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate
from django.contrib.auth.views import LoginView
from .forms import RegisterForm, LoginForm

def register(request):
    if request.method == 'POST':
        form = RegisterForm(request.POST)
        if form.is_valid():
            user = form.save()
            return redirect('login')
    else:
        form = RegisterForm()
    return render(request, "accounts/sign.html", {'form': form})

class CustomLoginView(LoginView):
    template_name = 'login.html'
    authentication_form = LoginForm

    def form_valid(self, form):
        user = form.get_user()
        login(self.request, user)
        return redirect('dashboard:dashboard')  # Перекидає на сайт після входу
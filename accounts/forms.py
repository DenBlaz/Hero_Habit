from django import forms
from django.contrib.auth.forms import AuthenticationForm
from .models import CustomUser

class RegisterForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput)

    class Meta:
        model = CustomUser
        fields = ['username', 'email', 'password']

    def save(self, commit=True):
        user = super().save(commit=False)
        user.set_password(self.cleaned_data['password'])  # Хешуємо пароль
        if commit:
            user.save()
        return user
    
class LoginForm(AuthenticationForm):
    username = forms.EmailField(label="Email")
from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import AuthenticationForm



from django import forms
from django.contrib.auth.models import User

class CustomUserCreationForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput)

    class Meta:
        model = User
        fields = ["username", "email", "password"]

class LoginForm(forms.Form):
    email = forms.EmailField()
    password = forms.CharField(widget=forms.PasswordInput)
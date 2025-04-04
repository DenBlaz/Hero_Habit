from django import forms
from .models import Account


class RegistrationForm(forms.ModelForm):
    password = forms.CharField(widget=forms.PasswordInput(attrs={
        'placeholder': 'Enter password'
    }))
    email = forms.EmailField(widget=forms.EmailInput(attrs={
        'placeholder': 'Enter email'
    }))
    nickname = forms.CharField(widget=forms.TextInput(attrs={
        'placeholder': 'Enter username'
    }))

    class Meta:
        model = Account
        fields = ['email', 'nickname', 'password']

    def save(self, commit=True):
        user = super().save(commit=False)
        user.set_password(self.cleaned_data['password'])
        if commit:
            user.save()
        return user

class ProfileForm(forms.ModelForm):
    class Meta:
        model = Account
        fields = ['gender', 'main_characteristic']
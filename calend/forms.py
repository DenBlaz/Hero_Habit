from django import forms
from .models import DailyTask

class DailyTaskForm(forms.ModelForm):
    due_date = forms.DateField(input_formats=['%d.%m.%Y'])

    class Meta:
        model = DailyTask
        fields = ['title', 'description', 'characteristic', 'start_time', 'finish_time', 'due_date']
        widgets = {
            'due_date': forms.DateInput(attrs={'placeholder': 'DD.MM.YYYY'}),
            'start_time': forms.TimeInput(attrs={'placeholder': '00:00'}),
            'finish_time': forms.TimeInput(attrs={'placeholder': '23:59'}),
        }
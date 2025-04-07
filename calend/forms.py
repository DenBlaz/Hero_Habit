from django import forms
from .models import DailyTask, LongTask

class DailyTaskForm(forms.ModelForm):
    due_date = forms.DateField(input_formats=['%d.%m.%Y'])

    class Meta:
        model = DailyTask
        fields = ['title', 'description', 'characteristic', 'start_time', 'finish_time', 'due_date']

class LongTaskForm(forms.ModelForm):
    start_date = forms.DateField(input_formats=['%d.%m.%Y'])
    finish_date = forms.DateField(input_formats=['%d.%m.%Y'])

    class Meta:
        model = LongTask
        fields = ['title', 'description', 'characteristic', 'start_date', 'finish_date']
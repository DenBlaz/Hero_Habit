from django import forms
from .models import DailyTask, LongTask


class DailyTaskForm(forms.ModelForm):
    due_date = forms.DateField(input_formats=['%d.%m.%Y'], required=True)
    start_time = forms.TimeField(input_formats=['%H:%M'], required=False)
    finish_time = forms.TimeField(input_formats=['%H:%M'], required=False)
    class Meta:
        model = DailyTask
        fields = ['title', 'description', 'characteristic', 'due_date', 'start_time', 'finish_time']

class LongTaskForm(forms.ModelForm):
    start_date = forms.DateField(input_formats=['%d.%m.%Y'], required=True)
    finish_date = forms.DateField(input_formats=['%d.%m.%Y'], required=True)
    class Meta:
        model = LongTask
        fields = ['title', 'description', 'characteristic', 'start_date', 'finish_date']



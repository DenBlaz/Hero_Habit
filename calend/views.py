from django.shortcuts import render, redirect
import json
from django.http import JsonResponse
from django.views import View
from django.contrib.auth.decorators import login_required
from accounts.models import Account
from .forms import DailyTaskForm


def calend(request):
    return render(request, "calend/calend-for-all.html")
from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .forms import DailyTaskForm, LongTaskForm

@login_required
def task_create(request):
    if request.method == 'POST':
        task_type = request.POST.get('task_type')
        
        if task_type == 'long':
            form = LongTaskForm(request.POST)
        else:
            form = DailyTaskForm(request.POST)
            
        if form.is_valid():
            task = form.save(commit=False)
            task.user = request.user
            task.save()
            return redirect('calend:calend')
    else:
        form = DailyTaskForm()

    calendar_mode = request.GET.get('mode', 'day')
    return render(request, 'calend/create_task.html', {'form': form, 'calendar_mode': calendar_mode})
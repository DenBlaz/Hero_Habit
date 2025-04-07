from django.shortcuts import render, redirect
import json
from django.http import JsonResponse
from django.views import View
from django.utils.dateparse import parse_date, parse_time
from accounts.models import Account
from .forms import DailyTaskForm


def calend(request):
    return render(request, "calend/calend-for-all.html")

def create_task(request):
    if request.method == 'POST':
        form = DailyTaskForm(request.POST)
        if form.is_valid():
            task = form.save(commit=False)
            task.user = request.user
            task.save()
            return redirect('calend')
    else:
        form = DailyTaskForm()
    return render(request, 'calend-for-all.html', {'form': form})
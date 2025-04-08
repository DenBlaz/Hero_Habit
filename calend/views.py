from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .forms import DailyTaskForm, LongTaskForm
from .models import DailyTask, LongTask

@login_required
def calend(request):
    daily_tasks = DailyTask.objects.filter(user=request.user)
    long_tasks = LongTask.objects.filter(user=request.user)
    return render(request, 'calend/create_task.html', {'daily_tasks': daily_tasks, 'long_tasks': long_tasks})

@login_required
def task_create(request):
    if request.method == 'POST':
        task_type = request.POST.get('task_type')
        if task_type == 'daily':
            form = DailyTaskForm(request.POST)
        else:
            form = LongTaskForm(request.POST)

        if form.is_valid():
            task = form.save(commit=False)
            task.user = request.user
            task.save()
            return redirect('calend:calend')
        else:
            print(f"Form errors: {form.errors}")
    else:
        form = DailyTaskForm()
    return render(request, 'calend/create_task.html', {'form': form})
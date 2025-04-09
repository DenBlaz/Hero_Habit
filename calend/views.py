from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .forms import DailyTaskForm, LongTaskForm
from .models import DailyTask, LongTask
from datetime import datetime, timedelta

@login_required
def calend(request):
    today = datetime.today()
    start_of_week = today - timedelta(days=today.weekday())
    end_of_week = start_of_week + timedelta(days=6)

    daily_tasks = DailyTask.objects.filter(
        user=request.user,
        due_date__range=[start_of_week, end_of_week]
    )
    print("Daily tasks:", daily_tasks)

    start_of_year = datetime(today.year, 1, 1)
    end_of_year = datetime(today.year, 12, 31)
    long_tasks = LongTask.objects.filter(
        user=request.user,
        start_date__lte=end_of_year,
        finish_date__gte=start_of_year
    )
    print("Long tasks:", long_tasks)

    return render(request, 'calend/calend-for-all.html', {
        'daily_tasks': daily_tasks,
        'long_tasks': long_tasks,
    })

@login_required
def task_create(request):
    if request.method == 'POST':
        task_type = request.POST.get('task_type')
        task_id = request.POST.get('task_id')

        if task_type == 'daily':
            if task_id:
                task = DailyTask.objects.get(id=task_id, user=request.user)
                form = DailyTaskForm(request.POST, instance=task)
            else:
                form = DailyTaskForm(request.POST)
        elif task_type == 'long':
            if task_id:
                task = LongTask.objects.get(id=task_id, user=request.user)
                form = LongTaskForm(request.POST, instance=task)
            else:
                form = LongTaskForm(request.POST)
        else:
            return redirect('calend:calend')

        if form.is_valid():
            task = form.save(commit=False)
            task.user = request.user
            task.save()
            return redirect('calend:calend')
        else:
            daily_tasks = DailyTask.objects.filter(user=request.user)
            long_tasks = LongTask.objects.filter(user=request.user)
            return render(request, 'calend/calend-for-all.html', {
                'form': form,
                'daily_tasks': daily_tasks,
                'long_tasks': long_tasks,
                'task_type': task_type,
            })
    else:
        form = DailyTaskForm()
    return render(request, 'calend/calend-for-all.html', {
        'form': form,
        'daily_tasks': DailyTask.objects.filter(user=request.user),
        'long_tasks': LongTask.objects.filter(user=request.user),
    })
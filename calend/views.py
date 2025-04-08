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

    start_of_year = datetime(today.year, 1, 1)
    end_of_year = datetime(today.year, 12, 31)
    long_tasks = LongTask.objects.filter(
        user=request.user,
        start_date__lte=end_of_year,
        finish_date__gte=start_of_year
    )

    return render(request, 'calend/calend-for-all.html', {
        'daily_tasks': daily_tasks,
        'long_tasks': long_tasks,
    })

@login_required
def task_create(request):
    if request.method == 'POST':
        task_type = request.POST.get('task_type')
        print(f"Task type: {task_type}")
        print(f"POST data: {request.POST}")

        if task_type == 'daily':
            form = DailyTaskForm(request.POST)
        elif task_type == 'long':
            form = LongTaskForm(request.POST)
        else:
            print("Invalid task_type")
            return redirect('calend:calend')

        if form.is_valid():
            task = form.save(commit=False)
            task.user = request.user
            task.save()
            print("Task saved successfully")
            return redirect('calend:calend')
        else:
            print(f"Form errors: {form.errors}")
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
        print("GET request, showing empty form")
    return render(request, 'calend/calend-for-all.html', {
        'form': form,
        'daily_tasks': DailyTask.objects.filter(user=request.user),
        'long_tasks': LongTask.objects.filter(user=request.user),
    })
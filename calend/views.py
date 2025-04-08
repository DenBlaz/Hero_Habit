from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .forms import DailyTaskForm, LongTaskForm
from datetime import datetime, timedelta
from .models import DailyTask, LongTask

@login_required
def calend(request):
    daily_tasks = DailyTask.objects.filter(user=request.user)
    long_tasks = LongTask.objects.filter(user=request.user)
    return render(request, 'calend/calend-for-all.html', {'daily_tasks': daily_tasks, 'long_tasks': long_tasks})

@login_required
def task_create(request):
    if request.method == 'POST':
        task_type = request.POST.get('task_type')
        print(f"Task type: {task_type}")
        print(f"POST data: {request.POST}")

        if task_type == 'long':
            form = LongTaskForm(request.POST)
        else:
            form = DailyTaskForm(request.POST)
        
        if form.is_valid():
            task = form.save(commit=False)
            task.user = request.user
            task.save()
            print("Task saved successfully")
            return redirect('calend:calend')
        else:
            print(f"Form errors: {form.errors}")  
    else:
        form = DailyTaskForm()
    return render(request, 'calend/create_task.html', {'form': form})



@login_required

def calendar_view(request):
    # Get the current week (starting from Monday)
    today = datetime.today()
    start_of_week = today - timedelta(days=today.weekday())  # Start from Monday
    days_of_week = []
    for i in range(7):
        day = start_of_week + timedelta(days=i)
        days_of_week.append({
            'day': day.strftime('%A'),  # e.g., "Monday"
            'date': day.day  # e.g., 30
        })

    # Define time slots (9 AM to 2 PM)
    time_slots = ['9 am', '10 am', '11 am', '12 pm', '1 pm', '2 pm']

    # Fetch daily tasks for the current user
    daily_tasks = DailyTask.objects.filter(user=request.user)
    long_tasks = LongTask.objects.filter(user=request.user)

    context = {
        'days_of_week': days_of_week,
        'time_slots': time_slots,
        'daily_tasks': daily_tasks,
    }
    return render(request, 'calend/calend-for-all.html', context)
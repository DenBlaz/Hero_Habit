from django.shortcuts import render, redirect
from django.contrib.auth.decorators import login_required
from .forms import DailyTaskForm, LongTaskForm
from .models import DailyTask, LongTask
from datetime import datetime, timedelta

@login_required
def calend(request):
    today = datetime.today().date()  # Отримуємо тільки дату
    start_of_week = today - timedelta(days=today.weekday())
    end_of_week = start_of_week + timedelta(days=6)
    week_dates = [start_of_week + timedelta(days=i) for i in range(7)]

    daily_tasks = DailyTask.objects.filter(
        user=request.user,
        due_date__range=[start_of_week, end_of_week]
    )

    start_of_period = datetime(today.year, today.month, 1) - timedelta(days=31)
    end_of_period = datetime(today.year, today.month, 1) + timedelta(days=62)
    long_tasks = LongTask.objects.filter(
        user=request.user,
        start_date__lte=end_of_period,
        finish_date__gte=start_of_period
    )

    return render(request, 'calend/calend-for-all.html', {
        'daily_tasks': daily_tasks,
        'long_tasks': long_tasks,
        'week_dates': week_dates,
        'today': today,
    })


from datetime import datetime, timedelta
import calendar

def calendar_view(request):
    # Поточна дата (наприклад, 9 квітня 2025)
    selected_date = datetime(2025, 4, 9)  # Можна зробити динамічною через request.GET

    # Визначаємо місяць і рік
    month = selected_date.month
    year = selected_date.year

    # Отримуємо кількість днів у місяці та день тижня для 1-го числа
    num_days = calendar.monthrange(year, month)[1]  # Наприклад, 30 для квітня
    first_day = datetime(year, month, 1).weekday()  # 0 = понеділок, 6 = неділя

    # Створюємо список усіх днів місяця
    month_dates = []
    
    # Додаємо порожні клітинки перед 1-м числом
    for _ in range(first_day):
        month_dates.append(None)

    # Додаємо всі дні місяця
    for day in range(1, num_days + 1):
        month_dates.append(datetime(year, month, day))

    # Додаємо порожні клітинки після останнього дня, щоб заповнити тиждень
    while len(month_dates) % 7 != 0:
        month_dates.append(None)

    # Визначаємо поточний тиждень (7–13 квітня)
    current_week_start = selected_date - timedelta(days=selected_date.day - 7)  # Початок тижня (7 квітня)
    current_week_end = current_week_start + timedelta(days=6)  # Кінець тижня (13 квітня)

    context = {
        'month': selected_date.strftime('%B'),  # "April"
        'year': year,
        'month_dates': month_dates,  # Усі дні місяця
        'selected_date': selected_date,
        'current_week_start': current_week_start,
        'current_week_end': current_week_end,
    }
    return render(request, 'calend/calend-for-all.html', context)

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


def task_create_dash(request):
    redirect('calend:calend')
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
from django.shortcuts import render
from .models import UserStats

def stats_view(request):
    user_stats = UserStats.objects.get(user=request.user)

    context = {
        'creativity': user_stats.creativity_tasks,
        'strength': user_stats.strength_tasks,
        'intelligence': user_stats.intelligence_tasks,
        'weekly_tasks': user_stats.weekly_tasks,
        'monday': user_stats.monday_tasks,
        'tuesday': user_stats.tuesday_tasks,
        'wednesday': user_stats.wednesday_tasks,
        'thursday': user_stats.thursday_tasks,
        'friday': user_stats.friday_tasks,
        'saturday': user_stats.saturday_tasks,
        'sunday': user_stats.sunday_tasks,
        'level': user_stats.level,
        'experience': user_stats.experience,
        'request': request,
    }
    return render(request, 'stats.html', context)
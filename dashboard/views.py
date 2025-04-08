from django.shortcuts import render, redirect
from achievements.models import UserAchievement


def dashboardviews(request):
    user = request.user
    achievements = UserAchievement.objects.filter(user=user).select_related('achievement')
    if user.main_characteristic is None:
        return redirect('accounts:character_create')
    
    last_achievement = achievements.last() if achievements.exists() else None

    return render(request, "dashboard/dashboard.html", {
        'last_achievement': last_achievement
    })
from django.shortcuts import render
from achievements.models import Achiev, UserAchievement

def achiev(request):
    # Отримуємо всі досягнення користувача у вигляді списку ID
    user_achievement_ids = UserAchievement.objects.filter(user=request.user).values_list('achievement_id', flat=True)

    all_achievements = Achiev.objects.all()
    
    context = {
        'user_achievement_ids': user_achievement_ids,
        'all_achievements': all_achievements
    }
    
    return render(request, 'achievements/achiev.html', context)

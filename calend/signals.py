from django.db.models.signals import post_save
from django.dispatch import receiver
from calend.models import DailyTask, LongTask  # імпорт моделей тасок
from achievements.models import Achiev, UserAchievement  # Імпортуємо моделі досягнень

@receiver(post_save, sender=DailyTask)
def mark_achievement_as_completed(sender, instance, created, **kwargs):
    if instance.completed:  # Якщо завдання виконано
        try:
            achievement = Achiev.objects.get(code='first_task')  # Отримуємо досягнення
            if not UserAchievement.objects.filter(user=instance.user, achievement=achievement).exists():
                # Якщо користувач ще не отримав це досягнення
                UserAchievement.objects.create(user=instance.user, achievement=achievement)
        except Achiev.DoesNotExist:
            pass  # Якщо такого досягнення не знайдено
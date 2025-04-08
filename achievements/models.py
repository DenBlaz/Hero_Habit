from django.db import models
from accounts.models import Account  # імпортуємо модель користувача, якщо вона є

class Achiev(models.Model):
    name = models.CharField(max_length=255)
    code = models.CharField(max_length=50, unique=True)  # код досягнення
    description = models.TextField(blank=True, null=True)  # опис досягнення

    def __str__(self):
        return self.name


class UserAchievement(models.Model):
    user = models.ForeignKey(Account, on_delete=models.CASCADE)  # зв'язок з користувачем
    achievement = models.ForeignKey(Achiev, on_delete=models.CASCADE)  # зв'язок з досягненням
    date_awarded = models.DateTimeField(auto_now_add=True)  # дата, коли користувач отримав досягнення

    def __str__(self):
        return f'{self.user.email} - {self.achievement.name}'
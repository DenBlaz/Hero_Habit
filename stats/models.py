from django.db import models
from accounts.models import Account

class UserStats(models.Model):
    user = models.OneToOneField(Account, on_delete=models.CASCADE, related_name='stats')
    
    level = models.PositiveIntegerField(default=1)
    experience = models.PositiveIntegerField(default=0)
    
    creativity_tasks = models.PositiveIntegerField(default=1)
    strength_tasks = models.PositiveIntegerField(default=0)
    intelligence_tasks = models.PositiveIntegerField(default=0)
    
    weekly_tasks = models.PositiveIntegerField(default=0)

    monday_tasks = models.PositiveIntegerField(default=0)
    tuesday_tasks = models.PositiveIntegerField(default=0)
    wednesday_tasks = models.PositiveIntegerField(default=0)
    thursday_tasks = models.PositiveIntegerField(default=0)
    friday_tasks = models.PositiveIntegerField(default=0)
    saturday_tasks = models.PositiveIntegerField(default=0)
    sunday_tasks = models.PositiveIntegerField(default=0)

    def __str__(self):
        return f"Stats for {self.user.username}"

    class Meta:
        verbose_name = "User Statistics"
        verbose_name_plural = "User Statistics"

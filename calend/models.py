from django.db import models
from django.utils.timezone import now
from accounts.models import Account  

class DailyTask(models.Model):
    CATEGORY_CHOICES = [
        ('creativity', 'Creativity'),
        ('strength', 'Strength'),
        ('intelligence', 'Intelligence'),
    ]

    user = models.ForeignKey(Account, on_delete=models.CASCADE) 
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)

    entered_date = models.DateField(null=True, blank=True)
    start_time = models.TimeField(null=True, blank=True)
    finish_time = models.TimeField(null=True, blank=True)

    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES, null=True, blank=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    completed = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.title} ({self.user.email})"

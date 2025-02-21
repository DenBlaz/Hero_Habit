from django.db import models
from django.utils.timezone import now
from accounts.models import Account  

class DailyTask(models.Model):
    user = models.ForeignKey(Account, on_delete=models.CASCADE) 
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)

    entered_date = models.DateField(null=True, blank=True)
    start_time = models.TimeField(null=True, blank=True)
    finish_time = models.TimeField(null=True, blank=True)
    
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    completed = models.BooleanField(default=False)

    def __str__(self):
        return f"{self.title} ({self.user.email})"

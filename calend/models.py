from django.db import models
from accounts.models import Account

class Daily_Task(models.Model):
    user = models.ForeignKey(Account, on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)

    entered_date = models.DateField(null=True, blank=True)
    start_time = models.TimeField(null=True, blank=True)
    finish_time = models.TimeField(null=True, blank=True)

    completed = models.BooleanField(default=False)

    def __str__(self):
        return self.title

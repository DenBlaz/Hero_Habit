from django.db import models
from django.utils.timezone import now
from accounts.models import Account  

class DailyTask(models.Model):


    user = models.ForeignKey(Account, on_delete=models.CASCADE) 
    
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    characteristic = models.CharField(max_length=255, blank=True, null=True)
    
    start_time = models.TimeField(null=True, blank=True)
    finish_time = models.TimeField(null=True, blank=True)
    
    due_date = models.DateField(blank=True, null=True)
    completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True) 

    def __str__(self):
        return f"{self.title} ({self.user.email})"
    
class LongTask(models.Model):

    user = models.ForeignKey(Account, on_delete=models.CASCADE) 
    
    title = models.CharField(max_length=255)
    description = models.TextField(blank=True, null=True)
    characteristic = models.CharField(max_length=255, blank=True, null=True)
    
    start_date = models.DateField(blank=True, null=True)
    finish_date = models.DateField(blank=True, null=True)
    
    due_date = models.DateTimeField(blank=True, null=True)
    completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True) 

    def __str__(self):
        return f"{self.title} ({self.user.email})"
from django.db.models.signals import post_save
from django.dispatch import receiver
from accounts.models import Account
from .models import UserStats

@receiver(post_save, sender=Account)
def create_user_stats(sender, instance, created, **kwargs):
    if created:
        UserStats.objects.create(user=instance)

@receiver(post_save, sender=Account)
def save_user_stats(sender, instance, **kwargs):
    instance.stats.save()
from django.core.management.base import BaseCommand
from django.contrib.auth.models import User
from stats.models import UserStats

class Command(BaseCommand):
    help = 'Creates UserStats entries for all existing users who do not have one'

    def handle(self, *args, **kwargs):
        users_without_stats = User.objects.filter(stats__isnull=True)
        for user in users_without_stats:
            UserStats.objects.create(user=user)
            self.stdout.write(self.style.SUCCESS(f'Created UserStats for user: {user.username}'))
        self.stdout.write(self.style.SUCCESS('Finished creating UserStats for all users'))
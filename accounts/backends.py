from django.contrib.auth.backends import BaseBackend
from django.contrib.auth.hashers import check_password
from .models import Account

class EmailAuthBackend(BaseBackend):
    def authenticate(self, request, username=None, password=None, **kwargs):
        try:
            user = Account.objects.get(email=username)
            if user and check_password(password, user.password):
                return user
        except Account.DoesNotExist:
            return None

    def get_user(self, user_id):
        try:
            return Account.objects.get(pk=user_id)
        except Account.DoesNotExist:
            return None

from django.apps import AppConfig


class CalendConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'calend'

    def ready(self):
        import calend.signals  # імпорт сигналів
from django.db import migrations

def add_initial_achievements(apps, schema_editor):
    Achiev = apps.get_model('achievements', 'Achiev')
    Achiev.objects.get_or_create(
        name='First Task',
        code='first_task',
        description='Complete your first task.'
    )

class Migration(migrations.Migration):

    dependencies = [
        ('achievements', '0001_initial'),  # залежність від першої міграції
    ]

    operations = [
        migrations.RunPython(add_initial_achievements),
    ]
# Generated by Django 5.1.4 on 2025-01-09 19:33

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("home", "0007_rename_is_active_newsletter_active"),
    ]

    operations = [
        migrations.RenameField(
            model_name="newsletter", old_name="activation_token", new_name="token",
        ),
    ]

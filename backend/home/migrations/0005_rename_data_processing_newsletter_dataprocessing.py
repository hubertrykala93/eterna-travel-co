# Generated by Django 5.1.4 on 2025-01-09 18:38

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("home", "0004_rename_activated_newsletter_is_active_and_more"),
    ]

    operations = [
        migrations.RenameField(
            model_name="newsletter",
            old_name="data_processing",
            new_name="dataProcessing",
        ),
    ]

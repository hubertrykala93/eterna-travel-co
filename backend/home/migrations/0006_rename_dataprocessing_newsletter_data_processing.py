# Generated by Django 5.1.4 on 2025-01-09 18:40

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("home", "0005_rename_data_processing_newsletter_dataprocessing"),
    ]

    operations = [
        migrations.RenameField(
            model_name="newsletter",
            old_name="dataProcessing",
            new_name="data_processing",
        ),
    ]

# Generated by Django 5.1.4 on 2025-02-24 15:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("destinations", "0005_alter_language_name"),
    ]

    operations = [
        migrations.AddField(
            model_name="destination",
            name="description",
            field=models.CharField(max_length=10000, null=True),
        ),
    ]

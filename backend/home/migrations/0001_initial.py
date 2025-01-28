# Generated by Django 5.1.4 on 2025-01-27 16:24

import django.utils.timezone
import uuid
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Newsletter",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                (
                    "subscribed_at",
                    models.DateTimeField(default=django.utils.timezone.now),
                ),
                ("email", models.CharField(unique=True)),
                ("token", models.UUIDField(default=uuid.uuid4, editable=False)),
                ("active", models.BooleanField(default=False)),
            ],
            options={
                "verbose_name": "Newsletter",
                "verbose_name_plural": "Newsletters",
            },
        ),
    ]

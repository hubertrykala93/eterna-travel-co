# Generated by Django 5.1.4 on 2025-01-27 17:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("accounts", "0002_alter_profile_profile_image"),
    ]

    operations = [
        migrations.AlterField(
            model_name="profileimage",
            name="alt",
            field=models.CharField(default="Profile image"),
        ),
    ]

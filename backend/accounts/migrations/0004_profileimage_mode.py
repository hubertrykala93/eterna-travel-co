# Generated by Django 5.1.4 on 2025-01-27 17:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("accounts", "0003_alter_profileimage_alt"),
    ]

    operations = [
        migrations.AddField(
            model_name="profileimage",
            name="mode",
            field=models.CharField(blank=True, null=True),
        ),
    ]

# Generated by Django 5.1.4 on 2025-02-24 15:39

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ("destinations", "0002_currency_ticker"),
    ]

    operations = [
        migrations.RenameField(
            model_name="currency", old_name="ticker", new_name="code",
        ),
    ]

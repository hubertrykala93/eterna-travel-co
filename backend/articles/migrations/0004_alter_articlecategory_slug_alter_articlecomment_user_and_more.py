# Generated by Django 5.1.4 on 2025-01-27 21:00

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("articles", "0003_alter_articlecategory_slug"),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AlterField(
            model_name="articlecategory",
            name="slug",
            field=models.SlugField(max_length=255, unique=True),
        ),
        migrations.AlterField(
            model_name="articlecomment",
            name="user",
            field=models.ForeignKey(
                null=True,
                on_delete=django.db.models.deletion.SET_NULL,
                to=settings.AUTH_USER_MODEL,
            ),
        ),
        migrations.AlterField(
            model_name="articleimage",
            name="format",
            field=models.CharField(max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name="articleimage",
            name="height",
            field=models.IntegerField(null=True),
        ),
        migrations.AlterField(
            model_name="articleimage",
            name="mode",
            field=models.CharField(max_length=255, null=True),
        ),
        migrations.AlterField(
            model_name="articleimage", name="size", field=models.FloatField(null=True),
        ),
        migrations.AlterField(
            model_name="articleimage",
            name="width",
            field=models.IntegerField(null=True),
        ),
    ]

# Generated by Django 5.1.4 on 2025-02-20 08:00

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        (
            "articles",
            "0004_alter_articlecategory_slug_alter_articlecomment_user_and_more",
        ),
    ]

    operations = [
        migrations.AlterField(
            model_name="article",
            name="category",
            field=models.ForeignKey(
                null=True,
                on_delete=django.db.models.deletion.CASCADE,
                related_name="articles",
                to="articles.articlecategory",
            ),
        ),
    ]

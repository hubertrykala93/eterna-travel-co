# Generated by Django 5.1.4 on 2025-01-27 16:24

import django.db.models.deletion
import django.utils.timezone
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ("auth", "0012_alter_user_first_name_max_length"),
    ]

    operations = [
        migrations.CreateModel(
            name="Gender",
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
                ("name", models.CharField(null=True)),
            ],
            options={"verbose_name": "Gender", "verbose_name_plural": "Genders",},
        ),
        migrations.CreateModel(
            name="ProfileImage",
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
                ("created_at", models.DateTimeField(default=django.utils.timezone.now)),
                ("updated_at", models.DateTimeField(auto_now=True)),
                (
                    "image",
                    models.ImageField(
                        default="accounts/profile-images/default_profile_image.png",
                        upload_to="accounts/profile-images",
                    ),
                ),
                ("alt", models.CharField()),
                ("format", models.CharField(blank=True, null=True)),
                ("size", models.IntegerField(blank=True, null=True)),
                ("width", models.IntegerField(blank=True, null=True)),
                ("height", models.IntegerField(blank=True, null=True)),
            ],
            options={
                "verbose_name": "Profile Image",
                "verbose_name_plural": "Profile Images",
            },
        ),
        migrations.CreateModel(
            name="User",
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
                    "last_login",
                    models.DateTimeField(
                        blank=True, null=True, verbose_name="last login"
                    ),
                ),
                (
                    "date_joined",
                    models.DateTimeField(default=django.utils.timezone.now),
                ),
                ("username", models.CharField(unique=True)),
                ("email", models.CharField(unique=True)),
                ("password", models.CharField()),
                ("is_active", models.BooleanField(default=True)),
                ("is_staff", models.BooleanField(default=False)),
                ("is_superuser", models.BooleanField(default=False)),
                (
                    "groups",
                    models.ManyToManyField(
                        blank=True,
                        help_text="The groups this user belongs to. A user will get all permissions granted to each of their groups.",
                        related_name="user_set",
                        related_query_name="user",
                        to="auth.group",
                        verbose_name="groups",
                    ),
                ),
                (
                    "user_permissions",
                    models.ManyToManyField(
                        blank=True,
                        help_text="Specific permissions for this user.",
                        related_name="user_set",
                        related_query_name="user",
                        to="auth.permission",
                        verbose_name="user permissions",
                    ),
                ),
            ],
            options={"verbose_name": "User", "verbose_name_plural": "Users",},
        ),
        migrations.CreateModel(
            name="Profile",
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
                ("created_at", models.DateTimeField(default=django.utils.timezone.now)),
                ("updated_at", models.DateTimeField(auto_now=True)),
                ("firstname", models.CharField(null=True)),
                ("lastname", models.CharField(null=True)),
                ("bio", models.TextField(blank=True, null=True)),
                ("phone_number", models.CharField(null=True)),
                ("country", models.CharField(null=True)),
                ("state", models.CharField(null=True)),
                ("city", models.CharField(null=True)),
                (
                    "gender",
                    models.ForeignKey(
                        null=True,
                        on_delete=django.db.models.deletion.SET_NULL,
                        to="accounts.gender",
                    ),
                ),
                (
                    "user",
                    models.OneToOneField(
                        null=True,
                        on_delete=django.db.models.deletion.CASCADE,
                        to=settings.AUTH_USER_MODEL,
                    ),
                ),
                (
                    "profile_image",
                    models.OneToOneField(
                        on_delete=django.db.models.deletion.CASCADE,
                        to="accounts.profileimage",
                    ),
                ),
            ],
            options={"verbose_name": "Profile", "verbose_name_plural": "Profiles",},
        ),
    ]

from django.contrib import admin

from .models import User


@admin.register(User)
class AdminUser(admin.ModelAdmin):
    list_display = [
        "id",
        "creation_timestamp",
        "modification_timestamp",
        "username",
        "email",
        "is_verified",
        "is_active",
        "is_staff",
        "is_superuser",
    ]

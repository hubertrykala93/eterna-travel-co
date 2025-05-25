from django.contrib import admin

from .models import User


@admin.register(User)
class AdminUser(admin.ModelAdmin):
    list_display = [
        "id",
        "created_at",
        "updated_at",
        "username",
        "email",
        "is_verified",
        "is_active",
        "is_staff",
        "is_superuser",
    ]

from django.contrib import admin
from .models import ContactMessage

@admin.register(ContactMessage)
class AdminContactMessage(admin.ModelAdmin):
    list_display = [
        "id",
        "created_at",
        "name",
        "email",
        "message",
    ]
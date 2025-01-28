from django.contrib import admin
from .models import Newsletter
from .forms import AdminNewsletterForm


@admin.register(Newsletter)
class AdminNewsletter(admin.ModelAdmin):
    list_display = [
        "id",
        "formatted_subscribed_at",
        "email",
        "token",
        "active",
    ]
    form = AdminNewsletterForm

    def formatted_subscribed_at(self, obj):
        if obj.subscribed_at:
            return obj.subscribed_at.strftime("%Y-%m-%d %H:%M:%S")

    formatted_subscribed_at.short_description = "Subscribed At"

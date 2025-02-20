from django.contrib import admin
from django.contrib.auth.models import Group
from .models import User, Profile, ProfileImage, Gender
from .forms import AdminUserForm, AdminProfileForm, AdminProfileImageForm

admin.site.unregister(Group)


@admin.register(User)
class AdminUser(admin.ModelAdmin):
    list_display = [
        "id",
        "formatted_date_joined",
        "username",
        "email",
        "formatted_last_login",
        "is_active",
        "is_verified",
        "is_staff",
        "is_superuser",
    ]
    form = AdminUserForm
    fieldsets = [
        (
            "Basic Information", {
                "fields": [
                    "username",
                    "email",
                    "password",
                ]
            }
        ),
        (
            "Permissions", {
                "fields": [
                    "is_active",
                    "is_verified",
                    "is_staff",
                    "is_superuser",
                ]
            }
        )
    ]

    def formatted_last_login(self, obj):
        if obj.last_login:
            return obj.last_login.strftime("%Y-%m-%d %H:%M:%S")

    formatted_last_login.short_description = "Last Login"

    def formatted_date_joined(self, obj):
        if obj.date_joined:
            return obj.date_joined.strftime("%Y-%m-%d %H:%M:%S")

    formatted_date_joined.short_description = "Date Joined"


@admin.register(Profile)
class AdminProfile(admin.ModelAdmin):
    list_display = [
        "id",
        "formatted_created_at",
        "formatted_updated_at",
        "user",
        "profile_image",
        "firstname",
        "lastname",
        "gender",
        "bio",
        "phone_number",
        "country",
        "state",
        "city",
    ]
    form = AdminProfileForm
    fieldsets = [
        (
            "Relations", {
                "fields": [
                    "user",
                ],
            },
        ),
        (
            "Basic Information", {
                "fields": [
                    "firstname",
                    "lastname",
                    "profile_image",
                    "gender",
                    "bio",
                ],
            },
        ),
        (
            "Contact Information", {
                "fields": [
                    "phone_number",
                ],
            },
        ),
        (
            "Location", {
                "fields": [
                    "country",
                    "state",
                    "city",
                ],
            },
        ),
    ]

    def formatted_created_at(self, obj):
        if obj.created_at:
            return obj.created_at.strftime("%Y-%m-%d %H:%M:%S")

    formatted_created_at.short_description = "Created At"

    def formatted_updated_at(self, obj):
        if obj.updated_at:
            return obj.updated_at.strftime("%Y-%m-%d %H:%M:%S")

    formatted_updated_at.short_description = "Updated At"


@admin.register(Gender)
class AdminGender(admin.ModelAdmin):
    list_display = [
        "id",
        "name",
    ]


@admin.register(ProfileImage)
class AdminProfileImage(admin.ModelAdmin):
    list_display = [
        "id",
        "formatted_created_at",
        "formatted_updated_at",
        "image",
        "alt",
        "format",
        "mode",
        "size",
        "width",
        "height",
    ]
    form = AdminProfileImageForm

    def formatted_created_at(self, obj):
        if obj.created_at:
            return obj.created_at.strftime("%Y-%m-%d %H:%M:%S")

    formatted_created_at.short_description = "Created At"

    def formatted_updated_at(self, obj):
        if obj.updated_at:
            return obj.updated_at.strftime("%Y-%m-%d %H:%M:%S")

    formatted_updated_at.short_description = "Updated At"

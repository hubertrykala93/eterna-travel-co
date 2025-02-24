from django.contrib import admin
from .models import Currency, Language, TimeZone, Month, DestinationThumbnail, DestinationImage, Destination
from .forms import AdminCurrencyForm, AdminLanguageForm, AdminTimeZoneForm, AdminMonth, AdminDestinationThumbnail, \
    AdminDestinationImage, AdminDestinationForm
from django_summernote.admin import SummernoteModelAdmin


@admin.register(Currency)
class AdminCurrency(admin.ModelAdmin):
    list_display = [
        "id",
        "name",
        "code",
    ]
    form = AdminCurrencyForm


@admin.register(Language)
class AdminLanguage(admin.ModelAdmin):
    list_display = [
        "id",
        "name",
        "code",
    ]
    form = AdminLanguageForm


@admin.register(TimeZone)
class AdminTimeZone(admin.ModelAdmin):
    list_display = [
        "id",
        "name",
    ]
    form = AdminTimeZoneForm


@admin.register(Month)
class AdminMonth(admin.ModelAdmin):
    list_display = [
        "id",
        "name",
    ]
    form = AdminMonth


@admin.register(DestinationThumbnail)
class AdminDestinationThumbnail(admin.ModelAdmin):
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
    form = AdminDestinationThumbnail

    def formatted_created_at(self, obj):
        if obj.created_at:
            return obj.created_at.strftime("%Y-%m-%d %H:%M:%S")

    formatted_created_at.short_description = "Created At"

    def formatted_updated_at(self, obj):
        if obj.updated_at:
            return obj.updated_at.strftime("%Y-%m-%d %H:%M:%S")

    formatted_updated_at.short_description = "Updated At"


@admin.register(DestinationImage)
class AdminDestinationImage(admin.ModelAdmin):
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
    form = AdminDestinationImage

    def formatted_created_at(self, obj):
        if obj.created_at:
            return obj.created_at.strftime("%Y-%m-%d %H:%M:%S")

    formatted_created_at.short_description = "Created At"

    def formatted_updated_at(self, obj):
        if obj.updated_at:
            return obj.updated_at.strftime("%Y-%m-%d %H:%M:%S")

    formatted_updated_at.short_description = "Updated At"


@admin.register(Destination)
class AdminDestination(SummernoteModelAdmin):
    list_display = [
        "id",
        "formatted_created_at",
        "country",
        "slug",
        "thumbnail",
        "get_images",
        "get_languages",
        "get_currencies",
        "area",
        "population",
        "timezone",
        # "popular_tours",
        "get_time_to_travel",
    ]
    summernote_fields = ["description"]
    form = AdminDestinationForm

    def formatted_created_at(self, obj):
        if obj.created_at:
            return obj.created_at.strftime("%Y-%m-%d %H:%M:%S")

    formatted_created_at.short_description = "Created At"

    def get_images(self, obj):
        if obj.images:
            return [img.image for img in obj.images.all()]

    get_images.short_description = "Images"

    def get_languages(self, obj):
        if obj.languages:
            return [lang.name + " " + f"({lang.code})" for lang in obj.languages.all()]

    get_languages.short_description = "Languages"

    def get_currencies(self, obj):
        if obj.currencies:
            return [currency.name + " " + f"({currency.code})" for currency in obj.currencies.all()]

    get_currencies.short_description = "Currencies"

    def get_time_to_travel(self, obj):
        if obj.time_to_travel:
            return [month.name for month in obj.time_to_travel.all()]

    get_time_to_travel.short_description = "Time to Travel"

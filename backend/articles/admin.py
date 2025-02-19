from django.contrib import admin
from .models import ArticleCategory, ArticleTag, ArticleComment, ArticleImage, Article
from .forms import AdminArticleCategoryForm, AdminArticleTagForm, AdminArticleImageForm, AdminArticleCommentForm, \
    AdminArticleForm
from django_summernote.admin import SummernoteModelAdmin


@admin.register(ArticleCategory)
class AdminArticleCategory(admin.ModelAdmin):
    list_display = [
        "id",
        "name",
        "slug",
        "description",
    ]
    form = AdminArticleCategoryForm


@admin.register(ArticleTag)
class AdminArticleTag(admin.ModelAdmin):
    list_display = [
        "id",
        "name",
        "slug",
        "description",
    ]
    form = AdminArticleTagForm


@admin.register(ArticleComment)
class AdminArticleComment(admin.ModelAdmin):
    list_display = [
        "id",
        "date_posted",
        "updated_at",
        "user",
        "fullname",
        "email",
        "content",
        "active",
    ]
    form = AdminArticleCommentForm


@admin.register(ArticleImage)
class AdminArticleImage(admin.ModelAdmin):
    list_display = [
        "id",
        "created_at",
        "updated_at",
        "image",
        "alt",
        "format",
        "mode",
        "size",
        "width",
        "height",
    ]
    form = AdminArticleImageForm


@admin.register(Article)
class AdminArticle(SummernoteModelAdmin):
    list_display = [
        "id",
        "formatted_date_posted",
        "formatted_updated_at",
        "image",
        "user",
        "title",
        "slug",
        "content",
        "category",
        "display_tags",
        # "comments",
    ]
    summernote_fields = ["content"]
    form = AdminArticleForm

    def formatted_date_posted(self, obj):
        if obj.date_posted:
            return obj.date_posted.strftime("%Y-%m-%d %H:%M:%S")

    formatted_date_posted.short_description = "Date Posted"

    def formatted_updated_at(self, obj):
        if obj.updated_at:
            return obj.updated_at.strftime("%Y-%m-%d %H:%M:%S")

    formatted_updated_at.short_description = "Updated At"

    def display_tags(self, obj):
        if obj.tags:
            return [t.name for t in obj.tags.all()]

    display_tags.short_description = "Tags"

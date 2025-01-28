from django import forms
from .models import ArticleCategory, ArticleTag, ArticleComment, ArticleImage, Article
from accounts.models import User
from django_summernote.widgets import SummernoteWidget


class AdminArticleCategoryForm(forms.ModelForm):
    name = forms.CharField(
        required=True,
        help_text="Enter the category name.",
        label="Name",
    )
    description = forms.CharField(
        widget=forms.Textarea,
        required=True,
        help_text="Enter the category description.",
        label="Description",
    )

    class Meta:
        model = ArticleCategory
        fields = [
            "name",
            "description",
        ]


class AdminArticleTagForm(forms.ModelForm):
    name = forms.CharField(
        required=True,
        help_text="Enter the tag name.",
        label="Name",
    )
    description = forms.CharField(
        widget=forms.Textarea,
        required=True,
        help_text="Enter the tag description.",
        label="Description",
    )

    class Meta:
        model = ArticleTag
        fields = [
            "name",
            "description",
        ]


class AdminArticleImageForm(forms.ModelForm):
    image = forms.ImageField(
        required=True,
        help_text="Upload the article image.",
        label="Article Image",
    )
    alt = forms.CharField(
        required=False,
        help_text="Enter the alternate text.",
        label="Alt",
    )

    class Meta:
        model = ArticleImage
        fields = [
            "id",
            "image",
            "alt",
        ]


class AdminArticleCommentForm(forms.ModelForm):
    user = forms.ModelChoiceField(
        queryset=User.objects.all(),
        required=False,
        help_text="Select the comment author.",
        label="Author",
    )
    fullname = forms.CharField(
        required=False,
        help_text="Enter the author's fullname.",
        label="Fullname",
    )
    email = forms.CharField(
        required=True,
        help_text="Enter the author's email.",
        label="Email",
    )
    content = forms.CharField(
        widget=forms.Textarea,
        required=True,
        help_text="Enter the comment content."
    )
    active = forms.BooleanField(
        required=False,
        help_text="Check if you want this comment to be visible on the page.",
    )

    class Meta:
        model = ArticleComment
        fields = [
            "user",
            "fullname",
            "email",
            "content",
            "active",
        ]


class AdminArticleForm(forms.ModelForm):
    user = forms.ModelChoiceField(
        queryset=User.objects.all(),
        required=True,
        help_text="Select the article author.",
        label="Author",
    )
    title = forms.CharField(
        required=True,
        help_text="Enter the title of the article.",
        label="Title",
    )
    content = forms.CharField(
        widget=SummernoteWidget(),
        required=True,
        help_text="Enter the content of the article.",
        label="Content",
    )
    category = forms.ModelChoiceField(
        queryset=ArticleCategory.objects.all(),
        required=True,
        help_text="Select the category of the article.",
        label="Category",
    )
    tags = forms.ModelMultipleChoiceField(
        queryset=ArticleTag.objects.all(),
        required=True,
        help_text="Select tags of the article.",
        label="Tag",
    )

    class Meta:
        model = Article
        fields = [
            "image",
            "user",
            "title",
            "content",
            "category",
            "tags",
        ]

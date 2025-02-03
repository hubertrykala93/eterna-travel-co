from rest_framework import serializers
from articles.models import Article, ArticleImage, ArticleCategory
from accounts.models import User
from django.utils.html import strip_tags


class ArticleCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ArticleCategory
        fields = [
            "name",
            "slug",
        ]


class ArticleImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ArticleImage
        fields = [
            "created_at",
            "image",
            "alt",
        ]


class ArticleSerializer(serializers.ModelSerializer):
    date_posted = serializers.DateTimeField(format="%b %d, %Y")
    image = ArticleImageSerializer()
    user = serializers.SlugRelatedField(queryset=User.objects.all(), slug_field="username")
    category = ArticleCategorySerializer()

    class Meta:
        model = Article
        fields = [
            "date_posted",
            "image",
            "user",
            "title",
            "slug",
            "content",
            "category",
        ]

    def to_representation(self, instance):
        representation = super(ArticleSerializer, self).to_representation(instance=instance)

        if representation.get("date_posted"):
            representation["datePosted"] = representation.pop("date_posted")

        if representation.get("image").get("created_at"):
            representation.get("image").pop("created_at")

        if representation.get("content"):
            representation["content"] = strip_tags(' '.join(representation["content"].split(" ")[:19])) + "..."

        return representation

from rest_framework import serializers
from home.models import Newsletter
from django.core.validators import RegexValidator
from rest_framework.validators import UniqueValidator


class NewsletterSerializer(serializers.ModelSerializer):
    email = serializers.CharField(
        min_length=3,
        max_length=255,
        required=True,
        trim_whitespace=True,
        validators=[
            RegexValidator(
                regex=r'^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$',
                message="Enter a valid email address.",
            ),
        ],
        error_messages={
            "required": "Email is required.",
            "blank": "Email is required.",
            "min_length": "Ensure this value has at least 3 characters.",
            "max_length": "Ensure this value has at most 255 characters.",
        }
    )

    class Meta:
        model = Newsletter
        exclude = [
            "subscribed_at",
            "token",
            "active",
        ]
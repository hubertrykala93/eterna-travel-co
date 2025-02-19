from rest_framework import serializers
from home.models import Newsletter
from django.core.validators import RegexValidator
from rest_framework.validators import UniqueValidator


class ContactUsSerializer(serializers.Serializer):
    name = serializers.CharField(
        min_length=3,
        max_length=255,
        required=True,
        trim_whitespace=True,
        validators=[
            RegexValidator(
                regex=r'^[A-Za-z ]+$',
                message="The name should consist of uppercase and lowercase letters and may contain spaces, e.g., 'John Smith'.",
            )
        ],
        error_messages={
            "required": "Name is required.",
            "blank": "Name is required.",
            "min_length": "The name should be at least 3 characters long.",
            "max_length": "The name should not exceed 255 characters.",
        },
    )
    email = serializers.CharField(
        min_length=3,
        max_length=255,
        required=True,
        trim_whitespace=True,
        validators=[
            RegexValidator(
                regex=r'^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$',
                message="Enter a valid email address.",
            )
        ],
        error_messages={
            "required": "Email is required.",
            "blank": "Email is required.",
            "min_length": "The email should be at least 3 characters long.",
            "max_length": "The email should not exceed 255 characters.",
        }
    )
    content = serializers.CharField(
        min_length=10,
        max_length=1000,
        required=True,
        trim_whitespace=True,
        error_messages={
            "required": "Content is required.",
            "blank": "Content is required.",
            "min_length": "The content should be at least 10 characters long.",
            "max_length": "The content should not exceed 1000 characters.",
        }
    )


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

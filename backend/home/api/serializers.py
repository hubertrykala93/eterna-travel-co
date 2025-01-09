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
                regex=r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$',
                message="Enter a valid email address.",
            ),
            UniqueValidator(
                queryset=Newsletter.objects.all(),
                message="This email is already registered.",
            )
        ],
        error_messages={
            "required": "Email is required.",
            "blank": "Email is required.",
            "min_length": "Ensure this value has at least 3 characters.",
            "max_length": "Ensure this value has at most 255 characters.",
        }
    )
    data_processing = serializers.BooleanField(
        required=True,
    )

    class Meta:
        model = Newsletter
        exclude = [
            "subscribed_at",
            "token",
            "active",
        ]

    def validate_data_processing(self, data_processing):
        if data_processing is False:
            raise serializers.ValidationError(
                detail="Consent to the processing of personal data is required.",
            )

        return data_processing

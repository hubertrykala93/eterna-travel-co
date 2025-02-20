from rest_framework import serializers
from django.core.validators import RegexValidator
from accounts.models import User


class RegisterSerializer(serializers.ModelSerializer):
    username = serializers.CharField(
        min_length=3,
        max_length=255,
        trim_whitespace=True,
        required=True,
        validators=[
            RegexValidator(
                regex=r"^[A-Za-z._-]+$",
                message="Username can only contain letters, numbers, hyphens (-), underscores (_), and dots (.)",
            ),
        ],
        error_messages={
            "required": "Username is required.",
            "blank": "Username is required",
            "min_length": "The username should be at least 3 characters long.",
            "max_length": "The username should not exceed 255 characters.",
        },
    )
    email = serializers.CharField(
        min_length=3,
        max_length=255,
        required=True,
        trim_whitespace=True,
        validators=[
            RegexValidator(
                regex=r"^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$",
                message="Enter a valid email address.",
            ),
        ],
        error_messages={
            "required": "Email is required.",
            "blank": "Email is required.",
            "min_length": "The email should be at least 3 characters long.",
            "max_length": "The email should not exceed 255 characters.",
        },
    )
    password = serializers.CharField(
        min_length=8,
        max_length=255,
        trim_whitespace=True,
        write_only=True,
        required=True,
        validators=[
            RegexValidator(
                regex=r'^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-=\[\]{}|;:\'",.<>?/]).+$',
                message="Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.",
            ),
        ],
        error_messages={
            "required": "Password is required.",
            "blank": "Password is required.",
            "min_length": "The password should be at least 8 characters long.",
            "max_length": "The password should not exceed 255 characters.",
        },
    )
    repassword = serializers.CharField(
        required=True,
        write_only=True,
        trim_whitespace=True,
        error_messages={
            "required": "Confirm Password is required.",
            "blank": "Confirm Password is required.",
        }
    )

    class Meta:
        model = User
        fields = [
            "username",
            "email",
            "password",
            "repassword",
        ]

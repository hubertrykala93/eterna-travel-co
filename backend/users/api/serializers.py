from rest_framework import serializers

from users.models import User


class UserSerializer(serializers.ModelSerializer):
    repassword = serializers.CharField()

    class Meta:
        model = User
        fields = [
            "email",
            "username",
            "password",
            "repassword",
        ]

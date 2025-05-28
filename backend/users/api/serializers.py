from rest_framework import serializers

from users.models import User


class UserSerializer(serializers.ModelSerializer):
    last_login = serializers.DateTimeField(read_only=True)
    password = serializers.CharField(write_only=True)
    repassword = serializers.CharField(write_only=True)
    is_verified = serializers.BooleanField(read_only=True)
    user_permissions = serializers.PrimaryKeyRelatedField(many=True, read_only=True)

    class Meta:
        model = User
        exclude = [
            "groups",
            "is_staff",
            "is_superuser",
        ]

    def to_representation(self, instance):
        representation = super(UserSerializer, self).to_representation(instance=instance)

        if "creation_timestamp" in representation:
            representation["creationTimestamp"] = representation.pop("creation_timestamp")

        if "modification_timestamp" in representation:
            representation["modificationTimestamp"] = representation.pop("modification_timestamp")

        if "is_active" in representation:
            representation["isActive"] = representation.pop("is_active")

        if "is_verified" in representation:
            representation["isVerified"] = representation.pop("is_verified")

        if "last_login" in representation:
            representation["lastLogin"] = representation.pop("last_login")

        if "user_permissions" in representation:
            representation["userPermissions"] = representation.pop("user_permissions")

        return representation

    def create(self, validated_data):
        password = validated_data.pop("password", None)

        if validated_data.get("repassword"):
            validated_data.pop("repassword")

        user = User(
            email=validated_data.get("email"),
            username=validated_data.get("username")
        )

        user.set_password(raw_password=password)
        user.save()

        return user

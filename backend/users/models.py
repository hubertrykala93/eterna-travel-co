from uuid import uuid4

from django.contrib.auth.models import UserManager, AbstractBaseUser, PermissionsMixin
from django.db import models
from django.utils.timezone import now


class CustomUserManager(UserManager):
    def _create_user(self, username, email, password, **extra_fields):
        if not email:
            raise ValueError("You have not provided a valid e-mail address.")

        email = self.normalize_email(email=email)
        user = self.model(username=username, email=email, **extra_fields)
        user.set_password(raw_password=password)
        user.save(using=self._db)

        return user

    def create_user(self, username, email=None, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", False)
        extra_fields.setdefault("is_superuser", False)

        return self._create_user(
            username=username, email=email, password=password, **extra_fields
        )

    def create_superuser(self, username, email=None, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError("Superuser must have is_staff=True.")

        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser=True.")

        return self._create_user(
            username=username, email=email, password=password, **extra_fields
        )


class User(AbstractBaseUser, PermissionsMixin):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False, unique=True)
    creation_timestamp = models.DateTimeField(default=now, editable=False)
    modification_timestamp = models.DateTimeField(auto_now=True)
    username = models.CharField(max_length=35, unique=True)
    email = models.EmailField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    is_verified = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    objects = CustomUserManager()

    USERNAME_FIELD = "username"
    EMAIL_FIELD = "email"
    REQUIRED_FIELDS = ["email"]

    class Meta:
        ordering = ["-creation_timestamp"]
        verbose_name = "Account"
        verbose_name_plural = "Accounts"

    def __str__(self):
        return str(self.username)

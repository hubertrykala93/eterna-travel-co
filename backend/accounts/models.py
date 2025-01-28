from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.utils.timezone import now
from PIL import Image
import os
from django.db.models.signals import pre_delete
from django.dispatch import receiver


class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("Email is required.")

        email = self.normalize_email(email=email)
        user = self.model(email=email, **extra_fields)
        user.set_password(raw_password=password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError("Superuser must have is_staff=True.")

        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser=True.")

        return self.create_user(email=email, password=password, **extra_fields)


class User(AbstractBaseUser, PermissionsMixin):
    date_joined = models.DateTimeField(default=now)
    username = models.CharField(max_length=255, unique=True)
    email = models.CharField(max_length=255, unique=True)
    password = models.CharField(max_length=255)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ["username"]

    class Meta:
        verbose_name = "User"
        verbose_name_plural = "Users"

    def __str__(self):
        return str(self.username)

    def save(self, *args, **kwargs):
        super(User, self).save(*args, **kwargs)

        if not hasattr(self, "profile"):
            profile = Profile.objects.create(user=self)
            profile_image = ProfileImage.objects.create()
            profile.profile_image = profile_image
            profile.save()

            self.profile = profile

        super(User, self).save(*args, **kwargs)


class ProfileImage(models.Model):
    created_at = models.DateTimeField(default=now)
    updated_at = models.DateTimeField(auto_now=True)
    image = models.ImageField(
        upload_to="accounts/profile-images",
        default="accounts/profile-images/default_profile_image.png",
    )
    alt = models.CharField(max_length=255, default="Profile image")
    format = models.CharField(max_length=255, null=True)
    mode = models.CharField(max_length=255, null=True)
    size = models.FloatField(null=True)
    width = models.IntegerField(null=True)
    height = models.IntegerField(null=True)

    class Meta:
        verbose_name = "Profile Image"
        verbose_name_plural = "Profile Images"

    def __str__(self):
        return str(self.alt)

    def save(self, *args, **kwargs):
        if self.pk:
            super(ProfileImage, self).save(*args, **kwargs)

        img = Image.open(fp=self.image.path)

        image = resize_image(image=img, max_size=200)

        if image is not None:
            output_path = self.image.path
            image.save(fp=output_path, format="JPEG", quality=80, optimize=True)

            self.size = round(os.path.getsize(filename=self.image.path) / 1024, 2)
            self.width, self.height = image.size

        else:
            self.size = round(os.path.getsize(filename=self.image.path) / 1024, 2)
            self.width, self.height = img.size

        self.format = img.format
        self.mode = img.mode

        super(ProfileImage, self).save(*args, **kwargs)


class Gender(models.Model):
    name = models.CharField(max_length=255, null=True)

    class Meta:
        verbose_name = "Gender"
        verbose_name_plural = "Genders"

    def __str__(self):
        return str(self.name)


class Profile(models.Model):
    created_at = models.DateTimeField(default=now)
    updated_at = models.DateTimeField(auto_now=True)
    user = models.OneToOneField(to=User, on_delete=models.CASCADE, null=True)
    profile_image = models.OneToOneField(to=ProfileImage, on_delete=models.CASCADE, null=True)
    firstname = models.CharField(max_length=255, null=True)
    lastname = models.CharField(max_length=255, null=True)
    gender = models.ForeignKey(to=Gender, on_delete=models.SET_NULL, null=True)
    bio = models.TextField(max_length=500, null=True)
    phone_number = models.CharField(max_length=255, null=True)
    country = models.CharField(max_length=255, null=True)
    state = models.CharField(max_length=255, null=True)
    city = models.CharField(max_length=255, null=True)

    class Meta:
        verbose_name = "Profile"
        verbose_name_plural = "Profiles"

    def __str__(self):
        return f"{str(self.user.username)} Profile"

    def save(self, *args, **kwargs):
        if not self.gender:
            obj, created = Gender.objects.get_or_create(name="Other")

            self.gender = obj

        super(Profile, self).save(*args, **kwargs)


def resize_image(image, max_size):
    width, height = image.size

    if width > max_size or height > max_size:
        if width > height:
            ratio = max_size / float(width)
            new_width = max_size
            new_height = int(height * ratio)

        elif height < width:
            ratio = max_size / float(height)
            new_width = int(width * ratio)
            new_height = max_size

        else:
            new_width = new_height = max_size

        if image.mode != "RGB":
            image.convert(mode="RGB")

        image = image.resize((new_width, new_height), Image.LANCZOS)

        return image

    if image.mode != "RGB":
        image.convert(mode="RGB")

    return image


@receiver(signal=pre_delete, sender=User)
def delete_profile_image(sender, instance, **kwargs):
    if hasattr(instance, "profile"):
        if hasattr(instance.profile, "profile_image"):
            instance.profile.profile_image.delete()

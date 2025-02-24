from django.db import models
from django.utils.timezone import now
from tours.models import Tour
from accounts.models import resize_image
import os
from PIL import Image
from django.utils.text import slugify


class Currency(models.Model):
    name = models.CharField(max_length=255, unique=True)
    code = models.CharField(max_length=10, unique=True, null=True)

    class Meta:
        verbose_name = "Currency"
        verbose_name_plural = "Currencies"

    def __str__(self):
        return str(self.name) + " " + f"({str(self.code)})"


class Language(models.Model):
    name = models.CharField(max_length=255)
    code = models.CharField(max_length=10, null=True)

    class Meta:
        verbose_name = "Language"
        verbose_name_plural = "Languages"

    def __str__(self):
        return str(self.name) + " " + f"({str(self.code)})"


class TimeZone(models.Model):
    name = models.CharField(max_length=255, unique=True)

    class Meta:
        verbose_name = "Timezone"
        verbose_name_plural = "Timezones"

    def __str__(self):
        return str(self.name)


class Month(models.Model):
    name = models.CharField(max_length=255, unique=True)

    class Meta:
        verbose_name = "Month"
        verbose_name_plural = "Months"

    def __str__(self):
        return str(self.name)


class DestinationThumbnail(models.Model):
    created_at = models.DateTimeField(default=now)
    updated_at = models.DateTimeField(auto_now=True)
    image = models.ImageField(
        upload_to="destinations/thumbnails",
    )
    alt = models.CharField(max_length=255)
    format = models.CharField(max_length=255, null=True)
    mode = models.CharField(max_length=255, null=True)
    size = models.FloatField(null=True)
    width = models.IntegerField(null=True)
    height = models.IntegerField(null=True)

    class Meta:
        verbose_name = "Destination Thumbnail"
        verbose_name_plural = "Destination Thumbnails"

    def __str__(self):
        return str(self.image.name).split(sep="/")[-1]

    def save(self, *args, **kwargs):
        super(DestinationThumbnail, self).save(*args, **kwargs)

        if self.pk:
            super(DestinationThumbnail, self).save(*args, **kwargs)

        img = Image.open(fp=self.image.path)

        image = resize_image(image=img, max_size=1920)

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

        super(DestinationThumbnail, self).save(*args, **kwargs)


class DestinationImage(models.Model):
    created_at = models.DateTimeField(default=now)
    updated_at = models.DateTimeField(auto_now=True)
    image = models.ImageField(
        upload_to="destinations/images",
    )
    alt = models.CharField(max_length=255)
    format = models.CharField(max_length=255, null=True)
    mode = models.CharField(max_length=255, null=True)
    size = models.FloatField(null=True)
    width = models.IntegerField(null=True)
    height = models.IntegerField(null=True)

    class Meta:
        verbose_name = "Destination Image"
        verbose_name_plural = "Destination Images"

    def __str__(self):
        return str(self.image.name).split(sep="/")[-1]

    def save(self, *args, **kwargs):
        super(DestinationImage, self).save(*args, **kwargs)

        if self.pk:
            super(DestinationImage, self).save(*args, **kwargs)

        img = Image.open(fp=self.image.path)

        image = resize_image(image=img, max_size=1920)

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

        super(DestinationImage, self).save(*args, **kwargs)


class Destination(models.Model):
    created_at = models.DateTimeField(default=now)
    country = models.CharField(max_length=255, unique=True)
    slug = models.SlugField(max_length=255, unique=True, null=True)
    description = models.CharField(max_length=10000, null=True)
    thumbnail = models.ForeignKey(to=DestinationThumbnail, null=True, on_delete=models.SET_NULL)
    images = models.ManyToManyField(to=DestinationImage)
    languages = models.ManyToManyField(to=Language)
    currencies = models.ManyToManyField(to=Currency)
    area = models.CharField(max_length=20)
    population = models.CharField(max_length=20)
    timezone = models.ForeignKey(to=TimeZone, null=True, on_delete=models.SET_NULL)
    total_travelers = models.CharField(max_length=20, null=True)
    popular_tours = models.ManyToManyField(to=Tour)
    time_to_travel = models.ManyToManyField(to=Month)

    class Meta:
        verbose_name = "Destination"
        verbose_name_plural = "Destinations"

    def __str__(self):
        return str(self.country)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.country)
        
        super(Destination, self).save(*args, **kwargs)
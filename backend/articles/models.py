from django.db import models
from django.utils.timezone import now
from accounts.models import User
from django.utils.text import slugify


class ArticleCategory(models.Model):
    name = models.CharField(max_length=255, unique=True)
    slug = models.SlugField(max_length=255, unique=True)
    description = models.TextField(max_length=500, unique=True)

    class Meta:
        verbose_name = "Category"
        verbose_name_plural = "Categories"

    def __str__(self):
        return str(self.name)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)

        super(ArticleCategory, self).save(*args, **kwargs)


class ArticleTag(models.Model):
    name = models.CharField(max_length=255, unique=True)
    slug = models.SlugField(max_length=255, unique=True)
    description = models.TextField(max_length=500, unique=True)

    class Meta:
        verbose_name = "Tag"
        verbose_name_plural = "Tags"

    def __str__(self):
        return str(self.name)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.name)

        super(ArticleTag, self).save(*args, **kwargs)


class ArticleComment(models.Model):
    date_posted = models.DateTimeField(default=now)
    updated_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(to=User, on_delete=models.SET_NULL, null=True)
    fullname = models.CharField(max_length=255, unique=True)
    email = models.CharField(max_length=255, unique=True)
    content = models.TextField(max_length=1000, unique=True)
    active = models.BooleanField()

    class Meta:
        verbose_name = "Comment"
        verbose_name_plural = "Comments"

    def __str__(self):
        return f"{self.user.username} Comment"


class ArticleImage(models.Model):
    created_at = models.DateTimeField(default=now)
    updated_at = models.DateTimeField(auto_now=True)
    image = models.ImageField(
        upload_to="articles/article-images",
    )
    alt = models.CharField(max_length=255)
    format = models.CharField(max_length=255, null=True)
    mode = models.CharField(max_length=255, null=True)
    size = models.FloatField(null=True)
    width = models.IntegerField(null=True)
    height = models.IntegerField(null=True)

    class Meta:
        verbose_name = "Article Image"
        verbose_name_plural = "Article Images"

    def __str__(self):
        return str(self.image)


class Article(models.Model):
    date_posted = models.DateTimeField(default=now)
    updated_at = models.DateTimeField(auto_now=True)
    image = models.OneToOneField(to=ArticleImage, on_delete=models.SET_NULL, null=True)
    user = models.ForeignKey(to=User, on_delete=models.SET_NULL, null=True)
    title = models.CharField(max_length=255,unique=True)
    slug = models.SlugField(max_length=255,unique=True)
    content = models.TextField(max_length=2000, unique=True)
    category = models.ForeignKey(to=ArticleCategory, on_delete=models.CASCADE, null=True)
    tags = models.ManyToManyField(to=ArticleTag)
    comments = models.ManyToManyField(to=ArticleComment)

    class Meta:
        verbose_name = "Article"
        verbose_name_plural = "Articles"

    def __str__(self):
        return str(self.title)

    def save(self, *args, **kwargs):
        self.slug = slugify(self.title)

        super(Article, self).save(*args, **kwargs)

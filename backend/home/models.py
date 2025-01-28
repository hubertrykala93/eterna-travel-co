from django.db import models
from django.utils.timezone import now
from uuid import uuid4


class Newsletter(models.Model):
    subscribed_at = models.DateTimeField(default=now)
    email = models.CharField(max_length=255, unique=True)
    token = models.UUIDField(default=uuid4, editable=False)
    active = models.BooleanField(default=False)

    class Meta:
        verbose_name = "Newsletter"
        verbose_name_plural = "Newsletters"

    def __str__(self):
        return self.email

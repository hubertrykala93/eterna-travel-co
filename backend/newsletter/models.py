from uuid import uuid4

from django.db import models
from django.utils.timezone import now


class Newsletter(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid4, editable=False)
    created_at = models.DateTimeField(default=now, editable=False)
    email = models.CharField(max_length=255)

    class Meta:
        ordering = ['-created_at']
        verbose_name = 'Newsletter'
        verbose_name_plural = 'Newsletters'

    def __str__(self):
        return str(self.email)

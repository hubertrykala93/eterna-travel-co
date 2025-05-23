from django.urls import path
from . import views as newsletter_views

urlpatterns = [
    path("api/v1/newsletter", newsletter_views.CreateNewsletter.as_view(), name="create-newsletter"),
]
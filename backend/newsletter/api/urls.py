from django.urls import path
from . import views as newsletter_views

urlpatterns = [
    path("newsletter", newsletter_views.CreateNewsletter.as_view(), name="create-newsletter"),
]
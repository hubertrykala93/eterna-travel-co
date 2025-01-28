from django.urls import path
from . import views as home_views

urlpatterns = [
    path("api/v1/newsletter", home_views.CreateNewsletterAPIView.as_view(), name="create-newsletter"),
    path("api/v1/newsletter/activate", home_views.NewsletterActivationAPIView.as_view(), name="activate-newsletter"),
]
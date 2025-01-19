from django.urls import path
from . import views as home_views

urlpatterns = [
    path("api/v1/check-email-exists", home_views.CheckEmailExistsAPIView.as_view(), name="check-email-exists"),
    path("api/v1/newsletter", home_views.CreateNewsletterAPIView.as_view(), name="create-newsletter"),
]
from django.urls import path
from . import views as home_views

urlpatterns = [
    path("api/v1/newsletter", home_views.CreateNewsletterAPIView.as_view(), name="create-newsletter"),
]
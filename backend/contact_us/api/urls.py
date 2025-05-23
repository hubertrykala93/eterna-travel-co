from django.urls import path
from . import views as contact_views

urlpatterns = [
    path("api/v1/contact-us", contact_views.SendContactMessageAPIView.as_view(), name="send-contact-message"),
]
from django.urls import path

from . import views as users_views

urlpatterns = [
    path("api/v1/users", users_views.CreateUserAPIView.as_view(), name="create-user"),
]

from django.urls import path
from . import views as accounts_views

urlpatterns = [
    path(
        "api/v1/register",
        accounts_views.RegisterAPIView.as_view(),
        name="register",
    ),
    path(
        "api/v1/account-activate/<str:email>/<str:token>",
        accounts_views.AccountActivationAPIView.as_view(),
        name="activate",
    ),
]

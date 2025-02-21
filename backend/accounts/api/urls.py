from django.urls import path
from . import views as accounts_views

urlpatterns = [
    path(
        "api/v1/accounts",
        accounts_views.RegisterAPIView.as_view(),
        name="accounts",
    ),
    path(
        "api/v1/account-activate",
        accounts_views.AccountActivationAPIView.as_view(),
        name="activate",
    ),
    path(
        "api/v1/login",
        accounts_views.LoginAPIView.as_view(),
        name="login",
    ),
]

from django.urls import path

from . import views as core_views

urlpatterns = [
    path("api/v1/currency", core_views.CurrencyAPIView().as_view(), name="change-currency"),
]

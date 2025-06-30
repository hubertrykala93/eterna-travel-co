from django.urls import path

from . import views as core_views

urlpatterns = [
    path("api/v1/currencies", core_views.CurrenciesAPIView().as_view(), name="change-currency"),
    path("api/v1/languages", core_views.LanguagesAPIView().as_view(), name="change-language"),
]

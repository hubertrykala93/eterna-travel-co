from django.urls import path
from . import views as articles_views

urlpatterns = [
    path("api/v1/articles", articles_views.ArticleListAPIView.as_view(), name="articles"),
]
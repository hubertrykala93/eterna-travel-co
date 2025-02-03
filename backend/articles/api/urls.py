from django.urls import path
from . import views as articles_views

urlpatterns = [
    path("api/v1/articles", articles_views.ArticleListAPIView.as_view(), name="articles"),
    path("api/v1/category-count", articles_views.CategoryCountAPIView.as_view(), name="category-count"),
    path("api/v1/recent-articles", articles_views.RecentArticlesAPIView.as_view(), name="recent-articles"),
]
from django.urls import path
from . import views as articles_views

urlpatterns = [
    path(
        "api/v1/articles",
        articles_views.ArticleListAPIView.as_view(),
        name="articles"
    ),
    path(
        "api/v1/articles/category-count",
        articles_views.CategoryCountAPIView.as_view(),
        name="articles-category-count"
    ),
    path(
        "api/v1/articles/recent-articles",
        articles_views.RecentArticlesAPIView.as_view(),
        name="articles-recent-articles"
    ),
    path(
        "api/v1/articles/tags",
        articles_views.ArticleTagAPIView.as_view(),
        name="articles-tags"
    ),
    path(
        "api/v1/articles/gallery",
        articles_views.ArticleGalleryAPIView.as_view(),
        name="articles-gallery",
    ),
]

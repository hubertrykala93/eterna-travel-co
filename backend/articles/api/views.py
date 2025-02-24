from rest_framework.response import Response
from rest_framework import status
from .serializers import ArticleSerializer, CategoryCountSerializer, RecentArticlesSerializer, ArticleTagSerializer, \
    ArticleImageSerializer
from rest_framework.views import APIView
from django.db.models import Q
from articles.models import Article, ArticleCategory, ArticleTag, ArticleImage
from rest_framework.pagination import PageNumberPagination
from rest_framework.permissions import AllowAny


class ArticleGalleryAPIView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, *args, **kwargs):
        serializer = ArticleImageSerializer(
            ArticleImage.objects.all().order_by("-created_at"),
            many=True,
            context={
                "request": request,
            },
        )

        return Response(
            data=serializer.data,
            status=status.HTTP_200_OK,
        )


class ArticleTagAPIView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, *args, **kwargs):
        serializer = ArticleTagSerializer(
            ArticleTag.objects.all().order_by("name"),
            many=True,
        )

        return Response(
            data=serializer.data,
            status=status.HTTP_200_OK,
        )


class RecentArticlesAPIView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, *args, **kwargs):
        serializer = RecentArticlesSerializer(
            Article.objects.all().order_by("-date_posted")[:3],
            many=True,
            context={
                "request": request,
            },
        )

        return Response(
            data=serializer.data,
            status=status.HTTP_200_OK,
        )


class CategoryCountAPIView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, *args, **kwargs):
        serializer = CategoryCountSerializer(
            ArticleCategory.objects.all().order_by("name"),
            many=True,
        )

        return Response(
            data=serializer.data,
            status=status.HTTP_200_OK,
        )


class ArticlePagination(PageNumberPagination):
    page_size = 4


class ArticleListAPIView(APIView):
    permission_classes = [AllowAny]
    pagination_class = ArticlePagination

    def get_queryset(self, keyword=None, category=None, tag=None):
        queryset = Article.objects.all().order_by("-date_posted")

        if keyword:
            queryset = queryset.filter(
                Q(title__icontains=keyword) | Q(content__icontains=keyword)
            ).order_by("-date_posted")

        if category:
            try:
                c = ArticleCategory.objects.get(slug=category)

            except ArticleCategory.DoesNotExist:
                return Response(
                    data={
                        "detail": "Category does not exists.",
                    },
                    status=status.HTTP_404_NOT_FOUND,
                )

            queryset = queryset.filter(category=c)

        if tag:
            try:
                t = ArticleTag.objects.get(slug=tag)

            except ArticleTag.DoesNotExist:
                return Response(
                    data={
                        "detail": "Tag does not exists.",
                    },
                    status=status.HTTP_404_NOT_FOUND,
                )

            queryset = queryset.filter(tags=t)

        return queryset

    def get(self, request, *args, **kwargs):
        keyword = request.query_params.get("keyword", None)
        category = request.query_params.get("category", None)
        tag = request.query_params.get("tag", None)

        queryset = self.get_queryset(keyword=keyword, category=category, tag=tag)

        if not queryset:
            return Response(
                data=[],
                status=status.HTTP_200_OK,
            )

        paginator = self.pagination_class()

        if category or tag:
            paginator.page_size = 9

        page = paginator.paginate_queryset(
            queryset=queryset,
            request=request,
        )

        if page is not None:
            serializer = ArticleSerializer(
                page,
                many=True,
                context={
                    "request": request,
                    "view": self.__class__.__name__,
                },
            )

            return paginator.get_paginated_response(
                data=serializer.data,
            )

        serializer = ArticleSerializer(
            queryset,
            many=True,
            context={
                "request": request,
                "view": self.__class__.__name__,
            },
        )

        return Response(
            data=serializer.data,
            status=status.HTTP_200_OK,
        )


class ArticleDetailAPIView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, *args, **kwargs):
        article_slug = kwargs.get("article_slug")

        try:
            article = Article.objects.get(slug=article_slug)

        except Article.DoesNotExist:
            return Response(
                data={
                    "detail": "This article does not exist.",
                },
                status=status.HTTP_404_NOT_FOUND,
            )

        previous_article = Article.objects.filter(date_posted__lt=article.date_posted).order_by("-date_posted").first()
        next_article = Article.objects.filter(date_posted__gt=article.date_posted).order_by("date_posted").first()

        serializer = ArticleSerializer(
            instance=article,
            context={
                "request": request,
            },
        )

        serialized_previous_article = ArticleSerializer(
            instance=previous_article,
            context={
                "request": request,
            },
        ).data if previous_article else None

        serialized_next_article = ArticleSerializer(
            instance=next_article,
            context={
                "request": request,
            },
        ).data if next_article else None

        return Response(
            data={
                "article": serializer.data,
                "previousArticle": serialized_previous_article,
                "nextArticle": serialized_next_article,
            },
            status=status.HTTP_200_OK,
        )


class LatestTravelArticlesAPIView(APIView):
    permission_classes = [AllowAny]

    def get(self, request, *args, **kwargs):
        serializer = RecentArticlesSerializer(
            Article.objects.all().order_by("-date_posted")[:4],
            many=True,
            context={
                "request": request,
            },
        )

        return Response(
            data=serializer.data,
            status=status.HTTP_200_OK,
        )

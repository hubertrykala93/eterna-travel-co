from rest_framework.response import Response
from rest_framework import status
from .serializers import ArticleSerializer, CategoryCountSerializer, RecentArticlesSerializer, ArticleTagSerializer, \
    ArticleImageSerializer
from rest_framework.views import APIView
from django.db.models import Q
from articles.models import Article, ArticleCategory, ArticleTag, ArticleImage
from rest_framework.pagination import PageNumberPagination


class ArticleGalleryAPIView(APIView):
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
    pagination_class = ArticlePagination

    def get_queryset(self, keyword=None):
        if keyword:
            queryset = Article.objects.filter(
                Q(title__icontains=keyword) | Q(content__icontains=keyword)
            ).order_by("-date_posted")

        else:
            queryset = Article.objects.all().order_by("-date_posted")

        return queryset

    def get(self, request, *args, **kwargs):
        keyword = request.query_params.get("keyword", None)
        queryset = self.get_queryset(keyword=keyword)

        if not queryset:
            return Response(
                data=[],
                status=status.HTTP_200_OK,
            )

        paginator = self.pagination_class()
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
            },
        )

        return Response(
            data=serializer.data,
            status=status.HTTP_200_OK,
        )

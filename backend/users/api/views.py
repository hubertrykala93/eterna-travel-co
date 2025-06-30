from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from users.models import User
from .serializers import UserSerializer


class CreateUserAPIView(APIView):
    def post(self, request, *args, **kwargs):
        email = request.data.get("email")
        username = request.data.get("username")

        if User.objects.filter(email=email).exists():
            return Response(
                data={
                    "success": False,
                    "error": "User with this email already exists.",
                },
                status=status.HTTP_409_CONFLICT,
            )

        if User.objects.filter(username=username).exists():
            return Response(
                data={
                    "success": False,
                    "error": "User with this username already exists.",
                },
                status=status.HTTP_409_CONFLICT,
            )

        serializer = UserSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()

            return Response(data=serializer.data, status=status.HTTP_201_CREATED)

        else:
            return Response(
                data={
                    "success": False,
                    "error": serializer.errors,
                },
                status=status.HTTP_400_BAD_REQUEST,
            )

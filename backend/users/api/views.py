from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import UserSerializer


class CreateUserAPIView(APIView):
    def post(self, request, *args, **kwargs):
        print(request.data)
        print(kwargs)
        print(args)

        serializer = UserSerializer(data=request.data)

        if serializer.is_valid():
            serializer.save()

            return Response(data={
                "success": True,
                "message": "Successfully created",
            }, status=status.HTTP_201_CREATED)

        else:
            return Response(
                data={
                    "success": False,
                    "error": serializer.errors,
                },
                status=status.HTTP_400_BAD_REQUEST,
            )
